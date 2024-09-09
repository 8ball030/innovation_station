# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: hackathon_process.proto
# Protobuf Python Version: 5.27.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder

# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n\x17hackathon_process.proto\x12(aea.eightballer.hackathon_process.v1_0_0\"\x96\x11\n\x17HackathonProcessMessage\x12\x65\n\x05\x65rror\x18\x05 \x01(\x0b\x32T.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Error_PerformativeH\x00\x12{\n\x10\x66inal_submission\x18\x06 \x01(\x0b\x32_.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Final_Submission_PerformativeH\x00\x12u\n\ridea_feedback\x18\x07 \x01(\x0b\x32\\.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Idea_Feedback_PerformativeH\x00\x12u\n\ridea_proposal\x18\x08 \x01(\x0b\x32\\.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Idea_Proposal_PerformativeH\x00\x12w\n\x0eproject_update\x18\t \x01(\x0b\x32].aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Project_Update_PerformativeH\x00\x12\x8f\x01\n\x1asubmission_acknowledgement\x18\n \x01(\x0b\x32i.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.Submission_Acknowledgement_PerformativeH\x00\x1a\xdd\x01\n\tErrorCode\x12m\n\nerror_code\x18\x01 \x01(\x0e\x32Y.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.ErrorCode.ErrorCodeEnum\"a\n\rErrorCodeEnum\x12\r\n\tNOT_FOUND\x10\x00\x12\x16\n\x12INVALID_SUBMISSION\x10\x01\x12\x12\n\x0eINTERNAL_ERROR\x10\x02\x12\x15\n\x11PERMISSION_DENIED\x10\x03\x1a\xcc\x01\n\x10SubmissionStatus\x12w\n\x06status\x18\x01 \x01(\x0e\x32g.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.SubmissionStatus.SubmissionStatusEnum\"?\n\x14SubmissionStatusEnum\x12\x0b\n\x07PENDING\x10\x00\x12\x0c\n\x08\x41PPROVED\x10\x01\x12\x0c\n\x08REJECTED\x10\x02\x1a\xc5\x01\n\x0eSubmissionType\x12|\n\x0fsubmission_type\x18\x01 \x01(\x0e\x32\x63.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.SubmissionType.SubmissionTypeEnum\"5\n\x12SubmissionTypeEnum\x12\x08\n\x04IDEA\x10\x00\x12\n\n\x06UPDATE\x10\x01\x12\t\n\x05\x46INAL\x10\x02\x1a[\n\x1aIdea_Proposal_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x12\n\nidea_title\x18\x02 \x01(\t\x12\x18\n\x10idea_description\x18\x03 \x01(\t\x1aQ\n\x1aIdea_Feedback_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x10\n\x08\x66\x65\x65\x64\x62\x61\x63k\x18\x02 \x01(\t\x12\x10\n\x08\x61pproved\x18\x03 \x01(\x08\x1aJ\n\x1bProject_Update_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x1a\n\x12update_description\x18\x02 \x01(\t\x1a\x83\x01\n\x1d\x46inal_Submission_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x14\n\x0cproject_repo\x18\x02 \x01(\t\x12\x19\n\x11presentation_link\x18\x03 \x01(\t\x12 \n\x18presentation_link_is_set\x18\x04 \x01(\x08\x1a\x89\x02\n\'Submission_Acknowledgement_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12i\n\x0fsubmission_type\x18\x02 \x01(\x0b\x32P.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.SubmissionType\x12\x62\n\x06status\x18\x03 \x01(\x0b\x32R.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.SubmissionStatus\x1a\x88\x01\n\x12\x45rror_Performative\x12_\n\nerror_code\x18\x01 \x01(\x0b\x32K.aea.eightballer.hackathon_process.v1_0_0.HackathonProcessMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'hackathon_process_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_HACKATHONPROCESSMESSAGE']._serialized_start = 70
    _globals['_HACKATHONPROCESSMESSAGE']._serialized_end = 2268
    _globals['_HACKATHONPROCESSMESSAGE_ERRORCODE']._serialized_start = 831
    _globals['_HACKATHONPROCESSMESSAGE_ERRORCODE']._serialized_end = 1052
    _globals['_HACKATHONPROCESSMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 955
    _globals['_HACKATHONPROCESSMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1052
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONSTATUS']._serialized_start = 1055
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONSTATUS']._serialized_end = 1259
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONSTATUS_SUBMISSIONSTATUSENUM']._serialized_start = 1196
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONSTATUS_SUBMISSIONSTATUSENUM']._serialized_end = 1259
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONTYPE']._serialized_start = 1262
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONTYPE']._serialized_end = 1459
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONTYPE_SUBMISSIONTYPEENUM']._serialized_start = 1406
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSIONTYPE_SUBMISSIONTYPEENUM']._serialized_end = 1459
    _globals['_HACKATHONPROCESSMESSAGE_IDEA_PROPOSAL_PERFORMATIVE']._serialized_start = 1461
    _globals['_HACKATHONPROCESSMESSAGE_IDEA_PROPOSAL_PERFORMATIVE']._serialized_end = 1552
    _globals['_HACKATHONPROCESSMESSAGE_IDEA_FEEDBACK_PERFORMATIVE']._serialized_start = 1554
    _globals['_HACKATHONPROCESSMESSAGE_IDEA_FEEDBACK_PERFORMATIVE']._serialized_end = 1635
    _globals['_HACKATHONPROCESSMESSAGE_PROJECT_UPDATE_PERFORMATIVE']._serialized_start = 1637
    _globals['_HACKATHONPROCESSMESSAGE_PROJECT_UPDATE_PERFORMATIVE']._serialized_end = 1711
    _globals['_HACKATHONPROCESSMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_start = 1714
    _globals['_HACKATHONPROCESSMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_end = 1845
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSION_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_start = 1848
    _globals['_HACKATHONPROCESSMESSAGE_SUBMISSION_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_end = 2113
    _globals['_HACKATHONPROCESSMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2116
    _globals['_HACKATHONPROCESSMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2252
# @@protoc_insertion_point(module_scope)