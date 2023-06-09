/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SaharaV4Interface extends utils.Interface {
  functions: {
    "getName()": FunctionFragment;
    "increment()": FunctionFragment;
    "initialize(uint256)": FunctionFragment;
    "reduce()": FunctionFragment;
    "retrieve()": FunctionFragment;
    "setName(string)": FunctionFragment;
    "setValue(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getName"
      | "increment"
      | "initialize"
      | "reduce"
      | "retrieve"
      | "setName"
      | "setValue"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "reduce", values?: undefined): string;
  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reduce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "NameChanged(string)": EventFragment;
    "ValueChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValueChanged"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NameChangedEventObject {
  name: string;
}
export type NameChangedEvent = TypedEvent<[string], NameChangedEventObject>;

export type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;

export interface ValueChangedEventObject {
  newValue: BigNumber;
}
export type ValueChangedEvent = TypedEvent<
  [BigNumber],
  ValueChangedEventObject
>;

export type ValueChangedEventFilter = TypedEventFilter<ValueChangedEvent>;

export interface SaharaV4 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SaharaV4Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getName(overrides?: CallOverrides): Promise<[string]>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _initValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reduce(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieve(overrides?: CallOverrides): Promise<[BigNumber]>;

    setName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setValue(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getName(overrides?: CallOverrides): Promise<string>;

  increment(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _initValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reduce(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieve(overrides?: CallOverrides): Promise<BigNumber>;

  setName(
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setValue(
    newValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getName(overrides?: CallOverrides): Promise<string>;

    increment(overrides?: CallOverrides): Promise<void>;

    initialize(
      _initValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reduce(overrides?: CallOverrides): Promise<void>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    setName(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NameChanged(string)"(name?: null): NameChangedEventFilter;
    NameChanged(name?: null): NameChangedEventFilter;

    "ValueChanged(uint256)"(newValue?: null): ValueChangedEventFilter;
    ValueChanged(newValue?: null): ValueChangedEventFilter;
  };

  estimateGas: {
    getName(overrides?: CallOverrides): Promise<BigNumber>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _initValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reduce(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    setName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setValue(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increment(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _initValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reduce(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      newValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
