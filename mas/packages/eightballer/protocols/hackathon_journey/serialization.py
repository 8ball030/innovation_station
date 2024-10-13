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

"""Serialization module for hackathon_journey protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.hackathon_journey import (  # type: ignore
    hackathon_journey_pb2,
)
from packages.eightballer.protocols.hackathon_journey.custom_types import (  # type: ignore
    ErrorCode,
    OperationType,
    Status,
)
from packages.eightballer.protocols.hackathon_journey.message import (  # type: ignore
    HackathonJourneyMessage,
)


class HackathonJourneySerializer(Serializer):
    """Serialization for the 'hackathon_journey' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'HackathonJourney' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(HackathonJourneyMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        hackathon_journey_msg = hackathon_journey_pb2.HackathonJourneyMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == HackathonJourneyMessage.Performative.IDEA_GENERATION:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Idea_Generation_Performative()  # type: ignore
            participant_id = msg.participant_id
            performative.participant_id = participant_id
            idea_description = msg.idea_description
            performative.idea_description = idea_description
            hackathon_journey_msg.idea_generation.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.TEAM_FORMATION:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Team_Formation_Performative()  # type: ignore
            participant_id = msg.participant_id
            performative.participant_id = participant_id
            team_name = msg.team_name
            performative.team_name = team_name
            team_members = msg.team_members
            performative.team_members.extend(team_members)
            hackathon_journey_msg.team_formation.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.IDEA_SELECTION:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Idea_Selection_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            selected_idea = msg.selected_idea
            performative.selected_idea = selected_idea
            hackathon_journey_msg.idea_selection.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.PROGRESS_UPDATE:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Progress_Update_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            update_description = msg.update_description
            performative.update_description = update_description
            hackathon_journey_msg.progress_update.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.FINAL_SUBMISSION:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Final_Submission_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            project_link = msg.project_link
            performative.project_link = project_link
            if msg.is_set("presentation_link"):
                performative.presentation_link_is_set = True
                presentation_link = msg.presentation_link
                performative.presentation_link = presentation_link
            hackathon_journey_msg.final_submission.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.OPERATION_RESPONSE:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Operation_Response_Performative()  # type: ignore
            operation_type = msg.operation_type
            OperationType.encode(performative.operation_type, operation_type)
            team_id = msg.team_id
            performative.team_id = team_id
            status = msg.status
            Status.encode(performative.status, status)
            if msg.is_set("message"):
                performative.message_is_set = True
                message = msg.message
                performative.message = message
            hackathon_journey_msg.operation_response.CopyFrom(performative)
        elif performative_id == HackathonJourneyMessage.Performative.ERROR:
            performative = hackathon_journey_pb2.HackathonJourneyMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            hackathon_journey_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = hackathon_journey_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'HackathonJourney' message.

        :param obj: the bytes object.
        :return: the 'HackathonJourney' message.
        """
        message_pb = ProtobufMessage()
        hackathon_journey_pb = hackathon_journey_pb2.HackathonJourneyMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        hackathon_journey_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = hackathon_journey_pb.WhichOneof("performative")
        performative_id = HackathonJourneyMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == HackathonJourneyMessage.Performative.IDEA_GENERATION:
            participant_id = hackathon_journey_pb.idea_generation.participant_id
            performative_content["participant_id"] = participant_id
            idea_description = hackathon_journey_pb.idea_generation.idea_description
            performative_content["idea_description"] = idea_description
        elif performative_id == HackathonJourneyMessage.Performative.TEAM_FORMATION:
            participant_id = hackathon_journey_pb.team_formation.participant_id
            performative_content["participant_id"] = participant_id
            team_name = hackathon_journey_pb.team_formation.team_name
            performative_content["team_name"] = team_name
            team_members = hackathon_journey_pb.team_formation.team_members
            team_members_tuple = tuple(team_members)
            performative_content["team_members"] = team_members_tuple
        elif performative_id == HackathonJourneyMessage.Performative.IDEA_SELECTION:
            team_id = hackathon_journey_pb.idea_selection.team_id
            performative_content["team_id"] = team_id
            selected_idea = hackathon_journey_pb.idea_selection.selected_idea
            performative_content["selected_idea"] = selected_idea
        elif performative_id == HackathonJourneyMessage.Performative.PROGRESS_UPDATE:
            team_id = hackathon_journey_pb.progress_update.team_id
            performative_content["team_id"] = team_id
            update_description = hackathon_journey_pb.progress_update.update_description
            performative_content["update_description"] = update_description
        elif performative_id == HackathonJourneyMessage.Performative.FINAL_SUBMISSION:
            team_id = hackathon_journey_pb.final_submission.team_id
            performative_content["team_id"] = team_id
            project_link = hackathon_journey_pb.final_submission.project_link
            performative_content["project_link"] = project_link
            if hackathon_journey_pb.final_submission.presentation_link_is_set:
                presentation_link = hackathon_journey_pb.final_submission.presentation_link
                performative_content["presentation_link"] = presentation_link
        elif performative_id == HackathonJourneyMessage.Performative.OPERATION_RESPONSE:
            pb2_operation_type = hackathon_journey_pb.operation_response.operation_type
            operation_type = OperationType.decode(pb2_operation_type)
            performative_content["operation_type"] = operation_type
            team_id = hackathon_journey_pb.operation_response.team_id
            performative_content["team_id"] = team_id
            pb2_status = hackathon_journey_pb.operation_response.status
            status = Status.decode(pb2_status)
            performative_content["status"] = status
            if hackathon_journey_pb.operation_response.message_is_set:
                message = hackathon_journey_pb.operation_response.message
                performative_content["message"] = message
        elif performative_id == HackathonJourneyMessage.Performative.ERROR:
            pb2_error_code = hackathon_journey_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = hackathon_journey_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return HackathonJourneyMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
