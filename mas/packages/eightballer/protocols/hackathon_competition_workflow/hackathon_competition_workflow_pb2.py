# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: hackathon_competition_workflow.proto
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
    b'\n$hackathon_competition_workflow.proto\x12\x35\x61\x65\x61.eightballer.hackathon_competition_workflow.v0_2_0\"\xd6\x10\n#HackathonCompetitionWorkflowMessage\x12~\n\x05\x65rror\x18\x05 \x01(\x0b\x32m.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Error_PerformativeH\x00\x12\x84\x01\n\x08\x66\x65\x65\x64\x62\x61\x63k\x18\x06 \x01(\x0b\x32p.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Feedback_PerformativeH\x00\x12\x94\x01\n\x10\x66inal_submission\x18\x07 \x01(\x0b\x32x.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Final_Submission_PerformativeH\x00\x12\x92\x01\n\x0fidea_generation\x18\x08 \x01(\x0b\x32w.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Idea_Generation_PerformativeH\x00\x12\x90\x01\n\x0eidea_selection\x18\t \x01(\x0b\x32v.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Idea_Selection_PerformativeH\x00\x12\x92\x01\n\x0fprogress_update\x18\n \x01(\x0b\x32w.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Progress_Update_PerformativeH\x00\x12\x90\x01\n\x0eteam_formation\x18\x0b \x01(\x0b\x32v.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.Team_Formation_PerformativeH\x00\x1a\xe2\x02\n\tErrorCode\x12\x86\x01\n\nerror_code\x18\x01 \x01(\x0e\x32r.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.ErrorCode.ErrorCodeEnum\"\xcb\x01\n\rErrorCodeEnum\x12\x1b\n\x17IDEA_GENERATION_FAILURE\x10\x00\x12\x1a\n\x16TEAM_FORMATION_FAILURE\x10\x01\x12\x1a\n\x16IDEA_SELECTION_FAILURE\x10\x02\x12\x12\n\x0eUPDATE_FAILURE\x10\x03\x12\x16\n\x12SUBMISSION_FAILURE\x10\x04\x12\x12\n\x0e\x46\x45\x45\x44\x42\x41\x43K_ERROR\x10\x05\x12\x11\n\rINVALID_INPUT\x10\x06\x12\x12\n\x0eINTERNAL_ERROR\x10\x07\x1aP\n\x1cIdea_Generation_Performative\x12\x16\n\x0eparticipant_id\x18\x01 \x01(\t\x12\x18\n\x10idea_description\x18\x02 \x01(\t\x1a\x63\n\x1bTeam_Formation_Performative\x12\x17\n\x0fparticipant_ids\x18\x01 \x03(\t\x12\x11\n\tteam_name\x18\x02 \x01(\t\x12\x18\n\x10idea_description\x18\x03 \x01(\t\x1a\x45\n\x1bIdea_Selection_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x15\n\rselected_idea\x18\x02 \x01(\t\x1aK\n\x1cProgress_Update_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x1a\n\x12update_description\x18\x02 \x01(\t\x1a\xa0\x01\n\x1d\x46inal_Submission_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x14\n\x0cproject_link\x18\x02 \x01(\t\x12\x19\n\x11presentation_link\x18\x03 \x01(\t\x12\x1a\n\x12\x64ocumentation_link\x18\x04 \x01(\t\x12!\n\x19\x64ocumentation_link_is_set\x18\x05 \x01(\x08\x1a:\n\x15\x46\x65\x65\x64\x62\x61\x63k_Performative\x12\x0f\n\x07team_id\x18\x01 \x01(\t\x12\x10\n\x08\x66\x65\x65\x64\x62\x61\x63k\x18\x02 \x01(\t\x1a\xa1\x01\n\x12\x45rror_Performative\x12x\n\nerror_code\x18\x01 \x01(\x0b\x32\x64.aea.eightballer.hackathon_competition_workflow.v0_2_0.HackathonCompetitionWorkflowMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'hackathon_competition_workflow_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE']._serialized_start = 96
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE']._serialized_end = 2230
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERRORCODE']._serialized_start = 1142
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERRORCODE']._serialized_end = 1496
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 1293
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1496
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_IDEA_GENERATION_PERFORMATIVE']._serialized_start = 1498
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_IDEA_GENERATION_PERFORMATIVE']._serialized_end = 1578
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_TEAM_FORMATION_PERFORMATIVE']._serialized_start = 1580
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_TEAM_FORMATION_PERFORMATIVE']._serialized_end = 1679
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_IDEA_SELECTION_PERFORMATIVE']._serialized_start = 1681
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_IDEA_SELECTION_PERFORMATIVE']._serialized_end = 1750
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_PROGRESS_UPDATE_PERFORMATIVE']._serialized_start = 1752
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_PROGRESS_UPDATE_PERFORMATIVE']._serialized_end = 1827
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_start = 1830
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_FINAL_SUBMISSION_PERFORMATIVE']._serialized_end = 1990
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_FEEDBACK_PERFORMATIVE']._serialized_start = 1992
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_FEEDBACK_PERFORMATIVE']._serialized_end = 2050
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2053
    _globals['_HACKATHONCOMPETITIONWORKFLOWMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2214
# @@protoc_insertion_point(module_scope)