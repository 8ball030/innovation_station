# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 eightballer
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------

"""Serialization module for hackathon_competition protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.hackathon_competition import (  # type: ignore
    hackathon_competition_pb2,
)
from packages.eightballer.protocols.hackathon_competition.custom_types import (  # type: ignore
    ErrorCode,
    Status,
    SubmissionType,
)
from packages.eightballer.protocols.hackathon_competition.message import (  # type: ignore
    HackathonCompetitionMessage,
)


class HackathonCompetitionSerializer(Serializer):
    """Serialization for the 'hackathon_competition' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'HackathonCompetition' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(HackathonCompetitionMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        hackathon_competition_msg = hackathon_competition_pb2.HackathonCompetitionMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == HackathonCompetitionMessage.Performative.REGISTER_TEAM:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Register_Team_Performative()  # type: ignore
            team_name = msg.team_name
            performative.team_name = team_name
            members = msg.members
            performative.members.extend(members)
            hackathon_competition_msg.register_team.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.IDEA_SUBMISSION:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Idea_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            idea_description = msg.idea_description
            performative.idea_description = idea_description
            hackathon_competition_msg.idea_submission.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.PROGRESS_UPDATE:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Progress_Update_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            update_description = msg.update_description
            performative.update_description = update_description
            hackathon_competition_msg.progress_update.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.FINAL_SUBMISSION:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Final_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            project_link = msg.project_link
            performative.project_link = project_link
            if msg.is_set("presentation_link"):
                performative.presentation_link_is_set = True
                presentation_link = msg.presentation_link
                performative.presentation_link = presentation_link
            hackathon_competition_msg.final_submission.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.REGISTRATION_ACKNOWLEDGEMENT:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Registration_Acknowledgement_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            status = msg.status
            Status.encode(performative.status, status)
            hackathon_competition_msg.registration_acknowledgement.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.SUBMISSION_RESPONSE:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Submission_Response_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            submission_type = msg.submission_type
            SubmissionType.encode(performative.submission_type, submission_type)
            status = msg.status
            Status.encode(performative.status, status)
            hackathon_competition_msg.submission_response.CopyFrom(performative)
        elif performative_id == HackathonCompetitionMessage.Performative.ERROR:
            performative = hackathon_competition_pb2.HackathonCompetitionMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            hackathon_competition_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = hackathon_competition_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'HackathonCompetition' message.

        :param obj: the bytes object.
        :return: the 'HackathonCompetition' message.
        """
        message_pb = ProtobufMessage()
        hackathon_competition_pb = hackathon_competition_pb2.HackathonCompetitionMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        hackathon_competition_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = hackathon_competition_pb.WhichOneof("performative")
        performative_id = HackathonCompetitionMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == HackathonCompetitionMessage.Performative.REGISTER_TEAM:
            team_name = hackathon_competition_pb.register_team.team_name
            performative_content["team_name"] = team_name
            members = hackathon_competition_pb.register_team.members
            members_tuple = tuple(members)
            performative_content["members"] = members_tuple
        elif performative_id == HackathonCompetitionMessage.Performative.IDEA_SUBMISSION:
            team_id = hackathon_competition_pb.idea_submission.team_id
            performative_content["team_id"] = team_id
            idea_description = hackathon_competition_pb.idea_submission.idea_description
            performative_content["idea_description"] = idea_description
        elif performative_id == HackathonCompetitionMessage.Performative.PROGRESS_UPDATE:
            team_id = hackathon_competition_pb.progress_update.team_id
            performative_content["team_id"] = team_id
            update_description = hackathon_competition_pb.progress_update.update_description
            performative_content["update_description"] = update_description
        elif performative_id == HackathonCompetitionMessage.Performative.FINAL_SUBMISSION:
            team_id = hackathon_competition_pb.final_submission.team_id
            performative_content["team_id"] = team_id
            project_link = hackathon_competition_pb.final_submission.project_link
            performative_content["project_link"] = project_link
            if hackathon_competition_pb.final_submission.presentation_link_is_set:
                presentation_link = hackathon_competition_pb.final_submission.presentation_link
                performative_content["presentation_link"] = presentation_link
        elif performative_id == HackathonCompetitionMessage.Performative.REGISTRATION_ACKNOWLEDGEMENT:
            team_id = hackathon_competition_pb.registration_acknowledgement.team_id
            performative_content["team_id"] = team_id
            pb2_status = hackathon_competition_pb.registration_acknowledgement.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == HackathonCompetitionMessage.Performative.SUBMISSION_RESPONSE:
            team_id = hackathon_competition_pb.submission_response.team_id
            performative_content["team_id"] = team_id
            pb2_submission_type = hackathon_competition_pb.submission_response.submission_type
            submission_type = SubmissionType.decode(pb2_submission_type)
            performative_content["submission_type"] = submission_type
            pb2_status = hackathon_competition_pb.submission_response.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == HackathonCompetitionMessage.Performative.ERROR:
            pb2_error_code = hackathon_competition_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = hackathon_competition_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return HackathonCompetitionMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
