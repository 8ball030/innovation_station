# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: terraform_devops.proto
# Protobuf Python Version: 5.27.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder

# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(
    b'\n\x16terraform_devops.proto\x12%aea.your_name.terraform_devops.v0_1_0\"\xff\x0b\n\x16TerraformDevopsMessage\x12\x61\n\x05\x61pply\x18\x05 \x01(\x0b\x32P.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Apply_PerformativeH\x00\x12\x65\n\x07\x64\x65stroy\x18\x06 \x01(\x0b\x32R.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Destroy_PerformativeH\x00\x12\x61\n\x05\x65rror\x18\x07 \x01(\x0b\x32P.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Error_PerformativeH\x00\x12_\n\x04init\x18\x08 \x01(\x0b\x32O.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Init_PerformativeH\x00\x12\x63\n\x06result\x18\t \x01(\x0b\x32Q.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Result_PerformativeH\x00\x12\x63\n\x06verify\x18\n \x01(\x0b\x32Q.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Verify_PerformativeH\x00\x1a\xfd\x01\n\tErrorCode\x12i\n\nerror_code\x18\x01 \x01(\x0e\x32U.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.ErrorCode.ErrorCodeEnum\"\x84\x01\n\rErrorCodeEnum\x12\x0e\n\nINIT_ERROR\x10\x00\x12\x0f\n\x0b\x41PPLY_ERROR\x10\x01\x12\x11\n\rDESTROY_ERROR\x10\x02\x12\x10\n\x0cVERIFY_ERROR\x10\x03\x12\x12\n\x0eINTERNAL_ERROR\x10\x04\x12\x19\n\x15INVALID_CONFIGURATION\x10\x05\x1a\xa2\x01\n\x06Status\x12_\n\x06status\x18\x01 \x01(\x0e\x32O.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Status.StatusEnum\"7\n\nStatusEnum\x12\x0b\n\x07SUCCESS\x10\x00\x12\x0b\n\x07\x46\x41ILURE\x10\x01\x12\x0f\n\x0bIN_PROGRESS\x10\x02\x1a/\n\x11Init_Performative\x12\x1a\n\x12\x63onfiguration_path\x18\x01 \x01(\t\x1a\x30\n\x12\x41pply_Performative\x12\x1a\n\x12\x63onfiguration_path\x18\x01 \x01(\t\x1a\x32\n\x14\x44\x65stroy_Performative\x12\x1a\n\x12\x63onfiguration_path\x18\x01 \x01(\t\x1a,\n\x13Verify_Performative\x12\x15\n\rdeployment_id\x18\x01 \x01(\t\x1a\x8b\x01\n\x13Result_Performative\x12T\n\x06status\x18\x01 \x01(\x0b\x32\x44.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.Status\x12\x0e\n\x06stdout\x18\x02 \x01(\t\x12\x0e\n\x06stderr\x18\x03 \x01(\t\x1a\x84\x01\n\x12\x45rror_Performative\x12[\n\nerror_code\x18\x01 \x01(\x0b\x32G.aea.your_name.terraform_devops.v0_1_0.TerraformDevopsMessage.ErrorCode\x12\x11\n\terror_msg\x18\x02 \x01(\tB\x0e\n\x0cperformativeb\x06proto3'
)

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'terraform_devops_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
    DESCRIPTOR._loaded_options = None
    _globals['_TERRAFORMDEVOPSMESSAGE']._serialized_start = 66
    _globals['_TERRAFORMDEVOPSMESSAGE']._serialized_end = 1601
    _globals['_TERRAFORMDEVOPSMESSAGE_ERRORCODE']._serialized_start = 693
    _globals['_TERRAFORMDEVOPSMESSAGE_ERRORCODE']._serialized_end = 946
    _globals['_TERRAFORMDEVOPSMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_start = 814
    _globals['_TERRAFORMDEVOPSMESSAGE_ERRORCODE_ERRORCODEENUM']._serialized_end = 946
    _globals['_TERRAFORMDEVOPSMESSAGE_STATUS']._serialized_start = 949
    _globals['_TERRAFORMDEVOPSMESSAGE_STATUS']._serialized_end = 1111
    _globals['_TERRAFORMDEVOPSMESSAGE_STATUS_STATUSENUM']._serialized_start = 1056
    _globals['_TERRAFORMDEVOPSMESSAGE_STATUS_STATUSENUM']._serialized_end = 1111
    _globals['_TERRAFORMDEVOPSMESSAGE_INIT_PERFORMATIVE']._serialized_start = 1113
    _globals['_TERRAFORMDEVOPSMESSAGE_INIT_PERFORMATIVE']._serialized_end = 1160
    _globals['_TERRAFORMDEVOPSMESSAGE_APPLY_PERFORMATIVE']._serialized_start = 1162
    _globals['_TERRAFORMDEVOPSMESSAGE_APPLY_PERFORMATIVE']._serialized_end = 1210
    _globals['_TERRAFORMDEVOPSMESSAGE_DESTROY_PERFORMATIVE']._serialized_start = 1212
    _globals['_TERRAFORMDEVOPSMESSAGE_DESTROY_PERFORMATIVE']._serialized_end = 1262
    _globals['_TERRAFORMDEVOPSMESSAGE_VERIFY_PERFORMATIVE']._serialized_start = 1264
    _globals['_TERRAFORMDEVOPSMESSAGE_VERIFY_PERFORMATIVE']._serialized_end = 1308
    _globals['_TERRAFORMDEVOPSMESSAGE_RESULT_PERFORMATIVE']._serialized_start = 1311
    _globals['_TERRAFORMDEVOPSMESSAGE_RESULT_PERFORMATIVE']._serialized_end = 1450
    _globals['_TERRAFORMDEVOPSMESSAGE_ERROR_PERFORMATIVE']._serialized_start = 1453
    _globals['_TERRAFORMDEVOPSMESSAGE_ERROR_PERFORMATIVE']._serialized_end = 1585
# @@protoc_insertion_point(module_scope)
