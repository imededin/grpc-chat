// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var salutations_pb = require('./salutations_pb.js');

function serialize_helloRequest(arg) {
  if (!(arg instanceof salutations_pb.helloRequest)) {
    throw new Error('Expected argument of type helloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloRequest(buffer_arg) {
  return salutations_pb.helloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloResponse(arg) {
  if (!(arg instanceof salutations_pb.helloResponse)) {
    throw new Error('Expected argument of type helloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloResponse(buffer_arg) {
  return salutations_pb.helloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var salutationService = exports.salutationService = {
  helloreq: {
    path: '/salutation/helloreq',
    requestStream: false,
    responseStream: false,
    requestType: salutations_pb.helloRequest,
    responseType: salutations_pb.helloResponse,
    requestSerialize: serialize_helloRequest,
    requestDeserialize: deserialize_helloRequest,
    responseSerialize: serialize_helloResponse,
    responseDeserialize: deserialize_helloResponse,
  },
  hellostream: {
    path: '/salutation/hellostream',
    requestStream: true,
    responseStream: true,
    requestType: salutations_pb.helloRequest,
    responseType: salutations_pb.helloResponse,
    requestSerialize: serialize_helloRequest,
    requestDeserialize: deserialize_helloRequest,
    responseSerialize: serialize_helloResponse,
    responseDeserialize: deserialize_helloResponse,
  },
};

exports.salutationClient = grpc.makeGenericClientConstructor(salutationService);
