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

"""Serialization module for hackathon_workflow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.eightballer.protocols.hackathon_workflow import (  # type: ignore
    hackathon_workflow_pb2,
)
from packages.eightballer.protocols.hackathon_workflow.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.eightballer.protocols.hackathon_workflow.message import (  # type: ignore
    HackathonWorkflowMessage,
)


class HackathonWorkflowSerializer(Serializer):
    """Serialization for the 'hackathon_workflow' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'HackathonWorkflow' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(HackathonWorkflowMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        hackathon_workflow_msg = hackathon_workflow_pb2.HackathonWorkflowMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == HackathonWorkflowMessage.Performative.ANNOUNCE_EVENT:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Announce_Event_Performative()  # type: ignore
            event_details = msg.event_details
            performative.event_details = event_details
            registration_deadline = msg.registration_deadline
            performative.registration_deadline = registration_deadline
            hackathon_workflow_msg.announce_event.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.INITIATE_IDEA_GENERATION:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Initiate_Idea_Generation_Performative()  # type: ignore
            topic = msg.topic
            performative.topic = topic
            hackathon_workflow_msg.initiate_idea_generation.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.FORM_TEAM:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Form_Team_Performative()  # type: ignore
            team_name = msg.team_name
            performative.team_name = team_name
            member_ids = msg.member_ids
            performative.member_ids.extend(member_ids)
            hackathon_workflow_msg.form_team.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.SUBMIT_IDEA:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Submit_Idea_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            idea_description = msg.idea_description
            performative.idea_description = idea_description
            hackathon_workflow_msg.submit_idea.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.SELECT_IDEA:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Select_Idea_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            idea_approved = msg.idea_approved
            performative.idea_approved = idea_approved
            if msg.is_set("feedback"):
                performative.feedback_is_set = True
                feedback = msg.feedback
                performative.feedback = feedback
            hackathon_workflow_msg.select_idea.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.PROJECT_PROGRESS_UPDATE:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Project_Progress_Update_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            update_details = msg.update_details
            performative.update_details = update_details
            hackathon_workflow_msg.project_progress_update.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.SUBMIT_FINAL_PROJECT:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Submit_Final_Project_Performative()  # type: ignore
            team_id = msg.team_id
            performative.team_id = team_id
            project_link = msg.project_link
            performative.project_link = project_link
            if msg.is_set("presentation_link"):
                performative.presentation_link_is_set = True
                presentation_link = msg.presentation_link
                performative.presentation_link = presentation_link
            hackathon_workflow_msg.submit_final_project.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.ACKNOWLEDGEMENT:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Acknowledgement_Performative()  # type: ignore
            received = msg.received
            performative.received = received
            if msg.is_set("message"):
                performative.message_is_set = True
                message = msg.message
                performative.message = message
            hackathon_workflow_msg.acknowledgement.CopyFrom(performative)
        elif performative_id == HackathonWorkflowMessage.Performative.ERROR:
            performative = hackathon_workflow_pb2.HackathonWorkflowMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            hackathon_workflow_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = hackathon_workflow_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'HackathonWorkflow' message.

        :param obj: the bytes object.
        :return: the 'HackathonWorkflow' message.
        """
        message_pb = ProtobufMessage()
        hackathon_workflow_pb = hackathon_workflow_pb2.HackathonWorkflowMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        hackathon_workflow_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = hackathon_workflow_pb.WhichOneof("performative")
        performative_id = HackathonWorkflowMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == HackathonWorkflowMessage.Performative.ANNOUNCE_EVENT:
            event_details = hackathon_workflow_pb.announce_event.event_details
            performative_content["event_details"] = event_details
            registration_deadline = hackathon_workflow_pb.announce_event.registration_deadline
            performative_content["registration_deadline"] = registration_deadline
        elif performative_id == HackathonWorkflowMessage.Performative.INITIATE_IDEA_GENERATION:
            topic = hackathon_workflow_pb.initiate_idea_generation.topic
            performative_content["topic"] = topic
        elif performative_id == HackathonWorkflowMessage.Performative.FORM_TEAM:
            team_name = hackathon_workflow_pb.form_team.team_name
            performative_content["team_name"] = team_name
            member_ids = hackathon_workflow_pb.form_team.member_ids
            member_ids_tuple = tuple(member_ids)
            performative_content["member_ids"] = member_ids_tuple
        elif performative_id == HackathonWorkflowMessage.Performative.SUBMIT_IDEA:
            team_id = hackathon_workflow_pb.submit_idea.team_id
            performative_content["team_id"] = team_id
            idea_description = hackathon_workflow_pb.submit_idea.idea_description
            performative_content["idea_description"] = idea_description
        elif performative_id == HackathonWorkflowMessage.Performative.SELECT_IDEA:
            team_id = hackathon_workflow_pb.select_idea.team_id
            performative_content["team_id"] = team_id
            idea_approved = hackathon_workflow_pb.select_idea.idea_approved
            performative_content["idea_approved"] = idea_approved
            if hackathon_workflow_pb.select_idea.feedback_is_set:
                feedback = hackathon_workflow_pb.select_idea.feedback
                performative_content["feedback"] = feedback
        elif performative_id == HackathonWorkflowMessage.Performative.PROJECT_PROGRESS_UPDATE:
            team_id = hackathon_workflow_pb.project_progress_update.team_id
            performative_content["team_id"] = team_id
            update_details = hackathon_workflow_pb.project_progress_update.update_details
            performative_content["update_details"] = update_details
        elif performative_id == HackathonWorkflowMessage.Performative.SUBMIT_FINAL_PROJECT:
            team_id = hackathon_workflow_pb.submit_final_project.team_id
            performative_content["team_id"] = team_id
            project_link = hackathon_workflow_pb.submit_final_project.project_link
            performative_content["project_link"] = project_link
            if hackathon_workflow_pb.submit_final_project.presentation_link_is_set:
                presentation_link = hackathon_workflow_pb.submit_final_project.presentation_link
                performative_content["presentation_link"] = presentation_link
        elif performative_id == HackathonWorkflowMessage.Performative.ACKNOWLEDGEMENT:
            received = hackathon_workflow_pb.acknowledgement.received
            performative_content["received"] = received
            if hackathon_workflow_pb.acknowledgement.message_is_set:
                message = hackathon_workflow_pb.acknowledgement.message
                performative_content["message"] = message
        elif performative_id == HackathonWorkflowMessage.Performative.ERROR:
            pb2_error_code = hackathon_workflow_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = hackathon_workflow_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return HackathonWorkflowMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
