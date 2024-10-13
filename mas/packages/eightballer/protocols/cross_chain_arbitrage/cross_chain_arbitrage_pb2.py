# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: cross_chain_arbitrage.proto
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
    b'\n\x1b\x63ross_chain_arbitrage.proto\x12,aea.eightballer.cross_chain_arbitrage.v0_1_0\"\xd5\x10\n\x1a\x43rossChainArbitrageMessage\x12\x8c\x01\n\x15\x61rbitrage_opportunity\x18\x05 \x01(\x0b\x32k.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Arbitrage_Opportunity_PerformativeH\x00\x12\x82\x01\n\x10\x61rbitrage_result\x18\x06 \x01(\x0b\x32\x66.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Arbitrage_Result_PerformativeH\x00\x12|\n\rbuy_execution\x18\x07 \x01(\x0b\x32\x63.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Buy_Execution_PerformativeH\x00\x12l\n\x05\x65rror\x18\x08 \x01(\x0b\x32[.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Error_PerformativeH\x00\x12r\n\x08rejected\x18\t \x01(\x0b\x32^.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Rejected_PerformativeH\x00\x12~\n\x0esell_execution\x18\n \x01(\x0b\x32\x64.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.Sell_Execution_PerformativeH\x00\x1a\xcc\x01\n\tErrorCode\x12t\n\nerror_code\x18\x01 \x01(\x0e\x32`.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.ErrorCode.ErrorCodeEnum\"I\n\rErrorCodeEnum\x12\r\n\tNOT_FOUND\x10\x00\x12\x15\n\x11INVALID_OPERATION\x10\x01\x12\x12\n\x0eINTERNAL_ERROR\x10\x02\x1a\xfb\x01\n\x0fRejectionReason\x12|\n\x06reason\x18\x01 \x01(\x0e\x32l.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.RejectionReason.RejectionReasonEnum\"j\n\x13RejectionReasonEnum\x12\x17\n\x13INSUFFICIENT_VOLUME\x10\x00\x12\x12\n\x0ePRICE_MISMATCH\x10\x01\x12\x11\n\rMARKET_CLOSED\x10\x02\x12\x13\n\x0fTECHNICAL_ERROR\x10\x03\x1a\xda\x01\n\"Arbitrage_Opportunity_Performative\x12\x1c\n\x14\x62uy_side_exchange_id\x18\x01 \x01(\t\x12\x1d\n\x15sell_side_exchange_id\x18\x02 \x01(\t\x12\x13\n\x0bmarket_name\x18\x03 \x01(\t\x12\x18\n\x10\x61vailable_volume\x18\x04 \x01(\x01\x12\x11\n\tbuy_price\x18\x05 \x01(\x01\x12\x12\n\nsell_price\x18\x06 \x01(\x01\x12\x0c\n\x04note\x18\x07 \x01(\t\x12\x13\n\x0bnote_is_set\x18\x08 \x01(\x08\x1a\x81\x01\n\x15Rejected_Performative\x12h\n\x06reason\x18\x01 \x01(\x0b\x32X.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.RejectionReason\x1a\x8d\x01\n\x1a\x42uy_Execution_Performative\x12\x13\n\x0b\x65xchange_id\x18\x01 \x01(\t\x12\x11\n\tledger_id\x18\x02 \x01(\t\x12\x0f\n\x07tx_hash\x18\x03 \x01(\t\x12\x0e\n\x06volume\x18\x04 \x01(\x01\x12\r\n\x05price\x18\x05 \x01(\x01\x12\x17\n\x0ftoken_a_address\x18\x06 \x01(\t\x1a\x8e\x01\n\x1bSell_Execution_Performative\x12\x13\n\x0b\x65xchange_id\x18\x01 \x01(\t\x12\x11\n\tledger_id\x18\x02 \x01(\t\x12\x0f\n\x07tx_hash\x18\x03 \x01(\t\x12\x0e\n\x06volume\x18\x04 \x01(\x01\x12\r\n\x05price\x18\x05 \x01(\x01\x12\x17\n\x0ftoken_b_address\x18\x06 \x01(\t\x1aR\n\x1d\x41rbitrage_Result_Performative\x12\x0e\n\x06profit\x18\x01 \x01(\x01\x12\x0c\n\x04note\x18\x02 \x01(\t\x12\x13\n\x0bnote_is_set\x18\x03 \x01(\x08\x1a\x8f\x01\n\x12\x45rror_Performative\x12\x66\n\nerror_code\x18\x01 \x01(\x0b\x32R.aea.eightballer.cross_chain_arbitrage.v0_1_0.CrossChainArbitrageMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'cross_chain_arbitrage_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_CROSSCHAINARBITRAGEMESSAGE']._serialized_start = 78
    _globals['_CROSSCHAINARBITRAGEMESSAGE']._serialized_end = 2211
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERRORCODE']._serialized_start = 865
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERRORCODE']._serialized_end = 1069
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 996
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 1069
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTIONREASON']._serialized_start = 1072
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTIONREASON']._serialized_end = 1323
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTIONREASON_REJECTIONREASONENUM']._serialized_start = 1217
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTIONREASON_REJECTIONREASONENUM']._serialized_end = 1323
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ARBITRAGE_OPPORTUNITY_PERFORMATIVE']._serialized_start = 1326
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ARBITRAGE_OPPORTUNITY_PERFORMATIVE']._serialized_end = 1544
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTED_PERFORMATIVE']._serialized_start = 1547
    _globals['_CROSSCHAINARBITRAGEMESSAGE_REJECTED_PERFORMATIVE']._serialized_end = 1676
    _globals['_CROSSCHAINARBITRAGEMESSAGE_BUY_EXECUTION_PERFORMATIVE']._serialized_start = 1679
    _globals['_CROSSCHAINARBITRAGEMESSAGE_BUY_EXECUTION_PERFORMATIVE']._serialized_end = 1820
    _globals['_CROSSCHAINARBITRAGEMESSAGE_SELL_EXECUTION_PERFORMATIVE']._serialized_start = 1823
    _globals['_CROSSCHAINARBITRAGEMESSAGE_SELL_EXECUTION_PERFORMATIVE']._serialized_end = 1965
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ARBITRAGE_RESULT_PERFORMATIVE']._serialized_start = 1967
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ARBITRAGE_RESULT_PERFORMATIVE']._serialized_end = 2049
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 2052
    _globals['_CROSSCHAINARBITRAGEMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 2195
# @@protoc_insertion_point(module_scope)
