# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: hackathon_workflow.proto
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
    b'\n\x18hackathon_workflow.proto\x12)aea.eightballer.hackathon_workflow.v0_2_0\"\xd9\x11\n\x18HackathonWorkflowMessage\x12{\n\x0f\x61\x63knowledgement\x18\x05 \x01(\x0b\x32`.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Acknowledgement_PerformativeH\x00\x12y\n\x0e\x61nnounce_event\x18\x06 \x01(\x0b\x32_.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Announce_Event_PerformativeH\x00\x12g\n\x05\x65rror\x18\x07 \x01(\x0b\x32V.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Error_PerformativeH\x00\x12o\n\tform_team\x18\x08 \x01(\x0b\x32Z.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Form_Team_PerformativeH\x00\x12\x8d\x01\n\x18initiate_idea_generation\x18\t \x01(\x0b\x32i.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Initiate_Idea_Generation_PerformativeH\x00\x12\x8b\x01\n\x17project_progress_update\x18\n \x01(\x0b\x32h.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Project_Progress_Update_PerformativeH\x00\x12s\n\x0bselect_idea\x18\x0b \x01(\x0b\x32\\.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Select_Idea_PerformativeH\x00\x12\x85\x01\n\x14submit_final_project\x18\x0c \x01(\x0b\x32\x65.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Submit_Final_Project_PerformativeH\x00\x12s\n\x0bsubmit_idea\x18\r \x01(\x0b\x32\\.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.Submit_Idea_PerformativeH\x00\x1a\x83\x02\n\tErrorCode\x12o\n\nerror_code\x18\x01 \x01(\x0e\x32[.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.ErrorCode.ErrorCodeEnum\"\x84\x01\n\rErrorCodeEnum\x12\x17\n\x13REGISTRATION_CLOSED\x10\x00\x12\x1b\n\x17TEAM_ALREADY_REGISTERED\x10\x01\x12\x11\n\rIDEA_REJECTED\x10\x02\x12\x15\n\x11SUBMISSION_FAILED\x10\x03\x12\x13\n\x0fINVALID_TEAM_ID\x10\x04\x1aS\n\x1b\x41nnounce_Event_Performative\x12\x15\n\revent_details\x18\x01 \x01(\t\x12\x1d\n\x15registration_deadline\x18\x02 \x01(\t\x1a\x36\n%Initiate_Idea_Generation_Performative\x12\r\n\x05topic\x18\x01 \x01(\t\x1a?\n\x16\x46orm_Team_Performative\x12\x11\n\tteam_name\x18\x01 \x01(\t\x12\x12\n\nmember_ids\x18\x02 \x03(\t\x1a\x45\n\x18Submit_Idea_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x18\n\x10idea_description\x18\x02 \x01(\t\x1am\n\x18Select_Idea_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x15\n\ridea_approved\x18\x02 \x01(\x08\x12\x10\n\x08\x66\x65\x65\x64\x62\x61\x63k\x18\x03 \x01(\t\x12\x17\n\x0f\x66\x65\x65\x64\x62\x61\x63k_is_set\x18\x04 \x01(\x08\x1aO\n$Project_Progress_Update_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x16\n\x0eupdate_details\x18\x02 \x01(\t\x1a\x87\x01\n!Submit_Final_Project_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x14\n\x0cproject_link\x18\x02 \x01(\t\x12\x19\n\x11presentation_link\x18\x03 \x01(\t\x12 \n\x18presentation_link_is_set\x18\x04 \x01(\x08\x1aY\n\x1c\x41\x63knowledgement_Performative\x12\x10\n\x08received\x18\x01 \x01(\x08\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x16\n\x0emessage_is_set\x18\x03 \x01(\x08\x1a\x8a\x01\n\x12\x45rror_Performative\x12\x61\n\nerror_code\x18\x01 \x01(\x0b\x32M.aea.eightballer.hackathon_workflow.v0_2_0.HackathonWorkflowMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'hackathon_workflow_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_HACKATHONWORKFLOWMESSAGE']._serialized_start = 72
    _globals['_HACKATHONWORKFLOWMESSAGE']._serialized_end = 2337
    _globals['_HACKATHONWORKFLOWMESSAGE_ERRORCODE']._serialized_start = 1223
    _globals['_HACKATHONWORKFLOWMESSAGE_ERRORCODE']._serialized_end = 1482
    _globals['_HACKATHONWORKFLOWMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 1350
    _globals['_HACKATHONWORKFLOWMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1482
    _globals['_HACKATHONWORKFLOWMESSAGE_ANNOUNCE_EVENT_PERFORMATIVE']._serialized_start = 1484
    _globals['_HACKATHONWORKFLOWMESSAGE_ANNOUNCE_EVENT_PERFORMATIVE']._serialized_end = 1567
    _globals['_HACKATHONWORKFLOWMESSAGE_INITIATE_IDEA_GENERATION_PERFORMATIVE']._serialized_start = 1569
    _globals['_HACKATHONWORKFLOWMESSAGE_INITIATE_IDEA_GENERATION_PERFORMATIVE']._serialized_end = 1623
    _globals['_HACKATHONWORKFLOWMESSAGE_FORM_TEAM_PERFORMATIVE']._serialized_start = 1625
    _globals['_HACKATHONWORKFLOWMESSAGE_FORM_TEAM_PERFORMATIVE']._serialized_end = 1688
    _globals['_HACKATHONWORKFLOWMESSAGE_SUBMIT_IDEA_PERFORMATIVE']._serialized_start = 1690
    _globals['_HACKATHONWORKFLOWMESSAGE_SUBMIT_IDEA_PERFORMATIVE']._serialized_end = 1759
    _globals['_HACKATHONWORKFLOWMESSAGE_SELECT_IDEA_PERFORMATIVE']._serialized_start = 1761
    _globals['_HACKATHONWORKFLOWMESSAGE_SELECT_IDEA_PERFORMATIVE']._serialized_end = 1870
    _globals['_HACKATHONWORKFLOWMESSAGE_PROJECT_PROGRESS_UPDATE_PERFORMATIVE']._serialized_start = 1872
    _globals['_HACKATHONWORKFLOWMESSAGE_PROJECT_PROGRESS_UPDATE_PERFORMATIVE']._serialized_end = 1951
    _globals['_HACKATHONWORKFLOWMESSAGE_SUBMIT_FINAL_PROJECT_PERFORMATIVE']._serialized_start = 1954
    _globals['_HACKATHONWORKFLOWMESSAGE_SUBMIT_FINAL_PROJECT_PERFORMATIVE']._serialized_end = 2089
    _globals['_HACKATHONWORKFLOWMESSAGE_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_start = 2091
    _globals['_HACKATHONWORKFLOWMESSAGE_ACKNOWLEDGEMENT_PERFORMATIVE']._serialized_end = 2180
    _globals['_HACKATHONWORKFLOWMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2183
    _globals['_HACKATHONWORKFLOWMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2321
# @@protoc_insertion_point(module_scope)
