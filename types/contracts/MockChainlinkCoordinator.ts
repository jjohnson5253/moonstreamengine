/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type NewServiceAgreement = ContractEventLog<{
  keyHash: string;
  fee: string;
  0: string;
  1: string;
}>;
export type RandomnessRequest = ContractEventLog<{
  keyHash: string;
  seed: string;
  jobID: string;
  sender: string;
  fee: string;
  requestID: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type RandomnessRequestFulfilled = ContractEventLog<{
  requestId: string;
  output: string;
  0: string;
  1: string;
}>;

export interface MockChainlinkCoordinator extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): MockChainlinkCoordinator;
  clone(): MockChainlinkCoordinator;
  methods: {
    PRESEED_OFFSET(): NonPayableTransactionObject<string>;

    PUBLIC_KEY_OFFSET(): NonPayableTransactionObject<string>;

    callbacks(arg0: string | number[]): NonPayableTransactionObject<{
      callbackContract: string;
      randomnessFee: string;
      seedAndBlockNum: string;
      0: string;
      1: string;
      2: string;
    }>;

    mockFulfillRandomnessRequest(
      requestId: string | number[],
      randomness: number | string | BN,
      callbackContract: string
    ): NonPayableTransactionObject<void>;

    onTokenTransfer(
      _sender: string,
      _fee: number | string | BN,
      _data: string | number[]
    ): NonPayableTransactionObject<void>;

    serviceAgreements(arg0: string | number[]): NonPayableTransactionObject<{
      vRFOracle: string;
      fee: string;
      jobID: string;
      0: string;
      1: string;
      2: string;
    }>;

    withdrawableTokens(arg0: string): NonPayableTransactionObject<string>;
  };
  events: {
    NewServiceAgreement(cb?: Callback<NewServiceAgreement>): EventEmitter;
    NewServiceAgreement(
      options?: EventOptions,
      cb?: Callback<NewServiceAgreement>
    ): EventEmitter;

    RandomnessRequest(cb?: Callback<RandomnessRequest>): EventEmitter;
    RandomnessRequest(
      options?: EventOptions,
      cb?: Callback<RandomnessRequest>
    ): EventEmitter;

    RandomnessRequestFulfilled(
      cb?: Callback<RandomnessRequestFulfilled>
    ): EventEmitter;
    RandomnessRequestFulfilled(
      options?: EventOptions,
      cb?: Callback<RandomnessRequestFulfilled>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewServiceAgreement", cb: Callback<NewServiceAgreement>): void;
  once(
    event: "NewServiceAgreement",
    options: EventOptions,
    cb: Callback<NewServiceAgreement>
  ): void;

  once(event: "RandomnessRequest", cb: Callback<RandomnessRequest>): void;
  once(
    event: "RandomnessRequest",
    options: EventOptions,
    cb: Callback<RandomnessRequest>
  ): void;

  once(
    event: "RandomnessRequestFulfilled",
    cb: Callback<RandomnessRequestFulfilled>
  ): void;
  once(
    event: "RandomnessRequestFulfilled",
    options: EventOptions,
    cb: Callback<RandomnessRequestFulfilled>
  ): void;
}