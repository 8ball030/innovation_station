# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: hackathon_engagement.proto
# Protobuf Python Version: 5.27.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder

)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n\x1ahackathon_engagement.proto\x12+aea.eightballer.hackathon_engagement.v1_0_0\"\x8c\x14\n\x1aHackathonEngagementMessage\x12k\n\x05\x65rror\x18\x05 \x01(\x0b\x32Z.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Error_PerformativeH\x00\x12\x81\x01\n\x10\x66inal_submission\x18\x06 \x01(\x0b\x32\x65.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Final_Submission_PerformativeH\x00\x12{\n\ridea_proposal\x18\x07 \x01(\x0b\x32\x62.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Idea_Proposal_PerformativeH\x00\x12\x95\x01\n\x1asubmission_acknowledgement\x18\x08 \x01(\x0b\x32o.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Submission_Acknowledgement_PerformativeH\x00\x12}\n\x0eteam_formation\x18\t \x01(\x0b\x32\x63.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Team_Formation_PerformativeH\x00\x12\x8f\x01\n\x17team_formation_response\x18\n \x01(\x0b\x32l.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Team_Formation_Response_PerformativeH\x00\x12\x83\x01\n\x11update_submission\x18\x0b \x01(\x0b\x32\x66.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Update_Submission_PerformativeH\x00\x1a\xe3\x01\n\tErrorCode\x12s\n\nerror_code\x18\x01 \x01(\x0e\x32_.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.ErrorCode.ErrorCodeEnum\"a\n\rErrorCodeEnum\x12\r\n\tNOT_FOUND\x10\x00\x12\x16\n\x12INVALID_SUBMISSION\x10\x01\x12\x15\n\x11TEAM_FORMAT_ERROR\x10\x02\x12\x12\n\x0eINTERNAL_ERROR\x10\x03\x1a\xa9\x01\n\x06Status\x12i\n\x06status\x18\x01 \x01(\x0e\x32Y.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Status.StatusEnum\"4\n\nStatusEnum\x12\x0b\n\x07SUCCESS\x10\x00\x12\x0b\n\x07PENDING\x10\x01\x12\x0c\n\x08REJECTED\x10\x02\x1a\xce\x01\n\x0eSubmissionType\x12\x82\x01\n\x0fsubmission_type\x18\x01 \x01(\x0e\x32i.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.SubmissionType.SubmissionTypeEnum\"7\n\x12SubmissionTypeEnum\x12\x08\n\x04IDEA\x10\x00\x12\x0c\n\x08PROGRESS\x10\x01\x12\t\n\x05\x46INAL\x10\x02\x1aG\n\x1aIdea_Proposal_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x18\n\x10idea_description\x18\x02 \x01(\t\x1aH\n\x1bTeam_Formation_Performative\x12\x11\n\tteam_name\x18\x01 \x01(\t\x12\x16\n\x0emember_invites\x18\x02 \x03(\t\x1a\x97\x01\n$Team_Formation_Response_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12^\n\x06status\x18\x02 \x01(\x0b\x32N.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Status\x1aM\n\x1eUpdate_Submission_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x1a\n\x12update_description\x18\x02 \x01(\t\x1a\xc2\x01\n\x1d\x46inal_Submission_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x14\n\x0cproject_link\x18\x02 \x01(\t\x12\x1a\n\x12\x64ocumentation_link\x18\x03 \x01(\t\x12!\n\x19\x64ocumentation_link_is_set\x18\x04 \x01(\x08\x12\x19\n\x11presentation_link\x18\x05 \x01(\t\x12 \n\x18presentation_link_is_set\x18\x06 \x01(\x08\x1a\x8b\x02\n\'Submission_Acknowledgement_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12o\n\x0fsubmission_type\x18\x02 \x01(\x0b\x32V.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.SubmissionType\x12^\n\x06status\x18\x03 \x01(\x0b\x32N.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.Status\x1a\x8e\x01\n\x12\x45rror_Performative\x12\x65\n\nerror_code\x18\x01 \x01(\x0b\x32Q.aea.eightballer.hackathon_engagement.v1_0_0.HackathonEngagementMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'hackathon_engagement_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_HACKATHONENGAGEMENTMESSAGE']._serialized_start = 76
    _globals['_HACKATHONENGAGEMENTMESSAGE']._serialized_end = 2648
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERRORCODE']._serialized_start = 1032
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERRORCODE']._serialized_end = 1259
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 1162
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1259
    _globals['_HACKATHONENGAGEMENTMESSAGE_STATUS']._serialized_start = 1262
    _globals['_HACKATHONENGAGEMENTMESSAGE_STATUS']._serialized_end = 1431
    _globals['_HACKATHONENGAGEMENTMESSAGE_STATUS_STATUSENUM']._serialized_start = 1379
    _globals['_HACKATHONENGAGEMENTMESSAGE_STATUS_STATUSENUM']._serialized_end = 1431
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSIONTYPE']._serialized_start = 1434
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSIONTYPE']._serialized_end = 1640
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSIONTYPE_SUBMISSIONTYPEENUM']._serialized_start = 1585
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSIONTYPE_SUBMISSIONTYPEENUM']._serialized_end = 1640
    _globals['_HACKATHONENGAGEMENTMESSAGE_IDEA_PROPOSAL_PERFORMATIVE']._serialized_start = 1642
    _globals['_HACKATHONENGAGEMENTMESSAGE_IDEA_PROPOSAL_PERFORMATIVE']._serialized_end = 1713
    _globals['_HACKATHONENGAGEMENTMESSAGE_TEAM_FORMATION_PERFORMATIVE']._serialized_start = 1715
    _globals['_HACKATHONENGAGEMENTMESSAGE_TEAM_FORMATION_PERFORMATIVE']._serialized_end = 1787
    _globals['_HACKATHONENGAGEMENTMESSAGE_TEAM_FORMATION_RESPONSE_PERFORMATIVE']._serialized_start = 1790
    _globals['_HACKATHONENGAGEMENTMESSAGE_TEAM_FORMATION_RESPONSE_PERFORMATIVE']._serialized_end = 1941
    _globals['_HACKATHONENGAGEMENTMESSAGE_UPDATE_SUBMISSION_PERFORMATIVE']._serialized_start = 1943
    _globals['_HACKATHONENGAGEMENTMESSAGE_UPDATE_SUBMISSION_PERFORMATIVE']._serialized_end = 2020
    _globals['_HACKATHONENGAGEMENTMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_start = 2023
    _globals['_HACKATHONENGAGEMENTMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_end = 2217
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSION_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_start = 2220
    _globals['_HACKATHONENGAGEMENTMESSAGE_SUBMISSION_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_end = 2487
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2490
    _globals['_HACKATHONENGAGEMENTMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2632
# @@protoc_insertion_point(module_scope)