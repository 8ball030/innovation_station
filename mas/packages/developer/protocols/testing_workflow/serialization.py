# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2024 developer
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

"""Serialization module for testing_workflow protocol."""

# pylint: disable=too-many-statements,too-many-locals,no-member,too-few-public-methods,redefined-builtin
from typing import Any, Dict, cast

from aea.mail.base_pb2 import DialogueMessage  # type: ignore
from aea.mail.base_pb2 import Message as ProtobufMessage  # type: ignore
from aea.protocols.base import Message  # type: ignore
from aea.protocols.base import Serializer  # type: ignore

from packages.developer.protocols.testing_workflow import (  # type: ignore
    testing_workflow_pb2,
)
from packages.developer.protocols.testing_workflow.custom_types import (  # type: ignore
    ErrorCode,
)
from packages.developer.protocols.testing_workflow.message import (  # type: ignore
    TestingWorkflowMessage,
)


class TestingWorkflowSerializer(Serializer):
    """Serialization for the 'testing_workflow' protocol."""

    @staticmethod
    def encode(msg: Message) -> bytes:
        """
        Encode a 'TestingWorkflow' message into bytes.

        :param msg: the message object.
        :return: the bytes.
        """
        msg = cast(TestingWorkflowMessage, msg)
        message_pb = ProtobufMessage()
        dialogue_message_pb = DialogueMessage()
        testing_workflow_msg = testing_workflow_pb2.TestingWorkflowMessage()  # type: ignore

        dialogue_message_pb.message_id = msg.message_id
        dialogue_reference = msg.dialogue_reference
        dialogue_message_pb.dialogue_starter_reference = dialogue_reference[0]
        dialogue_message_pb.dialogue_responder_reference = dialogue_reference[1]
        dialogue_message_pb.target = msg.target

        performative_id = msg.performative
        if performative_id == TestingWorkflowMessage.Performative.START_TESTS:
            performative = testing_workflow_pb2.TestingWorkflowMessage.Start_Tests_Performative()  # type: ignore
            test_suite_name = msg.test_suite_name
            performative.test_suite_name = test_suite_name
            test_cases = msg.test_cases
            performative.test_cases.extend(test_cases)
            testing_workflow_msg.start_tests.CopyFrom(performative)
        elif performative_id == TestingWorkflowMessage.Performative.TEST_CASE_RESULT:
            performative = testing_workflow_pb2.TestingWorkflowMessage.Test_Case_Result_Performative()  # type: ignore
            test_case_name = msg.test_case_name
            performative.test_case_name = test_case_name
            success = msg.success
            performative.success = success
            if msg.is_set("output"):
                performative.output_is_set = True
                output = msg.output
                performative.output = output
            if msg.is_set("errors"):
                performative.errors_is_set = True
                errors = msg.errors
                performative.errors.extend(errors)
            testing_workflow_msg.test_case_result.CopyFrom(performative)
        elif performative_id == TestingWorkflowMessage.Performative.TESTS_COMPLETED:
            performative = testing_workflow_pb2.TestingWorkflowMessage.Tests_Completed_Performative()  # type: ignore
            test_suite_name = msg.test_suite_name
            performative.test_suite_name = test_suite_name
            total_tests = msg.total_tests
            performative.total_tests = total_tests
            passed_tests = msg.passed_tests
            performative.passed_tests = passed_tests
            failed_tests = msg.failed_tests
            performative.failed_tests = failed_tests
            if msg.is_set("summary"):
                performative.summary_is_set = True
                summary = msg.summary
                performative.summary = summary
            testing_workflow_msg.tests_completed.CopyFrom(performative)
        elif performative_id == TestingWorkflowMessage.Performative.ERROR:
            performative = testing_workflow_pb2.TestingWorkflowMessage.Error_Performative()  # type: ignore
            error_code = msg.error_code
            ErrorCode.encode(performative.error_code, error_code)
            error_msg = msg.error_msg
            performative.error_msg = error_msg
            testing_workflow_msg.error.CopyFrom(performative)
        else:
            raise ValueError("Performative not valid: {}".format(performative_id))

        dialogue_message_pb.content = testing_workflow_msg.SerializeToString()

        message_pb.dialogue_message.CopyFrom(dialogue_message_pb)
        message_bytes = message_pb.SerializeToString()
        return message_bytes

    @staticmethod
    def decode(obj: bytes) -> Message:
        """
        Decode bytes into a 'TestingWorkflow' message.

        :param obj: the bytes object.
        :return: the 'TestingWorkflow' message.
        """
        message_pb = ProtobufMessage()
        testing_workflow_pb = testing_workflow_pb2.TestingWorkflowMessage()  # type: ignore
        message_pb.ParseFromString(obj)
        message_id = message_pb.dialogue_message.message_id
        dialogue_reference = (
            message_pb.dialogue_message.dialogue_starter_reference,
            message_pb.dialogue_message.dialogue_responder_reference,
        )
        target = message_pb.dialogue_message.target

        testing_workflow_pb.ParseFromString(message_pb.dialogue_message.content)
        performative = testing_workflow_pb.WhichOneof("performative")
        performative_id = TestingWorkflowMessage.Performative(str(performative))
        performative_content = dict()  # type: Dict[str, Any]
        if performative_id == TestingWorkflowMessage.Performative.START_TESTS:
            test_suite_name = testing_workflow_pb.start_tests.test_suite_name
            performative_content["test_suite_name"] = test_suite_name
            test_cases = testing_workflow_pb.start_tests.test_cases
            test_cases_tuple = tuple(test_cases)
            performative_content["test_cases"] = test_cases_tuple
        elif performative_id == TestingWorkflowMessage.Performative.TEST_CASE_RESULT:
            test_case_name = testing_workflow_pb.test_case_result.test_case_name
            performative_content["test_case_name"] = test_case_name
            success = testing_workflow_pb.test_case_result.success
            performative_content["success"] = success
            if testing_workflow_pb.test_case_result.output_is_set:
                output = testing_workflow_pb.test_case_result.output
                performative_content["output"] = output
            if testing_workflow_pb.test_case_result.errors_is_set:
                errors = testing_workflow_pb.test_case_result.errors
                errors_tuple = tuple(errors)
                performative_content["errors"] = errors_tuple
        elif performative_id == TestingWorkflowMessage.Performative.TESTS_COMPLETED:
            test_suite_name = testing_workflow_pb.tests_completed.test_suite_name
            performative_content["test_suite_name"] = test_suite_name
            total_tests = testing_workflow_pb.tests_completed.total_tests
            performative_content["total_tests"] = total_tests
            passed_tests = testing_workflow_pb.tests_completed.passed_tests
            performative_content["passed_tests"] = passed_tests
            failed_tests = testing_workflow_pb.tests_completed.failed_tests
            performative_content["failed_tests"] = failed_tests
            if testing_workflow_pb.tests_completed.summary_is_set:
                summary = testing_workflow_pb.tests_completed.summary
                performative_content["summary"] = summary
        elif performative_id == TestingWorkflowMessage.Performative.ERROR:
            pb2_error_code = testing_workflow_pb.error.error_code
            error_code = ErrorCode.decode(pb2_error_code)
            performative_content["error_code"] = error_code
            error_msg = testing_workflow_pb.error.error_msg
            performative_content["error_msg"] = error_msg
        else:
            raise ValueError("Performative not valid: {}.".format(performative_id))

        return TestingWorkflowMessage(
            message_id=message_id,
            dialogue_reference=dialogue_reference,
            target=target,
            performative=performative,
            **performative_content,
        )
