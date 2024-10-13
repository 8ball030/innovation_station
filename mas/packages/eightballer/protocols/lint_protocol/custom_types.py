"""This module contains class representations corresponding to every custom type in the protocol specification."""

from enum import Enum
from typing import Any

from pydantic import BaseModel


class BaseCustomEncoder(BaseModel):
    """
    This class is a base class for encoding and decoding protocol buffer objects.
    """

    @staticmethod
    def encode(ps_response_protobuf_object, ps_response_object) -> None:
        """
        Encode an instance of this class into the protocol buffer object.

        The protocol buffer object in the ps_response_protobuf_object argument is matched with the instance of this
        class in the 'ps_response_object' argument.

        :param ps_response_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :param ps_response_object: an instance of this class to be encoded in the protocol buffer object.
        """
        for key, value in ps_response_object.__dict__.items():
            current_attr = getattr(ps_response_protobuf_object, key)
            if isinstance(value, Enum):
                type(value).encode(current_attr, value)
                continue
            if isinstance(value, dict):
                current_attr.update(value)
                continue
            if isinstance(value, list):
                current_attr.extend(value)
                continue
            setattr(ps_response_protobuf_object, key, value)

    @classmethod
    def decode(cls, ps_response_protobuf_object) -> "Any":
        """
        Decode a protocol buffer object that corresponds with this class into an instance of this class.

        A new instance of this class is created that matches the protocol buffer object in the
        'ps_response_protobuf_object' argument.

        :param ps_response_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :return: A new instance of this class that matches the protocol buffer object in the
        'ps_response_protobuf_object' argument.
        """
        keywords = [f for f in cls.__annotations__.keys()]
        kwargs = {}
        for keyword in keywords:
            proto_attr = getattr(ps_response_protobuf_object, keyword)
            if isinstance(proto_attr, Enum):
                kwargs[keyword] = type(proto_attr).decode(proto_attr)
                continue
            if isinstance(proto_attr, list):
                kwargs[keyword] = [type(proto_attr[0]).decode(item) for item in proto_attr]
                continue
            if isinstance(proto_attr, dict):
                kwargs[keyword] = {k: v for (k, v) in proto_attr.items()}
                continue
            if str(type(proto_attr)) in CUSTOM_ENUM_MAP:
                kwargs[keyword] = CUSTOM_ENUM_MAP[str(type(proto_attr))].decode(proto_attr).value
                continue
            kwargs[keyword] = proto_attr
        return cls(**kwargs)

    def __eq__(self, other):
        """Check if two instances of this class are equal."""
        return self.dict() == other.dict()

    def __hash__(self):
        """Return the hash value of this instance."""
        return hash(self.dict())


class ErrorCode(Enum):
    """This class represents an instance of ErrorCode."""

    LINT_EXECUTION_FAILURE = 0
    INVALID_SOURCE_PATH = 1
    LINT_TIMEOUT = 2

    @staticmethod
    def encode(error_code_protobuf_object, error_code_object: "ErrorCode") -> None:
        """
        Encode an instance of this class into the protocol buffer object.

        The protocol buffer object in the error_code_protobuf_object argument is matched with the instance of this class
        in the 'error_code_object' argument.

        :param error_code_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :param error_code_object: an instance of this class to be encoded in the protocol buffer object.
        """
        error_code_protobuf_object.error_code = error_code_object.value

    @classmethod
    def decode(cls, error_code_protobuf_object) -> "ErrorCode":
        """
        Decode a protocol buffer object that corresponds with this class into an instance of this class.

        A new instance of this class is created that matches the protocol buffer object in the
        'error_code_protobuf_object' argument.

        :param error_code_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :return: A new instance of this class that matches the protocol buffer object in the
        'error_code_protobuf_object' argument.
        """
        return ErrorCode(error_code_protobuf_object.error_code)


class Severity(Enum):
    """This class represents an instance of Severity."""

    INFO = 0
    WARNING = 1
    ERROR = 2

    @staticmethod
    def encode(severity_protobuf_object, severity_object: "Severity") -> None:
        """
        Encode an instance of this class into the protocol buffer object.

        The protocol buffer object in the severity_protobuf_object argument is matched with the instance of this class
        in the 'severity_object' argument.

        :param severity_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :param severity_object: an instance of this class to be encoded in the protocol buffer object.
        """
        severity_protobuf_object.severity = severity_object.value

    @classmethod
    def decode(cls, severity_protobuf_object) -> "Severity":
        """
        Decode a protocol buffer object that corresponds with this class into an instance of this class.

        A new instance of this class is created that matches the protocol buffer object in the
        'severity_protobuf_object' argument.

        :param severity_protobuf_object: the protocol buffer object whose type corresponds with this class.
        :return: A new instance of this class that matches the protocol buffer object in the 'severity_protobuf_object'
        argument.
        """
        return Severity(severity_protobuf_object.severity)


CUSTOM_ENUM_MAP = {"<class 'lint_protocol_pb2.Severity'>": Severity, "<class 'lint_protocol_pb2.ErrorCode'>": ErrorCode}
