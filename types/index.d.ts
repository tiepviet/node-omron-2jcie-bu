/**
 * node-omron-2jcie-bu/types/index.d.ts
 * Copyright (C) e53e04ac
 * MIT License
 */

import stream from 'stream';

import SerialPort from 'serialport';

export const Controller: ControllerConstructor;

// Controller

type ControllerConstructorOptions = {
    path: string;
};

type _Controller = {
    channel: null | Channel;
    reader: null | Reader;
    writer: null | Writer;
    queue: null | Queue;
    execute: {
        (commandPayload: CommandPayload): Promise<ResponsePayloadArray>;
    };
};

type Controller = {
    ControllerConstructorOptions: {
        (): ControllerConstructorOptions;
    };
    _Controller: {
        (): _Controller;
    };
    sleep: {
        (milliseconds: number): Promise<void>;
    };
    open: {
        (): Promise<void>;
    };
    close: {
        (): Promise<void>;
    };
    memoryDataLong: {
        read: {
            (data: MemoryDataLongReadCommandData): Promise<MemoryDataLongReadResponseData[]>;
        };
    };
    memoryDataShort: {
        read: {
            (data: MemoryDataShortReadCommandData): Promise<MemoryDataShortReadResponseData[]>;
        };
    };
    latestDataLong: {
        read: {
            (data: LatestDataLongReadCommandData): Promise<LatestDataLongReadResponseData>;
        };
    };
    latestDataShort: {
        read: {
            (data: LatestDataShortReadCommandData): Promise<LatestDataShortReadResponseData>;
        };
    };
    accelerationMemoryDataHeader: {
        read: {
            (data: AccelerationMemoryDataHeaderReadCommandData): Promise<AccelerationMemoryDataHeaderReadResponseData>;
        };
    };
    accelerationMemoryDataData: {
        read: {
            (data: AccelerationMemoryDataDataReadCommandData): Promise<AccelerationMemoryDataDataReadResponseData>;
        };
    };
    latestMemoryInformation: {
        read: {
            (data: LatestMemoryInformationReadCommandData): Promise<LatestMemoryInformationReadResponseData>;
        };
    };
    latestSensingData: {
        read: {
            (data: LatestSensingDataReadCommandData): Promise<LatestSensingDataReadResponseData>;
        };
    };
    latestCalculationData: {
        read: {
            (data: LatestCalculationDataReadCommandData): Promise<LatestCalculationDataReadResponseData>;
        };
    };
    latestSensingFlag: {
        read: {
            (data: LatestSensingFlagReadCommandData): Promise<LatestSensingFlagReadResponseData>;
        };
    };
    latestCalculationFlag: {
        read: {
            (data: LatestCalculationFlagReadCommandData): Promise<LatestCalculationFlagReadResponseData>;
        };
    };
    latestAccelerationStatus: {
        read: {
            (data: LatestAccelerationStatusReadCommandData): Promise<LatestAccelerationStatusReadResponseData>;
        };
    };
    vibrationCount: {
        read: {
            (data: VibrationCountReadCommandData): Promise<VibrationCountReadResponseData>;
        };
    };
    ledSettingNormalState: {
        read: {
            (data: LedSettingNormalStateReadCommandData): Promise<LedSettingNormalStateReadResponseData>;
        };
        write: {
            (data: LedSettingNormalStateWriteCommandData): Promise<LedSettingNormalStateWriteResponseData>;
        };
    };
    ledSettingEventState: {
        read: {
            (data: LedSettingEventStateReadCommandData): Promise<LedSettingEventStateReadResponseData>;
        };
        write: {
            (data: LedSettingEventStateWriteCommandData): Promise<LedSettingEventStateWriteResponseData>;
        };
    };
    ledSettingOperation: {
        read: {
            (data: LedSettingOperationReadCommandData): Promise<LedSettingOperationReadResponseData>;
        };
        write: {
            (data: LedSettingOperationWriteCommandData): Promise<LedSettingOperationWriteResponseData>;
        };
    };
    installationOffset: {
        read: {
            (data: InstallationOffsetReadCommandData): Promise<InstallationOffsetReadResponseData>;
        };
        write: {
            (data: InstallationOffsetWriteCommandData): Promise<InstallationOffsetWriteResponseData>;
        };
    };
    advertiseSetting: {
        read: {
            (data: AdvertiseSettingReadCommandData): Promise<AdvertiseSettingReadResponseData>;
        };
        write: {
            (data: AdvertiseSettingWriteCommandData): Promise<AdvertiseSettingWriteResponseData>;
        };
    };
    memoryReset: {
        write: {
            (data: MemoryResetWriteCommandData): Promise<MemoryResetWriteResponseData>;
        };
    };
    modeChange: {
        read: {
            (data: ModeChangeReadCommandData): Promise<ModeChangeReadResponseData>;
        };
        write: {
            (data: ModeChangeWriteCommandData): Promise<ModeChangeWriteResponseData>;
        };
    };
    accelerationLoggerControl: {
        write: {
            (data: AccelerationLoggerControlWriteCommandData): Promise<AccelerationLoggerControlWriteResponseData>;
        };
    };
    accelerationLoggerStatus: {
        read: {
            (data: AccelerationLoggerStatusReadCommandData): Promise<AccelerationLoggerStatusReadResponseData>;
        };
        write: {
            (data: AccelerationLoggerStatusWriteCommandData): Promise<AccelerationLoggerStatusWriteResponseData>;
        };
    };
    latestTimeCounter: {
        read: {
            (data: LatestTimeCounterReadCommandData): Promise<LatestTimeCounterReadResponseData>;
        };
    };
    timeSetting: {
        read: {
            (data: TimeSettingReadCommandData): Promise<TimeSettingReadResponseData>;
        };
        write: {
            (data: TimeSettingWriteCommandData): Promise<TimeSettingWriteResponseData>;
        };
    };
    memoryStorageInterval: {
        read: {
            (data: MemoryStorageIntervalReadCommandData): Promise<MemoryStorageIntervalReadResponseData>;
        };
        write: {
            (data: MemoryStorageIntervalWriteCommandData): Promise<MemoryStorageIntervalWriteResponseData>;
        };
    };
    eventPatternSensor1: {
        read: {
            (data: EventPatternSensor1ReadCommandData): Promise<EventPatternSensor1ReadResponseData>;
        };
        write: {
            (data: EventPatternSensor1WriteCommandData): Promise<EventPatternSensor1WriteResponseData>;
        };
    };
    eventPatternSensor2: {
        read: {
            (data: EventPatternSensor2ReadCommandData): Promise<EventPatternSensor2ReadResponseData>;
        };
        write: {
            (data: EventPatternSensor2WriteCommandData): Promise<EventPatternSensor2WriteResponseData>;
        };
    };
    eventPatternAcceleration: {
        read: {
            (data: EventPatternAccelerationReadCommandData): Promise<EventPatternAccelerationReadResponseData>;
        };
        write: {
            (data: EventPatternAccelerationWriteCommandData): Promise<EventPatternAccelerationWriteResponseData>;
        };
    };
    errorStatus: {
        read: {
            (data: ErrorStatusReadCommandData): Promise<ErrorStatusReadResponseData>;
        };
    };
    mountingOrientation: {
        read: {
            (data: MountingOrientationReadCommandData): Promise<MountingOrientationReadResponseData>;
        };
    };
    deviceInformation: {
        read: {
            (data: DeviceInformationReadCommandData): Promise<DeviceInformationReadResponseData>;
        };
    };
};

type ControllerConstructor = {
    (options: ControllerConstructorOptions): Controller;
};

// Queue

type QueueConstructorOptions = {

};

type QueueTask = {
    commandPayload: CommandPayload;
    promise: null | Promise<ResponsePayloadArray>;
    resolve: null | {
        (value: ResponsePayloadArray): void;
    };
    reject: null | {
        (reason: any): void;
    };
    ended: boolean;
    received: boolean;
    timeoutTimer: null | NodeJS.Timeout;
    reason: any;
    responsePayloads: ResponsePayloadArray;
    abort: {
        (): void;
    };
    ping: {
        (stream: null | stream.Readable): void;
    };
    pong: {
        (error: any, responsePayload: null | ResponsePayload): void;
    };
    end: {
        (reason: any, value: any): void;
    };
};

type QueueTaskArray = QueueTask[];

type _Queue = {
    timeoutInterval: number;
    pendingTasks: QueueTaskArray;
    currentTask: null | QueueTask;
    stream: stream.Duplex;
    dequeueTaskIfPossible: {
        (): void;
    };
    enqueueTask: {
        (task: QueueTask): void;
    };
    finishCurrentTask: {
        (): void;
    };
};

type Queue = {
    QueueConstructorOptions: {
        (): QueueConstructorOptions;
    };
    _Queue: {
        (): _Queue;
    };
    input: {
        (): stream.Writable;
    };
    output: {
        (): stream.Readable;
    };
    enqueue: {
        (commandPayload: CommandPayload): QueueTask;
    };
};

type QueueConstructor = {
    (options: QueueConstructorOptions): Queue;
};

// Reader

type ReaderConstructorOptions = {

};

type _Reader = {
    buffer: Buffer;
    stream: stream.Transform;
};

type Reader = {
    ReaderConstructorOptions: {
        (): ReaderConstructorOptions;
    };
    _Reader: {
        (): _Reader;
    };
    input: {
        (): stream.Writable;
    };
    output: {
        (): stream.Readable;
    };
};

type ReaderConstructor = {
    (options: ReaderConstructorOptions): Reader;
};

// Writer

type WriterConstructorOptions = {

};

type _Writer = {
    stream: stream.Transform;
};

type Writer = {
    WriterConstructorOptions: {
        (): WriterConstructorOptions;
    };
    _Writer: {
        (): _Writer;
    };
    input: {
        (): stream.Writable;
    };
    output: {
        (): stream.Readable;
    };
};

type WriterConstructor = {
    (options: WriterConstructorOptions): Writer;
};

// Channel

type ChannelConstructorOptions = {
    path: string;
};

type _Channel = {
    serialPort: SerialPort;
};

type Channel = {
    ChannelConstructorOptions: {
        (): ChannelConstructorOptions;
    };
    _Channel: {
        (): _Channel;
    };
    input: {
        (): stream.Duplex;
    };
    output: {
        (): stream.Duplex;
    };
    open: {
        (): Promise<void>;
    };
    close: {
        (): Promise<void>;
    };
};

type ChannelConstructor = {
    (options: ChannelConstructorOptions): Channel;
};

// Utilities

type UtilitiesConstructorOptions = {

};

type _Utilities = {
    frameHeaderBuffer: Buffer;
    errorResponseDataType: DataType;
    calculateCrc16Value: {
        (buffer: Buffer): number;
    };
    packFrame: {
        (frame: Frame): Buffer;
    };
    unpackFrame: {
        (frameBuffer: Buffer): Frame;
    };
    packPayload: {
        (payload: Payload): Buffer;
    };
    unpackPayload: {
        (payloadBuffer: Buffer): Payload;
    };
    packData: {
        (dataType: DataType, data: Record<FieldName, any>): Buffer;
    };
    unpackData: {
        (dataType: DataType, dataBuffer: Buffer): Record<FieldName, any>;
    };
    selectCommandDataType: {
        (addressType: AddressType, commandType: CommandType): null | DataType;
    };
    selectResponseDataType: {
        (addressType: AddressType, commandType: CommandType): null | DataType;
    };
};

type Utilities = {
    UtilitiesConstructorOptions: {
        (): UtilitiesConstructorOptions;
    };
    _Utilities: {
        (): _Utilities;
    };
    packCommandPayloadIntoFrameBuffer: {
        (commandPayload: CommandPayload): Buffer;
    };
    unpackResponsePayloadFromFrameBuffer: {
        (frameBuffer: Buffer): ResponsePayload;
    };
    findAcceptableFrameRangesInBuffer: {
        (buffer: Buffer): AcceptableFrameRangeArray;
    };
    checkAllResponsePayloadsReceived: {
        (commandPayload: CommandPayload, responsePayloads: ResponsePayload[]): boolean;
    };
};

type UtilitiesConstructor = {
    (options: UtilitiesConstructorOptions): Utilities;
};

// Frame

type Frame = {
    headerBuffer: Buffer;
    lengthValue: number;
    payloadBuffer: Buffer;
    crc16Value: number;
};

type AcceptableFrameRange = {
    start: number;
    end: number;
    length: number;
};

type AcceptableFrameRangeArray = AcceptableFrameRange[];

// Payload

type Payload = {
    commandValue: CommandValue;
    addressValue: AddressValue;
    dataBuffer: Buffer;
};

type CommandPayload = {
    command: CommandName;
    address: AddressName;
    data: Record<string, any>;
};

type ResponsePayload = {
    command: CommandName;
    address: AddressName;
    data: Record<string, any>;
};

type ResponsePayloadArray = ResponsePayload[];

// Command

type CommandName = (
    'read'
    | 'write'
    | 'readError'
    | 'writeError'
    | 'unknown'
);

type CommandValue = (
    0x01
    | 0x02
    | 0x81
    | 0x82
    | 0xff
);

type CommandType = {
    name: CommandName;
    value: CommandValue;
};

type CommandTypeArray = CommandType[];

type CommandTypeMap = Map<CommandName | CommandValue, CommandType>;

type CommandsConstructorOptions = {};

type _Commands = {
    commandTypeArray: CommandTypeArray;
    commandTypeMap: CommandTypeMap;
};

type Commands = {
    CommandsConstructorOptions: {
        (): CommandsConstructorOptions;
    };
    _Commands: {
        (): _Commands;
    };
    find: {
        (value: CommandName | CommandValue): undefined | CommandType;
    };
};

type CommandsConstructor = {
    (options: CommandsConstructorOptions): Commands;
};

// Address

type AddressName = (
    'memoryDataLong'
    | 'memoryDataShort'
    | 'latestDataLong'
    | 'latestDataShort'
    | 'accelerationMemoryDataHeader'
    | 'accelerationMemoryDataData'
    | 'latestMemoryInformation'
    | 'latestSensingData'
    | 'latestCalculationData'
    | 'latestSensingFlag'
    | 'latestCalculationFlag'
    | 'latestAccelerationStatus'
    | 'vibrationCount'
    | 'ledSettingNormalState'
    | 'ledSettingEventState'
    | 'ledSettingOperation'
    | 'installationOffset'
    | 'advertiseSetting'
    | 'memoryReset'
    | 'modeChange'
    | 'accelerationLoggerControl'
    | 'accelerationLoggerStatus'
    | 'latestTimeCounter'
    | 'timeSetting'
    | 'memoryStorageInterval'
    | 'eventPatternSensor1'
    | 'eventPatternSensor2'
    | 'eventPatternAcceleration'
    | 'errorStatus'
    | 'mountingOrientation'
    | 'deviceInformation'
);

type AddressValue = (
    0x500e
    | 0x500f
    | 0x5021
    | 0x5022
    | 0x503e
    | 0x503f
    | 0x5004
    | 0x5012
    | 0x5013
    | 0x5014
    | 0x5015
    | 0x5016
    | 0x5031
    | 0x5111
    | 0x5112
    | 0x5113
    | 0x5114
    | 0x5115
    | 0x5116
    | 0x5117
    | 0x5118
    | 0x5119
    | 0x5201
    | 0x5202
    | 0x5203
    | 0x5211
    | 0x5212
    | 0x5226
    | 0x5401
    | 0x5402
    | 0x180a
);

type AddressType = {
    name: AddressName;
    originalName: string;
    value: AddressValue;
    readCommandDataType: null | DataType;
    readResponseDataType: null | DataType;
    writeCommandDataType: null | DataType;
    writeResponseDataType: null | DataType;
};

type AddressTypeArray = AddressType[];

type AddressTypeMap = Map<AddressName | AddressValue, AddressType>;

type AddressesConstructorOptions = {};

type _Addresses = {
    addressTypeArray: AddressTypeArray;
    addressTypeMap: AddressTypeMap;
};

type Addresses = {
    AddressesConstructorOptions: {
        (): AddressesConstructorOptions;
    };
    _Addresses: {
        (): _Addresses;
    };
    find: {
        (value: AddressName | AddressValue): undefined | AddressType;
    };
};

type AddressesConstructor = {
    (options: AddressesConstructorOptions): Addresses;
};

// DataType

type DataType = {
    length: number;
    fieldTypes: FieldTypeArray;
};

// Field

type FieldName = string;

type FieldType = {
    begin: number;
    end: number;
    format: FormatName;
    content: ContentName;
    name: FieldName;
    originalName: string;
};

type FieldTypeArray = FieldType[];

// Format

type FormatName = (
    'SInt16'
    | 'SInt32'
    | 'UInt8'
    | 'UInt16'
    | 'UInt32'
    | 'UInt64'
    | 'Utf8s'
);

type FormatType = {
    name: FormatName;
    read: {
        (buffer: Buffer, begin: number, end: number): (number | bigint | string);
    };
    write: {
        (buffer: Buffer, begin: number, end: number, value: (number | bigint | string)): number;
    };
    primitive: string;
};

type FormatTypeArray = FormatType[];

type FormatTypeMap = Map<FormatName, FormatType>;

type FormatsConstructorOptions = {};

type _Formats = {
    formatTypeArray: FormatTypeArray;
    formatTypeMap: FormatTypeMap;
};

type Formats = {
    FormatsConstructorOptions: {
        (): FormatsConstructorOptions;
    };
    _Formats: {
        (): _Formats;
    };
    find: {
        (value: FormatName): undefined | FormatType;
    };
};

type FormatsConstructor = {
    (options: FormatsConstructorOptions): Formats;
};

// Content

type ContentName = (
    'raw'
    | 'errorCode'
    | 'temperature'
    | 'relativeHumidity'
    | 'ambientLight'
    | 'barometricPressure'
    | 'soundNoise'
    | 'etvoc'
    | 'eco2'
    | 'discomfortIndex'
    | 'heatStroke'
    | 'acceleration'
    | 'siValue'
    | 'pga'
    | 'seismicIntensity'
    | 'siValueCalculationAxis'
    | 'vibrationInformation'
);

type ContentType = {
    name: ContentName;
    encode: {
        (value: any): any;
    };
    decode: {
        (value: any): any;
    };
};

type ContentTypeArray = ContentType[];

type ContentTypeMap = Map<ContentName, ContentType>;

type ContentsConstructorOptions = {};

type _Contents = {
    contentTypeArray: ContentTypeArray;
    contentTypeMap: ContentTypeMap;
};

type Contents = {
    ContentsConstructorOptions: {
        (): ContentsConstructorOptions;
    };
    _Contents: {
        (): _Contents;
    };
    find: {
        (value: ContentName): undefined | ContentType;
    };
};

type ContentsConstructor = {
    (options: ContentsConstructorOptions): Contents;
};

// Primitive

type SInt16 = number;

type SInt32 = number;

type UInt8 = number;

type UInt16 = number;

type UInt32 = number;

type UInt64 = number;

type Utf8s = string;

// Data

type MemoryDataLongReadCommandData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Memory index (Start)
     * - Format: UInt32
     */
    memoryIndexStart: UInt32;
    /**
     * @description
     * - Byte: 4-7
     * - Field: Memory index (End)
     * - Format: UInt32
     */
    memoryIndexEnd: UInt32;
};

type MemoryDataLongReadResponseData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Memory index
     * - Format: UInt32
     */
    memoryIndex: UInt32;
    /**
     * @description
     * - Byte: 4-11
     * - Field: Time counter
     * - Format: UInt64
     */
    timeCounter: UInt64;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 18-21
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 22-23
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 24-25
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 26-27
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 28-29
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 30-31
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
    /**
     * @description
     * - Byte: 32
     * - Field: Vibration information
     * - Format: UInt8
     */
    vibrationInformation: UInt8;
    /**
     * @description
     * - Byte: 33-34
     * - Field: SI value
     * - Format: UInt16
     */
    siValue: UInt16;
    /**
     * @description
     * - Byte: 35-36
     * - Field: PGA
     * - Format: UInt16
     */
    pga: UInt16;
    /**
     * @description
     * - Byte: 37-38
     * - Field: Seismic intensity
     * - Format: UInt16
     */
    seismicIntensity: UInt16;
    /**
     * @description
     * - Byte: 39-40
     * - Field: Temperature flag
     * - Format: UInt16
     */
    temperatureFlag: UInt16;
    /**
     * @description
     * - Byte: 41-42
     * - Field: Relative humidity flag
     * - Format: UInt16
     */
    relativeHumidityFlag: UInt16;
    /**
     * @description
     * - Byte: 43-44
     * - Field: Ambient light flag
     * - Format: UInt16
     */
    ambientLightFlag: UInt16;
    /**
     * @description
     * - Byte: 45-46
     * - Field: Barometric pressure flag
     * - Format: UInt16
     */
    barometricPressureFlag: UInt16;
    /**
     * @description
     * - Byte: 47-48
     * - Field: Sound noise flag
     * - Format: UInt16
     */
    soundNoiseFlag: UInt16;
    /**
     * @description
     * - Byte: 49-50
     * - Field: eTVOC flag
     * - Format: UInt16
     */
    etvocFlag: UInt16;
    /**
     * @description
     * - Byte: 51-52
     * - Field: eCO2 flag
     * - Format: UInt16
     */
    eco2Flag: UInt16;
    /**
     * @description
     * - Byte: 53-54
     * - Field: Discomfort index flag
     * - Format: UInt16
     */
    discomfortIndexFlag: UInt16;
    /**
     * @description
     * - Byte: 55-56
     * - Field: Heat stroke flag
     * - Format: UInt16
     */
    heatStrokeFlag: UInt16;
    /**
     * @description
     * - Byte: 57
     * - Field: SI value flag
     * - Format: UInt8
     */
    siValueFlag: UInt8;
    /**
     * @description
     * - Byte: 58
     * - Field: PGA flag
     * - Format: UInt8
     */
    pgaFlag: UInt8;
    /**
     * @description
     * - Byte: 59
     * - Field: Seismic intensity flag
     * - Format: UInt8
     */
    seismicIntensityFlag: UInt8;
};

type MemoryDataShortReadCommandData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Memory index (Start)
     * - Format: UInt32
     */
    memoryIndexStart: UInt32;
    /**
     * @description
     * - Byte: 4-7
     * - Field: Memory index (End)
     * - Format: UInt32
     */
    memoryIndexEnd: UInt32;
};

type MemoryDataShortReadResponseData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Memory index
     * - Format: UInt32
     */
    memoryIndex: UInt32;
    /**
     * @description
     * - Byte: 4-11
     * - Field: Time counter
     * - Format: UInt64
     */
    timeCounter: UInt64;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 18-21
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 22-23
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 24-25
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 26-27
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 28-29
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 30-31
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
};

type LatestDataLongReadCommandData = {

};

type LatestDataLongReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 13-14
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 15-16
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 17-18
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 19-20
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
    /**
     * @description
     * - Byte: 21
     * - Field: Vibration information
     * - Format: UInt8
     */
    vibrationInformation: UInt8;
    /**
     * @description
     * - Byte: 22-23
     * - Field: SI value
     * - Format: UInt16
     */
    siValue: UInt16;
    /**
     * @description
     * - Byte: 24-25
     * - Field: PGA
     * - Format: UInt16
     */
    pga: UInt16;
    /**
     * @description
     * - Byte: 26-27
     * - Field: Seismic intensity
     * - Format: UInt16
     */
    seismicIntensity: UInt16;
    /**
     * @description
     * - Byte: 28-29
     * - Field: Temperature flag
     * - Format: UInt16
     */
    temperatureFlag: UInt16;
    /**
     * @description
     * - Byte: 30-31
     * - Field: Relative humidity flag
     * - Format: UInt16
     */
    relativeHumidityFlag: UInt16;
    /**
     * @description
     * - Byte: 32-33
     * - Field: Ambient light flag
     * - Format: UInt16
     */
    ambientLightFlag: UInt16;
    /**
     * @description
     * - Byte: 34-35
     * - Field: Barometric pressure flag
     * - Format: UInt16
     */
    barometricPressureFlag: UInt16;
    /**
     * @description
     * - Byte: 36-37
     * - Field: Sound noise flag
     * - Format: UInt16
     */
    soundNoiseFlag: UInt16;
    /**
     * @description
     * - Byte: 38-39
     * - Field: eTVOC flag
     * - Format: UInt16
     */
    etvocFlag: UInt16;
    /**
     * @description
     * - Byte: 40-41
     * - Field: eCO2 flag
     * - Format: UInt16
     */
    eco2Flag: UInt16;
    /**
     * @description
     * - Byte: 42-43
     * - Field: Discomfort index flag
     * - Format: UInt16
     */
    discomfortIndexFlag: UInt16;
    /**
     * @description
     * - Byte: 44-45
     * - Field: Heat stroke flag
     * - Format: UInt16
     */
    heatStrokeFlag: UInt16;
    /**
     * @description
     * - Byte: 46
     * - Field: SI value flag
     * - Format: UInt8
     */
    siValueFlag: UInt8;
    /**
     * @description
     * - Byte: 47
     * - Field: PGA flag
     * - Format: UInt8
     */
    pgaFlag: UInt8;
    /**
     * @description
     * - Byte: 48
     * - Field: Seismic intensity flag
     * - Format: UInt8
     */
    seismicIntensityFlag: UInt8;
};

type LatestDataShortReadCommandData = {

};

type LatestDataShortReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 13-14
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 15-16
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 17-18
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 19-20
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
};

type AccelerationMemoryDataHeaderReadCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Acceleration data type
     * - Format: UInt8
     */
    accelerationDataType: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Request acceleration memory index
     * - Format: UInt8
     */
    requestAccelerationMemoryIndex: UInt8;
};

type AccelerationMemoryDataHeaderReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Storage total page
     * - Format: UInt16
     */
    storageTotalPage: UInt16;
    /**
     * @description
     * - Byte: 2-5
     * - Field: Earthquakes or vibration count
     * - Format: UInt32
     */
    earthquakesOrVibrationCount: UInt32;
    /**
     * @description
     * - Byte: 6-13
     * - Field: Time counter
     * - Format: UInt64
     */
    timeCounter: UInt64;
    /**
     * @description
     * - Byte: 14
     * - Field: Earthquake flag
     * - Format: UInt8
     */
    earthquakeFlag: UInt8;
    /**
     * @description
     * - Byte: 15
     * - Field: SI value calculation axis
     * - Format: UInt8
     */
    siValueCalculationAxis: UInt8;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Reserved for Future Use
     * - Format: UInt8
     */
    reservedForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 18-19
     * - Field: Page number
     * - Format: UInt16
     */
    pageNumber: UInt16;
    /**
     * @description
     * - Byte: 20-21
     * - Field: SI value
     * - Format: UInt16
     */
    siValue: UInt16;
    /**
     * @description
     * - Byte: 22-23
     * - Field: PGA
     * - Format: UInt16
     */
    pga: UInt16;
    /**
     * @description
     * - Byte: 24-25
     * - Field: Seismic intensity
     * - Format: UInt16
     */
    seismicIntensity: UInt16;
    /**
     * @description
     * - Byte: 26-27
     * - Field: Maximum acceleration (X-axis)
     * - Format: UInt16
     */
    maximumAccelerationXAxis: UInt16;
    /**
     * @description
     * - Byte: 28-29
     * - Field: Maximum acceleration (Y-axis)
     * - Format: UInt16
     */
    maximumAccelerationYAxis: UInt16;
    /**
     * @description
     * - Byte: 30-31
     * - Field: Maximum acceleration (Z-axis)
     * - Format: UInt16
     */
    maximumAccelerationZAxis: UInt16;
    /**
     * @description
     * - Byte: 32-33
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 34-35
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 36-37
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 38-41
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 42-43
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 44-45
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 46-47
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 48-49
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 50-51
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
    /**
     * @description
     * - Byte: 52
     * - Field: Reserved for Future Use
     * - Format: UInt8
     */
    reservedForFutureUse_2: UInt8;
    /**
     * @description
     * - Byte: 53
     * - Field: Reserved for Future Use
     * - Format: UInt8
     */
    reservedForFutureUse_3: UInt8;
    /**
     * @description
     * - Byte: 54-55
     * - Field: Acceleration offset (X-axis)
     * - Format: SInt16
     */
    accelerationOffsetXAxis: SInt16;
    /**
     * @description
     * - Byte: 56-57
     * - Field: Acceleration offset (Y-axis)
     * - Format: SInt16
     */
    accelerationOffsetYAxis: SInt16;
    /**
     * @description
     * - Byte: 58-59
     * - Field: Acceleration offset (Z-axis)
     * - Format: SInt16
     */
    accelerationOffsetZAxis: SInt16;
};

type AccelerationMemoryDataDataReadCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Acceleration data type
     * - Format: UInt8
     */
    accelerationDataType: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Request acceleration memory index
     * - Format: UInt8
     */
    requestAccelerationMemoryIndex: UInt8;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Request page (Start)
     * - Format: UInt16
     */
    requestPageStart: UInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Request page (End)
     * - Format: UInt16
     */
    requestPageEnd: UInt16;
};

type AccelerationMemoryDataDataReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Page number
     * - Format: UInt16
     */
    pageNumber: UInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: SI value
     * - Format: UInt16
     */
    siValue: UInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: PGA
     * - Format: UInt16
     */
    pga: UInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Seismic intensity
     * - Format: UInt16
     */
    seismicIntensity: UInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Maximum acceleration (X-axis)
     * - Format: UInt16
     */
    maximumAccelerationXAxis: UInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Maximum acceleration (Y-axis)
     * - Format: UInt16
     */
    maximumAccelerationYAxis: UInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Maximum acceleration (Z-axis)
     * - Format: UInt16
     */
    maximumAccelerationZAxis: UInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 18-19
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 20-21
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 22-23
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 24-25
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 26-27
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
    /**
     * @description
     * - Byte: 28-29
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 30-31
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
    /**
     * @description
     * - Byte: 32-33
     * - Field: Reserved for Future Use
     * - Format: UInt8
     */
    reservedForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 34-35
     * - Field: Reserved for Future Use
     * - Format: UInt8
     */
    reservedForFutureUse_2: UInt8;
    /**
     * @description
     * - Byte: 36-37
     * - Field: Acceleration (X-axis) 1
     * - Format: SInt16
     */
    accelerationXAxis1: SInt16;
    /**
     * @description
     * - Byte: 38-39
     * - Field: Acceleration (Y-axis) 1
     * - Format: SInt16
     */
    accelerationYAxis1: SInt16;
    /**
     * @description
     * - Byte: 40-41
     * - Field: Acceleration (Z-axis) 1
     * - Format: SInt16
     */
    accelerationZAxis1: SInt16;
    /**
     * @description
     * - Byte: 222-223
     * - Field: Acceleration (X-axis) 32
     * - Format: SInt16
     */
    accelerationXAxis32: SInt16;
    /**
     * @description
     * - Byte: 224-225
     * - Field: Acceleration (Y-axis) 32
     * - Format: SInt16
     */
    accelerationYAxis32: SInt16;
    /**
     * @description
     * - Byte: 226-227
     * - Field: Acceleration (Z-axis) 32
     * - Format: SInt16
     */
    accelerationZAxis32: SInt16;
};

type LatestMemoryInformationReadCommandData = {

};

type LatestMemoryInformationReadResponseData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Memory index (Latest)
     * - Format: UInt32
     */
    memoryIndexLatest: UInt32;
    /**
     * @description
     * - Byte: 4-7
     * - Field: Memory index (Last)
     * - Format: UInt32
     */
    memoryIndexLast: UInt32;
};

type LatestSensingDataReadCommandData = {

};

type LatestSensingDataReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature
     * - Format: SInt16
     */
    temperature: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity
     * - Format: SInt16
     */
    relativeHumidity: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light
     * - Format: SInt16
     */
    ambientLight: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure
     * - Format: SInt32
     */
    barometricPressure: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise
     * - Format: SInt16
     */
    soundNoise: SInt16;
    /**
     * @description
     * - Byte: 13-14
     * - Field: eTVOC
     * - Format: SInt16
     */
    etvoc: SInt16;
    /**
     * @description
     * - Byte: 15-16
     * - Field: eCO2
     * - Format: SInt16
     */
    eco2: SInt16;
};

type LatestCalculationDataReadCommandData = {

};

type LatestCalculationDataReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Discomfort index
     * - Format: SInt16
     */
    discomfortIndex: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Heat stroke
     * - Format: SInt16
     */
    heatStroke: SInt16;
    /**
     * @description
     * - Byte: 5
     * - Field: Vibration information
     * - Format: UInt8
     */
    vibrationInformation: UInt8;
    /**
     * @description
     * - Byte: 6-7
     * - Field: SI value
     * - Format: UInt16
     */
    siValue: UInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: PGA
     * - Format: UInt16
     */
    pga: UInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Seismic intensity
     * - Format: UInt16
     */
    seismicIntensity: UInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Acceleration (X-axis)
     * - Format: SInt16
     */
    accelerationXAxis: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Acceleration (Y-axis)
     * - Format: SInt16
     */
    accelerationYAxis: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Acceleration (Z-axis)
     * - Format: SInt16
     */
    accelerationZAxis: SInt16;
};

type LatestSensingFlagReadCommandData = {

};

type LatestSensingFlagReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature flag
     * - Format: UInt16
     */
    temperatureFlag: UInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity flag
     * - Format: UInt16
     */
    relativeHumidityFlag: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light flag
     * - Format: UInt16
     */
    ambientLightFlag: UInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure flag
     * - Format: UInt16
     */
    barometricPressureFlag: UInt16;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise flag
     * - Format: UInt16
     */
    soundNoiseFlag: UInt16;
    /**
     * @description
     * - Byte: 13-14
     * - Field: eTVOC flag
     * - Format: UInt16
     */
    etvocFlag: UInt16;
    /**
     * @description
     * - Byte: 15-16
     * - Field: eCO2 flag
     * - Format: UInt16
     */
    eco2Flag: UInt16;
};

type LatestCalculationFlagReadCommandData = {

};

type LatestCalculationFlagReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Discomfort index flag
     * - Format: UInt16
     */
    discomfortIndexFlag: UInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Heat stroke flag
     * - Format: UInt16
     */
    heatStrokeFlag: UInt16;
    /**
     * @description
     * - Byte: 5
     * - Field: SI value flag
     * - Format: UInt8
     */
    siValueFlag: UInt8;
    /**
     * @description
     * - Byte: 6
     * - Field: PGA flag
     * - Format: UInt8
     */
    pgaFlag: UInt8;
    /**
     * @description
     * - Byte: 7
     * - Field: Seismic intensity flag
     * - Format: UInt8
     */
    seismicIntensityFlag: UInt8;
};

type LatestAccelerationStatusReadCommandData = {

};

type LatestAccelerationStatusReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Sequence number
     * - Format: UInt8
     */
    sequenceNumber: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Vibration information
     * - Format: UInt8
     */
    vibrationInformation: UInt8;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Maximum acceleration (X-axis)
     * - Format: SInt16
     */
    maximumAccelerationXAxis: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Maximum acceleration (Y-axis)
     * - Format: SInt16
     */
    maximumAccelerationYAxis: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Maximum acceleration (Z-axis)
     * - Format: SInt16
     */
    maximumAccelerationZAxis: SInt16;
    /**
     * @description
     * - Byte: 8
     * - Field: SI value calculation axis
     * - Format: UInt8
     */
    siValueCalculationAxis: UInt8;
    /**
     * @description
     * - Byte: 9-10
     * - Field: Acceleration offset (X-axis)
     * - Format: SInt16
     */
    accelerationOffsetXAxis: SInt16;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Acceleration offset (Y-axis)
     * - Format: SInt16
     */
    accelerationOffsetYAxis: SInt16;
    /**
     * @description
     * - Byte: 13-14
     * - Field: Acceleration offset (Z-axis)
     * - Format: SInt16
     */
    accelerationOffsetZAxis: SInt16;
};

type VibrationCountReadCommandData = {

};

type VibrationCountReadResponseData = {
    /**
     * @description
     * - Byte: 0-3
     * - Field: Earthquake count
     * - Format: UInt32
     */
    earthquakeCount: UInt32;
    /**
     * @description
     * - Byte: 4-7
     * - Field: Vibration count
     * - Format: UInt32
     */
    vibrationCount: UInt32;
};

type LedSettingNormalStateReadCommandData = {

};

type LedSettingNormalStateReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (normal state)
     * - Format: UInt16
     */
    displayRuleNormalState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingNormalStateWriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (normal state)
     * - Format: UInt16
     */
    displayRuleNormalState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingNormalStateWriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (normal state)
     * - Format: UInt16
     */
    displayRuleNormalState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingEventStateReadCommandData = {

};

type LedSettingEventStateReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (event state)
     * - Format: UInt16
     */
    displayRuleEventState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingEventStateWriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (event state)
     * - Format: UInt16
     */
    displayRuleEventState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingEventStateWriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Display rule (event state)
     * - Format: UInt16
     */
    displayRuleEventState: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Intensity of LED (Red)
     * - Format: UInt8
     */
    intensityOfLedRed: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Intensity of LED (Green)
     * - Format: UInt8
     */
    intensityOfLedGreen: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Intensity of LED (Blue)
     * - Format: UInt8
     */
    intensityOfLedBlue: UInt8;
};

type LedSettingOperationReadCommandData = {

};

type LedSettingOperationReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Start up
     * - Format: UInt8
     */
    startUp: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Error
     * - Format: UInt8
     */
    error: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: Channel
     * - Format: UInt8
     */
    connection: UInt8;
};

type LedSettingOperationWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Start up
     * - Format: UInt8
     */
    startUp: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Error
     * - Format: UInt8
     */
    error: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: Channel
     * - Format: UInt8
     */
    connection: UInt8;
};

type LedSettingOperationWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Start up
     * - Format: UInt8
     */
    startUp: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Error
     * - Format: UInt8
     */
    error: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: Channel
     * - Format: UInt8
     */
    connection: UInt8;
};

type InstallationOffsetReadCommandData = {

};

type InstallationOffsetReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Installation offset enable/disable
     * - Format: UInt8
     */
    installationOffsetEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature installation offset
     * - Format: SInt16
     */
    temperatureInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity installation offset
     * - Format: SInt16
     */
    relativeHumidityInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light installation gain
     * - Format: SInt16
     */
    ambientLightInstallationGain: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure installation offset
     * - Format: SInt32
     */
    barometricPressureInstallationOffset: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise installation offset
     * - Format: SInt16
     */
    soundNoiseInstallationOffset: SInt16;
};

type InstallationOffsetWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Installation offset enable/disable
     * - Format: UInt8
     */
    installationOffsetEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature installation offset
     * - Format: SInt16
     */
    temperatureInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity installation offset
     * - Format: SInt16
     */
    relativeHumidityInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light installation gain
     * - Format: SInt16
     */
    ambientLightInstallationGain: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure installation offset
     * - Format: SInt32
     */
    barometricPressureInstallationOffset: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise installation offset
     * - Format: SInt16
     */
    soundNoiseInstallationOffset: SInt16;
};

type InstallationOffsetWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Installation offset enable/disable
     * - Format: UInt8
     */
    installationOffsetEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Temperature installation offset
     * - Format: SInt16
     */
    temperatureInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Relative humidity installation offset
     * - Format: SInt16
     */
    relativeHumidityInstallationOffset: SInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Ambient light installation gain
     * - Format: SInt16
     */
    ambientLightInstallationGain: SInt16;
    /**
     * @description
     * - Byte: 7-10
     * - Field: Barometric pressure installation offset
     * - Format: SInt32
     */
    barometricPressureInstallationOffset: SInt32;
    /**
     * @description
     * - Byte: 11-12
     * - Field: Sound noise installation offset
     * - Format: SInt16
     */
    soundNoiseInstallationOffset: SInt16;
};

type AdvertiseSettingReadCommandData = {

};

type AdvertiseSettingReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Advertising interval
     * - Format: UInt16
     */
    advertisingInterval: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Advertising mode
     * - Format: UInt8
     */
    advertisingMode: UInt8;
};

type AdvertiseSettingWriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Advertising interval
     * - Format: UInt16
     */
    advertisingInterval: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Advertising mode
     * - Format: UInt8
     */
    advertisingMode: UInt8;
};

type AdvertiseSettingWriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Advertising interval
     * - Format: UInt16
     */
    advertisingInterval: UInt16;
    /**
     * @description
     * - Byte: 2
     * - Field: Advertising mode
     * - Format: UInt8
     */
    advertisingMode: UInt8;
};

type MemoryResetWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Memory reset
     * - Format: UInt8
     */
    memoryReset: UInt8;
};

type MemoryResetWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Memory reset
     * - Format: UInt8
     */
    memoryReset: UInt8;
};

type ModeChangeReadCommandData = {

};

type ModeChangeReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Mode change
     * - Format: UInt8
     */
    modeChange: UInt8;
};

type ModeChangeWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Mode change
     * - Format: UInt8
     */
    modeChange: UInt8;
};

type ModeChangeWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Mode change
     * - Format: UInt8
     */
    modeChange: UInt8;
};

type AccelerationLoggerControlWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Logger condition
     * - Format: UInt8
     */
    loggerCondition: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Range of detection
     * - Format: UInt8
     */
    rangeOfDetection: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: ODR setting
     * - Format: UInt8
     */
    odrSetting: UInt8;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Start page
     * - Format: UInt16
     */
    startPage: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: End page
     * - Format: UInt16
     */
    endPage: UInt16;
};

type AccelerationLoggerControlWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Logger condition
     * - Format: UInt8
     */
    loggerCondition: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Range of detection
     * - Format: UInt8
     */
    rangeOfDetection: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: ODR setting
     * - Format: UInt8
     */
    odrSetting: UInt8;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Start page
     * - Format: UInt16
     */
    startPage: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: End page
     * - Format: UInt16
     */
    endPage: UInt16;
};

type AccelerationLoggerStatusReadCommandData = {

};

type AccelerationLoggerStatusReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Logger status
     * - Format: UInt8
     */
    loggerStatus: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Running page
     * - Format: UInt16
     */
    runningPage: UInt16;
};

type AccelerationLoggerStatusWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Logger status
     * - Format: UInt8
     */
    loggerStatus: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Running page
     * - Format: UInt16
     */
    runningPage: UInt16;
};

type AccelerationLoggerStatusWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Logger status
     * - Format: UInt8
     */
    loggerStatus: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Running page
     * - Format: UInt16
     */
    runningPage: UInt16;
};

type LatestTimeCounterReadCommandData = {

};

type LatestTimeCounterReadResponseData = {
    /**
     * @description
     * - Byte: 0-7
     * - Field: Time counter
     * - Format: UInt64
     */
    timeCounter: UInt64;
};

type TimeSettingReadCommandData = {

};

type TimeSettingReadResponseData = {
    /**
     * @description
     * - Byte: 0-7
     * - Field: Time setting
     * - Format: UInt64
     */
    timeSetting: UInt64;
};

type TimeSettingWriteCommandData = {
    /**
     * @description
     * - Byte: 0-7
     * - Field: Time setting
     * - Format: UInt64
     */
    timeSetting: UInt64;
};

type TimeSettingWriteResponseData = {
    /**
     * @description
     * - Byte: 0-7
     * - Field: Time setting
     * - Format: UInt64
     */
    timeSetting: UInt64;
};

type MemoryStorageIntervalReadCommandData = {

};

type MemoryStorageIntervalReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Memory storage interval
     * - Format: UInt16
     */
    memoryStorageInterval: UInt16;
};

type MemoryStorageIntervalWriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Memory storage interval
     * - Format: UInt16
     */
    memoryStorageInterval: UInt16;
};

type MemoryStorageIntervalWriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Memory storage interval
     * - Format: UInt16
     */
    memoryStorageInterval: UInt16;
};

type EventPatternSensor1ReadCommandData = {

};

type EventPatternSensor1ReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Event enable/disable
     * - Format: UInt16
     */
    eventEnableDisable: UInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Simple threshold [upper limit] 1
     * - Format: SInt16
     */
    simpleThresholdUpperLimit1: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Simple threshold [upper limit] 2
     * - Format: SInt16
     */
    simpleThresholdUpperLimit2: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Simple threshold [lower limit] 1
     * - Format: SInt16
     */
    simpleThresholdLowerLimit1: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Simple threshold [lower limit] 2
     * - Format: SInt16
     */
    simpleThresholdLowerLimit2: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Change threshold [rise] 1
     * - Format: SInt16
     */
    changeThresholdRise1: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Change threshold [rise] 2
     * - Format: SInt16
     */
    changeThresholdRise2: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Change threshold [decline] 1
     * - Format: SInt16
     */
    changeThresholdDecline1: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Change threshold [decline] 2
     * - Format: SInt16
     */
    changeThresholdDecline2: SInt16;
    /**
     * @description
     * - Byte: 18
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_2: UInt8;
};

type EventPatternSensor1WriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Event enable/disable
     * - Format: UInt16
     */
    eventEnableDisable: UInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Simple threshold [upper limit] 1
     * - Format: SInt16
     */
    simpleThresholdUpperLimit1: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Simple threshold [upper limit] 2
     * - Format: SInt16
     */
    simpleThresholdUpperLimit2: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Simple threshold [lower limit] 1
     * - Format: SInt16
     */
    simpleThresholdLowerLimit1: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Simple threshold [lower limit] 2
     * - Format: SInt16
     */
    simpleThresholdLowerLimit2: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Change threshold [rise] 1
     * - Format: SInt16
     */
    changeThresholdRise1: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Change threshold [rise] 2
     * - Format: SInt16
     */
    changeThresholdRise2: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Change threshold [decline] 1
     * - Format: SInt16
     */
    changeThresholdDecline1: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Change threshold [decline] 2
     * - Format: SInt16
     */
    changeThresholdDecline2: SInt16;
    /**
     * @description
     * - Byte: 18
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_2: UInt8;
};

type EventPatternSensor1WriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Event enable/disable
     * - Format: UInt16
     */
    eventEnableDisable: UInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Simple threshold [upper limit] 1
     * - Format: SInt16
     */
    simpleThresholdUpperLimit1: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Simple threshold [upper limit] 2
     * - Format: SInt16
     */
    simpleThresholdUpperLimit2: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Simple threshold [lower limit] 1
     * - Format: SInt16
     */
    simpleThresholdLowerLimit1: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Simple threshold [lower limit] 2
     * - Format: SInt16
     */
    simpleThresholdLowerLimit2: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Change threshold [rise] 1
     * - Format: SInt16
     */
    changeThresholdRise1: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Change threshold [rise] 2
     * - Format: SInt16
     */
    changeThresholdRise2: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Change threshold [decline] 1
     * - Format: SInt16
     */
    changeThresholdDecline1: SInt16;
    /**
     * @description
     * - Byte: 16-17
     * - Field: Change threshold [decline] 2
     * - Format: SInt16
     */
    changeThresholdDecline2: SInt16;
    /**
     * @description
     * - Byte: 18
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_2: UInt8;
};

type EventPatternSensor2ReadCommandData = {

};

type EventPatternSensor2ReadResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Average value threshold [upper]
     * - Format: SInt16
     */
    averageValueThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Average value threshold [lower]
     * - Format: SInt16
     */
    averageValueThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Peak to Peak threshold [upper]
     * - Format: SInt16
     */
    peakToPeakThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Peak to Peak threshold [lower]
     * - Format: SInt16
     */
    peakToPeakThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Interval difference threshold [upper]
     * - Format: SInt16
     */
    intervalDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Interval difference threshold [lower]
     * - Format: SInt16
     */
    intervalDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Base difference threshold [upper]
     * - Format: SInt16
     */
    baseDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Base difference threshold [lower]
     * - Format: SInt16
     */
    baseDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 16
     * - Field: Average value count
     * - Format: UInt8
     */
    averageValueCount: UInt8;
    /**
     * @description
     * - Byte: 17
     * - Field: Peak to Peak count
     * - Format: UInt8
     */
    peakToPeakCount: UInt8;
    /**
     * @description
     * - Byte: 18
     * - Field: Interval difference count
     * - Format: UInt8
     */
    intervalDifferenceCount: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Base difference count
     * - Format: UInt8
     */
    baseDifferenceCount: UInt8;
};

type EventPatternSensor2WriteCommandData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Average value threshold [upper]
     * - Format: SInt16
     */
    averageValueThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Average value threshold [lower]
     * - Format: SInt16
     */
    averageValueThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Peak to Peak threshold [upper]
     * - Format: SInt16
     */
    peakToPeakThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Peak to Peak threshold [lower]
     * - Format: SInt16
     */
    peakToPeakThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Interval difference threshold [upper]
     * - Format: SInt16
     */
    intervalDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Interval difference threshold [lower]
     * - Format: SInt16
     */
    intervalDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Base difference threshold [upper]
     * - Format: SInt16
     */
    baseDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Base difference threshold [lower]
     * - Format: SInt16
     */
    baseDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 16
     * - Field: Average value count
     * - Format: UInt8
     */
    averageValueCount: UInt8;
    /**
     * @description
     * - Byte: 17
     * - Field: Peak to Peak count
     * - Format: UInt8
     */
    peakToPeakCount: UInt8;
    /**
     * @description
     * - Byte: 18
     * - Field: Interval difference count
     * - Format: UInt8
     */
    intervalDifferenceCount: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Base difference count
     * - Format: UInt8
     */
    baseDifferenceCount: UInt8;
};

type EventPatternSensor2WriteResponseData = {
    /**
     * @description
     * - Byte: 0-1
     * - Field: Average value threshold [upper]
     * - Format: SInt16
     */
    averageValueThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 2-3
     * - Field: Average value threshold [lower]
     * - Format: SInt16
     */
    averageValueThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 4-5
     * - Field: Peak to Peak threshold [upper]
     * - Format: SInt16
     */
    peakToPeakThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 6-7
     * - Field: Peak to Peak threshold [lower]
     * - Format: SInt16
     */
    peakToPeakThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 8-9
     * - Field: Interval difference threshold [upper]
     * - Format: SInt16
     */
    intervalDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 10-11
     * - Field: Interval difference threshold [lower]
     * - Format: SInt16
     */
    intervalDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 12-13
     * - Field: Base difference threshold [upper]
     * - Format: SInt16
     */
    baseDifferenceThresholdUpper: SInt16;
    /**
     * @description
     * - Byte: 14-15
     * - Field: Base difference threshold [lower]
     * - Format: SInt16
     */
    baseDifferenceThresholdLower: SInt16;
    /**
     * @description
     * - Byte: 16
     * - Field: Average value count
     * - Format: UInt8
     */
    averageValueCount: UInt8;
    /**
     * @description
     * - Byte: 17
     * - Field: Peak to Peak count
     * - Format: UInt8
     */
    peakToPeakCount: UInt8;
    /**
     * @description
     * - Byte: 18
     * - Field: Interval difference count
     * - Format: UInt8
     */
    intervalDifferenceCount: UInt8;
    /**
     * @description
     * - Byte: 19
     * - Field: Base difference count
     * - Format: UInt8
     */
    baseDifferenceCount: UInt8;
};

type EventPatternAccelerationReadCommandData = {

};

type EventPatternAccelerationReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Event enable/disable
     * - Format: UInt8
     */
    eventEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Simple threshold [upper limit] 1
     * - Format: UInt16
     */
    simpleThresholdUpperLimit1: UInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Simple threshold [upper limit] 2
     * - Format: UInt16
     */
    simpleThresholdUpperLimit2: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Change threshold [rise] 1
     * - Format: UInt16
     */
    changeThresholdRise1: UInt16;
    /**
     * @description
     * - Byte: 7-8
     * - Field: Change threshold [rise] 2
     * - Format: UInt16
     */
    changeThresholdRise2: UInt16;
};

type EventPatternAccelerationWriteCommandData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Event enable/disable
     * - Format: UInt8
     */
    eventEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Simple threshold [upper limit] 1
     * - Format: UInt16
     */
    simpleThresholdUpperLimit1: UInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Simple threshold [upper limit] 2
     * - Format: UInt16
     */
    simpleThresholdUpperLimit2: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Change threshold [rise] 1
     * - Format: UInt16
     */
    changeThresholdRise1: UInt16;
    /**
     * @description
     * - Byte: 7-8
     * - Field: Change threshold [rise] 2
     * - Format: UInt16
     */
    changeThresholdRise2: UInt16;
};

type EventPatternAccelerationWriteResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Event enable/disable
     * - Format: UInt8
     */
    eventEnableDisable: UInt8;
    /**
     * @description
     * - Byte: 1-2
     * - Field: Simple threshold [upper limit] 1
     * - Format: UInt16
     */
    simpleThresholdUpperLimit1: UInt16;
    /**
     * @description
     * - Byte: 3-4
     * - Field: Simple threshold [upper limit] 2
     * - Format: UInt16
     */
    simpleThresholdUpperLimit2: UInt16;
    /**
     * @description
     * - Byte: 5-6
     * - Field: Change threshold [rise] 1
     * - Format: UInt16
     */
    changeThresholdRise1: UInt16;
    /**
     * @description
     * - Byte: 7-8
     * - Field: Change threshold [rise] 2
     * - Format: UInt16
     */
    changeThresholdRise2: UInt16;
};

type ErrorStatusReadCommandData = {

};

type ErrorStatusReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Temperature sensor error
     * - Format: UInt8
     */
    temperatureSensorError: UInt8;
    /**
     * @description
     * - Byte: 1
     * - Field: Relative humidity sensor error
     * - Format: UInt8
     */
    relativeHumiditySensorError: UInt8;
    /**
     * @description
     * - Byte: 2
     * - Field: Ambient light sensor error
     * - Format: UInt8
     */
    ambientLightSensorError: UInt8;
    /**
     * @description
     * - Byte: 3
     * - Field: Barometric pressure sensor error
     * - Format: UInt8
     */
    barometricPressureSensorError: UInt8;
    /**
     * @description
     * - Byte: 4
     * - Field: Sound noise sensor error
     * - Format: UInt8
     */
    soundNoiseSensorError: UInt8;
    /**
     * @description
     * - Byte: 5
     * - Field: Acceleration sensor error
     * - Format: UInt8
     */
    accelerationSensorError: UInt8;
    /**
     * @description
     * - Byte: 6
     * - Field: eTVOC sensor error
     * - Format: UInt8
     */
    etvocSensorError: UInt8;
    /**
     * @description
     * - Byte: 7
     * - Field: eCO2 sensor error
     * - Format: UInt8
     */
    eco2SensorError: UInt8;
    /**
     * @description
     * - Byte: 8
     * - Field: CPU error
     * - Format: UInt8
     */
    cpuError: UInt8;
    /**
     * @description
     * - Byte: 9
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_1: UInt8;
    /**
     * @description
     * - Byte: 10
     * - Field: Reserve for Future Use
     * - Format: UInt8
     */
    reserveForFutureUse_2: UInt8;
};

type MountingOrientationReadCommandData = {

};

type MountingOrientationReadResponseData = {
    /**
     * @description
     * - Byte: 0
     * - Field: Mounting orientation
     * - Format: UInt8
     */
    mountingOrientation: UInt8;
};

type DeviceInformationReadCommandData = {

};

type DeviceInformationReadResponseData = {
    /**
     * @description
     * - Byte: 0-9
     * - Field: Model number
     * - Format: Utf8s
     */
    modelNumber: Utf8s;
    /**
     * @description
     * - Byte: 10-19
     * - Field: Serial number
     * - Format: Utf8s
     */
    serialNumber: Utf8s;
    /**
     * @description
     * - Byte: 20-24
     * - Field: Firmware revision
     * - Format: Utf8s
     */
    firmwareRevision: Utf8s;
    /**
     * @description
     * - Byte: 25-29
     * - Field: Hardware revision
     * - Format: Utf8s
     */
    hardwareRevision: Utf8s;
    /**
     * @description
     * - Byte: 30-34
     * - Field: Manufacture name
     * - Format: Utf8s
     */
    manufactureName: Utf8s;
};

/**
 * Reference:
 * - https://omronfs.omron.com/ja_JP/ecb/products/pdf/CDSC-016A-web1.pdf
 */
