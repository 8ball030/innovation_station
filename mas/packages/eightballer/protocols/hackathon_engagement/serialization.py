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

"""Serialization module for hackathon_engagement protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.hackathon_engagement import (  # type: ignore
    hackathon_engagement_pb2,
)
from packages.eightballer.protocols.hackathon_engagement.custom_types import (  # type: ignore
    ErrorCode,
    Status,
    SubmissionType,
)
from packages.eightballer.protocols.hackathon_engagement.message import (  # type: ignore
    HackathonEngagementMessage,
)


class HackathonEngagementSerializer(Serializer):
    """Serialization for the 'hackathon_engagement' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'HackathonEngagement' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(HackathonEngagementMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        hackathon_engagement_msg = hackathon_engagement_pb2.HackathonEngagementMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == HackathonEngagementMessage.Performative.IDEA_PROPOSAL:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Idea_Proposal_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            idea_description = msg.idea_description
            performative.idea_description = idea_description
            hackathon_engagement_msg.idea_proposal.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.TEAM_FORMATION:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Team_Formation_Performative()  # type: ignore
            team_name = msg.team_name
            performative.team_name = team_name
            member_invites = msg.member_invites
            performative.member_invites.extend(member_invites)
            hackathon_engagement_msg.team_formation.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.TEAM_FORMATION_RESPONSE:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Team_Formation_Response_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            status = msg.status
            Status.encode(performative.status, status)
            hackathon_engagement_msg.team_formation_response.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.UPDATE_SUBMISSION:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Update_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            update_description = msg.update_description
            performative.update_description = update_description
            hackathon_engagement_msg.update_submission.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.FINAL_SUBMISSION:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Final_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            project_link = msg.project_link
            performative.project_link = project_link
            if msg.is_set("documentation_link"):
                performative.documentation_link_is_set = True
                documentation_link = msg.documentation_link
                performative.documentation_link = documentation_link
            if msg.is_set("presentation_link"):
                performative.presentation_link_is_set = True
                presentation_link = msg.presentation_link
                performative.presentation_link = presentation_link
            hackathon_engagement_msg.final_submission.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Submission_Acknowledgement_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            submission_type = msg.submission_type
            SubmissionType.encode(performative.submission_type, submission_type)
            status = msg.status
            Status.encode(performative.status, status)
            hackathon_engagement_msg.submission_acknowledgement.CopyFrom(performative)
        elif performative_id == HackathonEngagementMessage.Performative.ERROR:
            performative = hackathon_engagement_pb2.HackathonEngagementMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            hackathon_engagement_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = hackathon_engagement_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'HackathonEngagement' message.

        :param obj: the bytes object.
        :return: the 'HackathonEngagement' message.
        """
        message_pb = ProtobufMessage()
        hackathon_engagement_pb = hackathon_engagement_pb2.HackathonEngagementMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        hackathon_engagement_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = hackathon_engagement_pb.WhichOneof("performative")
        performative_id = HackathonEngagementMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == HackathonEngagementMessage.Performative.IDEA_PROPOSAL:
            team_id = hackathon_engagement_pb.idea_proposal.team_id
            performative_content["team_id"] = team_id
            idea_description = hackathon_engagement_pb.idea_proposal.idea_description
            performative_content["idea_description"] = idea_description
        elif performative_id == HackathonEngagementMessage.Performative.TEAM_FORMATION:
            team_name = hackathon_engagement_pb.team_formation.team_name
            performative_content["team_name"] = team_name
            member_invites = hackathon_engagement_pb.team_formation.member_invites
            member_invites_tuple = tuple(member_invites)
            performative_content["member_invites"] = member_invites_tuple
        elif performative_id == HackathonEngagementMessage.Performative.TEAM_FORMATION_RESPONSE:
            team_id = hackathon_engagement_pb.team_formation_response.team_id
            performative_content["team_id"] = team_id
            pb2_status = hackathon_engagement_pb.team_formation_response.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == HackathonEngagementMessage.Performative.UPDATE_SUBMISSION:
            team_id = hackathon_engagement_pb.update_submission.team_id
            performative_content["team_id"] = team_id
            update_description = hackathon_engagement_pb.update_submission.update_description
            performative_content["update_description"] = update_description
        elif performative_id == HackathonEngagementMessage.Performative.FINAL_SUBMISSION:
            team_id = hackathon_engagement_pb.final_submission.team_id
            performative_content["team_id"] = team_id
            project_link = hackathon_engagement_pb.final_submission.project_link
            performative_content["project_link"] = project_link
            if hackathon_engagement_pb.final_submission.documentation_link_is_set:
                documentation_link = hackathon_engagement_pb.final_submission.documentation_link
                performative_content["documentation_link"] = documentation_link
            if hackathon_engagement_pb.final_submission.presentation_link_is_set:
                presentation_link = hackathon_engagement_pb.final_submission.presentation_link
                performative_content["presentation_link"] = presentation_link
        elif performative_id == HackathonEngagementMessage.Performative.SUBMISSION_ACKNOWLEDGEMENT:
            team_id = hackathon_engagement_pb.submission_acknowledgement.team_id
            performative_content["team_id"] = team_id
            pb2_submission_type = hackathon_engagement_pb.submission_acknowledgement.submission_type
            submission_type = SubmissionType.decode(pb2_submission_type)
            performative_content["submission_type"] = submission_type
            pb2_status = hackathon_engagement_pb.submission_acknowledgement.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
        elif performative_id == HackathonEngagementMessage.Performative.ERROR:
            pb2_error_code = hackathon_engagement_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = hackathon_engagement_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return HackathonEngagementMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
