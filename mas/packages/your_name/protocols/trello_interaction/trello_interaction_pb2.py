# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: trello_interaction.proto
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
    b'\n\x18trello_interaction.proto\x12\'aea.your_name.trello_interaction.v0_1_0\"\xe1\x13\n\x18TrelloInteractionMessage\x12u\n\raction_result\x18\x05 \x01(\x0b\x32\\.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Action_Result_PerformativeH\x00\x12k\n\x08\x61\x64\x64_card\x18\x06 \x01(\x0b\x32W.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Add_Card_PerformativeH\x00\x12o\n\nadd_member\x18\x07 \x01(\x0b\x32Y.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Add_Member_PerformativeH\x00\x12s\n\x0c\x63reate_board\x18\x08 \x01(\x0b\x32[.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Create_Board_PerformativeH\x00\x12\x65\n\x05\x65rror\x18\t \x01(\x0b\x32T.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Error_PerformativeH\x00\x12u\n\rfetch_actions\x18\n \x01(\x0b\x32\\.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Fetch_Actions_PerformativeH\x00\x12q\n\x0b\x66\x65tch_board\x18\x0b \x01(\x0b\x32Z.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Fetch_Board_PerformativeH\x00\x12q\n\x0blist_boards\x18\x0c \x01(\x0b\x32Z.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.List_Boards_PerformativeH\x00\x12o\n\nlist_cards\x18\r \x01(\x0b\x32Y.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.List_Cards_PerformativeH\x00\x1a\xda\x01\n\tErrorCode\x12m\n\nerror_code\x18\x01 \x01(\x0e\x32Y.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.ErrorCode.ErrorCodeEnum\"^\n\rErrorCodeEnum\x12\x13\n\x0fINVALID_REQUEST\x10\x00\x12\r\n\tNOT_FOUND\x10\x01\x12\x15\n\x11PERMISSION_DENIED\x10\x02\x12\x12\n\x0eINTERNAL_ERROR\x10\x03\x1a\xa3\x01\n\x06Status\x12\x63\n\x06status\x18\x01 \x01(\x0e\x32S.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Status.StatusEnum\"4\n\nStatusEnum\x12\x0b\n\x07SUCCESS\x10\x00\x12\x0b\n\x07PENDING\x10\x01\x12\x0c\n\x08REJECTED\x10\x02\x1a\xa3\x01\n\x19\x43reate_Board_Performative\x12\x12\n\nboard_name\x18\x01 \x01(\t\x12\x17\n\x0forganization_id\x18\x02 \x01(\t\x12\x1e\n\x16organization_id_is_set\x18\x03 \x01(\x08\x12\x18\n\x10permission_level\x18\x04 \x01(\t\x12\x1f\n\x17permission_level_is_set\x18\x05 \x01(\x08\x1a,\n\x18\x46\x65tch_Board_Performative\x12\x10\n\x08\x62oard_id\x18\x01 \x01(\t\x1aM\n\x18List_Boards_Performative\x12\x14\n\x0c\x62oard_filter\x18\x01 \x01(\t\x12\x1b\n\x13\x62oard_filter_is_set\x18\x02 \x01(\x08\x1ao\n\x17\x41\x64\x64_Member_Performative\x12\x10\n\x08\x62oard_id\x18\x01 \x01(\t\x12\x11\n\tmember_id\x18\x02 \x01(\t\x12\x13\n\x0bmember_type\x18\x03 \x01(\t\x12\x1a\n\x12member_type_is_set\x18\x04 \x01(\x08\x1a\\\n\x17List_Cards_Performative\x12\x10\n\x08\x62oard_id\x18\x01 \x01(\t\x12\x13\n\x0b\x63\x61rd_filter\x18\x02 \x01(\t\x12\x1a\n\x12\x63\x61rd_filter_is_set\x18\x03 \x01(\x08\x1a\xa6\x01\n\x15\x41\x64\x64_Card_Performative\x12\x0f\n\x07list_id\x18\x01 \x01(\t\x12\x11\n\tcard_name\x18\x02 \x01(\t\x12\x0c\n\x04\x64\x65sc\x18\x03 \x01(\t\x12\x13\n\x0b\x64\x65sc_is_set\x18\x04 \x01(\x08\x12\x0e\n\x06labels\x18\x05 \x03(\t\x12\x15\n\rlabels_is_set\x18\x06 \x01(\x08\x12\x0b\n\x03\x64ue\x18\x07 \x01(\t\x12\x12\n\ndue_is_set\x18\x08 \x01(\x08\x1a\x63\n\x1a\x46\x65tch_Actions_Performative\x12\x10\n\x08\x62oard_id\x18\x01 \x01(\t\x12\x15\n\raction_filter\x18\x02 \x01(\t\x12\x1c\n\x14\x61\x63tion_filter_is_set\x18\x03 \x01(\x08\x1a\xa7\x01\n\x1a\x41\x63tion_Result_Performative\x12X\n\x06status\x18\x01 \x01(\x0b\x32H.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.Status\x12\x13\n\x0bresult_data\x18\x02 \x01(\x0c\x12\x1a\n\x12result_data_is_set\x18\x03 \x01(\x08\x1a\x88\x01\n\x12\x45rror_Performative\x12_\n\nerror_code\x18\x01 \x01(\x0b\x32K.aea.your_name.trello_interaction.v0_1_0.TrelloInteractionMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'trello_interaction_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_TRELLOINTERACTIONMESSAGE']._serialized_start = 70
    _globals['_TRELLOINTERACTIONMESSAGE']._serialized_end = 2599
    _globals['_TRELLOINTERACTIONMESSAGE_ERRORCODE']._serialized_start = 1122
    _globals['_TRELLOINTERACTIONMESSAGE_ERRORCODE']._serialized_end = 1340
    _globals['_TRELLOINTERACTIONMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 1246
    _globals['_TRELLOINTERACTIONMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1340
    _globals['_TRELLOINTERACTIONMESSAGE_STATUS']._serialized_start = 1343
    _globals['_TRELLOINTERACTIONMESSAGE_STATUS']._serialized_end = 1506
    _globals['_TRELLOINTERACTIONMESSAGE_STATUS_STATUSENUM']._serialized_start = 1454
    _globals['_TRELLOINTERACTIONMESSAGE_STATUS_STATUSENUM']._serialized_end = 1506
    _globals['_TRELLOINTERACTIONMESSAGE_CREATE_BOARD_PERFORMATIVE']._serialized_start = 1509
    _globals['_TRELLOINTERACTIONMESSAGE_CREATE_BOARD_PERFORMATIVE']._serialized_end = 1672
    _globals['_TRELLOINTERACTIONMESSAGE_FETCH_BOARD_PERFORMATIVE']._serialized_start = 1674
    _globals['_TRELLOINTERACTIONMESSAGE_FETCH_BOARD_PERFORMATIVE']._serialized_end = 1718
    _globals['_TRELLOINTERACTIONMESSAGE_LIST_BOARDS_PERFORMATIVE']._serialized_start = 1720
    _globals['_TRELLOINTERACTIONMESSAGE_LIST_BOARDS_PERFORMATIVE']._serialized_end = 1797
    _globals['_TRELLOINTERACTIONMESSAGE_ADD_MEMBER_PERFORMATIVE']._serialized_start = 1799
    _globals['_TRELLOINTERACTIONMESSAGE_ADD_MEMBER_PERFORMATIVE']._serialized_end = 1910
    _globals['_TRELLOINTERACTIONMESSAGE_LIST_CARDS_PERFORMATIVE']._serialized_start = 1912
    _globals['_TRELLOINTERACTIONMESSAGE_LIST_CARDS_PERFORMATIVE']._serialized_end = 2004
    _globals['_TRELLOINTERACTIONMESSAGE_ADD_CARD_PERFORMATIVE']._serialized_start = 2007
    _globals['_TRELLOINTERACTIONMESSAGE_ADD_CARD_PERFORMATIVE']._serialized_end = 2173
    _globals['_TRELLOINTERACTIONMESSAGE_FETCH_ACTIONS_PERFORMATIVE']._serialized_start = 2175
    _globals['_TRELLOINTERACTIONMESSAGE_FETCH_ACTIONS_PERFORMATIVE']._serialized_end = 2274
    _globals['_TRELLOINTERACTIONMESSAGE_ACTION_RESULT_PERFORMATIVE']._serialized_start = 2277
    _globals['_TRELLOINTERACTIONMESSAGE_ACTION_RESULT_PERFORMATIVE']._serialized_end = 2444
    _globals['_TRELLOINTERACTIONMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2447
    _globals['_TRELLOINTERACTIONMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2583
# @@protoc_insertion_point(module_scope)
