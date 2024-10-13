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

"""Serialization module for hackathon_process protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.hackathon_process import (  # type: ignore
    hackathon_process_pb2,
)
from packages.eightballer.protocols.hackathon_process.custom_types import (  # type: ignore
    ErrorCode,
    SubmissionStatus,
    SubmissionType,
)
from packages.eightballer.protocols.hackathon_process.message import (  # type: ignore
    HackathonProcessMessage,
)


class HackathonProcessSerializer(Serializer):
    """Serialization for the 'hackathon_process' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'HackathonProcess' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(HackathonProcessMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        hackathon_process_msg = hackathon_process_pb2.HackathonProcessMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == HackathonProcessMessage.Performative.IDEA_PROPOSAL:
            performative = hackathon_process_pb2.HackathonProcessMessage.Idea_Proposal_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            idea_title = msg.idea_title
            performative.idea_title = idea_title
            idea_description = msg.idea_description
            performative.idea_description = idea_description
            hackathon_process_msg.idea_proposal.CopyFrom(performative)
        elif performative_id == HackathonProcessMessage.Performative.IDEA_FEEDBACK:
            performative = hackathon_process_pb2.HackathonProcessMessage.Idea_Feedback_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            feedback = msg.feedback
            performative.feedback = feedback
            approved = msg.approved
            performative.approved = approved
            hackathon_process_msg.idea_feedback.CopyFrom(performative)
        elif performative_id == HackathonProcessMessage.Performative.PROJECT_UPDATE:
            performative = hackathon_process_pb2.HackathonProcessMessage.Project_Update_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            update_description = msg.update_description
            performative.update_description = update_description
            hackathon_process_msg.project_update.CopyFrom(performative)
        elif performative_id == HackathonProcessMessage.Performative.FINAL_SUBMISSION:
            performative = hackathon_process_pb2.HackathonProcessMessage.Final_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            project_repo = msg.project_repo
            performative.project_repo = project_repo
            if msg.is_set("presentation_link"):
                performative.presentation_link_is_set = True
                presentation_link = msg.presentation_link
                performative.presentation_link = presentation_link
            hackathon_process_msg.final_submission.CopyFrom(performative)
        elif performative_id == HackathonProcessMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT:
            performative = hackathon_process_pb2.HackathonProcessMessage.Submission_Acknowledgement_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            submission_type = msg.submission_type
            SubmissionType.encode(performative.submission_type, submission_type)
            status = msg.status
            SubmissionStatus.encode(performative.status, status)
            hackathon_process_msg.submission_acknowledgement.CopyFrom(performative)
        elif performative_id == HackathonProcessMessage.Performative.ERROR:
            performative = hackathon_process_pb2.HackathonProcessMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            hackathon_process_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = hackathon_process_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'HackathonProcess' message.

        :param obj: the bytes object.
        :return: the 'HackathonProcess' message.
        """
        message_pb = ProtobufMessage()
        hackathon_process_pb = hackathon_process_pb2.HackathonProcessMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        hackathon_process_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = hackathon_process_pb.WhichOneof("performative")
        performative_id = HackathonProcessMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == HackathonProcessMessage.Performative.IDEA_PROPOSAL:
            team_id = hackathon_process_pb.idea_proposal.team_id
            performative_content["team_id"] = team_id
            idea_title = hackathon_process_pb.idea_proposal.idea_title
            performative_content["idea_title"] = idea_title
            idea_description = hackathon_process_pb.idea_proposal.idea_description
            performative_content["idea_description"] = idea_description
        elif performative_id == HackathonProcessMessage.Performative.IDEA_FEEDBACK:
            team_id = hackathon_process_pb.idea_feedback.team_id
            performative_content["team_id"] = team_id
            feedback = hackathon_process_pb.idea_feedback.feedback
            performative_content["feedback"] = feedback
            approved = hackathon_process_pb.idea_feedback.approved
            performative_content["approved"] = approved
        elif performative_id == HackathonProcessMessage.Performative.PROJECT_UPDATE:
            team_id = hackathon_process_pb.project_update.team_id
            performative_content["team_id"] = team_id
            update_description = hackathon_process_pb.project_update.update_description
            performative_content["update_description"] = update_description
        elif performative_id == HackathonProcessMessage.Performative.FINAL_SUBMISSION:
            team_id = hackathon_process_pb.final_submission.team_id
            performative_content["team_id"] = team_id
            project_repo = hackathon_process_pb.final_submission.project_repo
            performative_content["project_repo"] = project_repo
            if hackathon_process_pb.final_submission.presentation_link_is_set:
                presentation_link = hackathon_process_pb.final_submission.presentation_link
                performative_content["presentation_link"] = presentation_link
        elif performative_id == HackathonProcessMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT:
            team_id = hackathon_process_pb.submission_acknowledgement.team_id
            performative_content["team_id"] = team_id
            pb2_submission_type = hackathon_process_pb.submission_acknowledgement.submission_type
            submission_type = SubmissionType.decode(pb2_submission_type)
            performative_content["submission_type"] = submission_type
            pb2_status = hackathon_process_pb.submission_acknowledgement.status
            status = SubmissionStatus.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == HackathonProcessMessage.Performative.ERROR:
            pb2_error_code = hackathon_process_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = hackathon_process_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return HackathonProcessMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
