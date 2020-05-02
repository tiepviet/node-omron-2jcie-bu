/**
 * node-omron-2jcie-bu/lib/annotations.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

/**
 * Reference:
 * - https://omronfs.omron.com/ja_JP/ecb/products/pdf/CDSC-016A-web1.pdf
 */

///////////////////////////////////////////////////////////////////////////////
// Stream
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Stream
 * @type {import('stream').Stream}
 */

/**
 * @typedef PassThrough
 * @type {import('stream').PassThrough}
 */

/**
 * @typedef Transform
 * @type {import('stream').Transform}
 */

///////////////////////////////////////////////////////////////////////////////
// Frame
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Frame
 * @type {object}
 * @property {Buffer} headerBuffer
 * @property {number} lengthValue
 * @property {Buffer} payloadBuffer
 * @property {number} crc16Value
 * @property {number} crc16ValueCheck
 * @property {boolean} crc16ValueMatch
 */

///////////////////////////////////////////////////////////////////////////////
// Payload
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Payload
 * @type {object}
 * @property {CommandValue} commandValue
 * @property {AddressValue} addressValue
 * @property {Buffer} dataBuffer
 */

///////////////////////////////////////////////////////////////////////////////
// Commands
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef CommandName
 * @type {(
 *     'read'
 *   | 'write'
 *   | 'readError'
 *   | 'writeError'
 *   | 'unknown'
 * )}
 */

/**
 * @typedef CommandValue
 * @type {(
 *     0x01
 *   | 0x02
 *   | 0x81
 *   | 0x82
 *   | 0xff
 * )}
 */

/**
 * @typedef CommandType
 * @type {object}
 * @property {CommandName} name
 * @property {CommandValue} value
 */

/**
 * @typedef CommandTypeArray
 * @type {Array<CommandType>}
 */

/**
 * @typedef CommandTypeMap
 * @type {Map<CommandName | CommandValue, CommandType>}
 */

/**
 * @typedef Commands
 * @type {object}
 * @property {(value: CommandName | CommandValue) => CommandType} find
 */

///////////////////////////////////////////////////////////////////////////////
// Addresses
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef AddressName
 * @type {(
 *     'memoryDataLong'
 *   | 'memoryDataShort'
 *   | 'latestDataLong'
 *   | 'latestDataShort'
 *   | 'accelerationMemoryDataHeader'
 *   | 'accelerationMemoryDataData'
 *   | 'latestMemoryInformation'
 *   | 'latestSensingData'
 *   | 'latestCalculationData'
 *   | 'latestSensingFlag'
 *   | 'latestCalculationFlag'
 *   | 'latestAccelerationStatus'
 *   | 'vibrationCount'
 *   | 'ledSettingNormalState'
 *   | 'ledSettingEventState'
 *   | 'ledSettingOperation'
 *   | 'installationOffset'
 *   | 'advertiseSetting'
 *   | 'memoryReset'
 *   | 'modeChange'
 *   | 'accelerationLoggerControl'
 *   | 'accelerationLoggerStatus'
 *   | 'latestTimeCounter'
 *   | 'timeSetting'
 *   | 'memoryStorageInterval'
 *   | 'eventPatternSensor1'
 *   | 'eventPatternSensor2'
 *   | 'eventPatternAcceleration'
 *   | 'errorStatus'
 *   | 'mountingOrientation'
 *   | 'deviceInformation'
 * )}
 */

/**
 * @typedef AddressValue
 * @type {(
 *     0x500e
 *   | 0x500f
 *   | 0x5021
 *   | 0x5022
 *   | 0x503e
 *   | 0x503f
 *   | 0x5004
 *   | 0x5012
 *   | 0x5013
 *   | 0x5014
 *   | 0x5015
 *   | 0x5016
 *   | 0x5031
 *   | 0x5111
 *   | 0x5112
 *   | 0x5113
 *   | 0x5114
 *   | 0x5115
 *   | 0x5116
 *   | 0x5117
 *   | 0x5118
 *   | 0x5119
 *   | 0x5201
 *   | 0x5202
 *   | 0x5203
 *   | 0x5211
 *   | 0x5212
 *   | 0x5226
 *   | 0x5401
 *   | 0x5402
 *   | 0x180a
 * )}
 */

/**
 * @typedef AddressType
 * @type {object}
 * @property {AddressName} name
 * @property {string} originalName
 * @property {AddressValue} value
 * @property {DataType} readCommandDataType
 * @property {DataType} readResponseDataType
 * @property {DataType} writeCommandDataType
 * @property {DataType} writeResponseDataType
 */

/**
 * @typedef AddressTypeArray
 * @type {Array<AddressType>}
 */

/**
 * @typedef AddressTypeMap
 * @type {Map<AddressName | AddressValue, AddressType>}
 */

/**
 * @typedef Addresses
 * @type {object}
 * @property {(value: AddressName | AddressValue) => AddressType} find
 */

///////////////////////////////////////////////////////////////////////////////
// DataType
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef DataType
 * @property {number} length
 * @property {FieldTypeArray} fields
 */

///////////////////////////////////////////////////////////////////////////////
// FieldType
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef FieldName
 * @type {string}
 */

/**
 * @typedef FieldType
 * @type {object}
 * @property {number} begin
 * @property {number} end
 * @property {FormatName} format
 * @property {FieldName} name
 * @property {string} originalName
 */

/**
 * @typedef FieldTypeArray
 * @type {Array<FieldType>}
 */

///////////////////////////////////////////////////////////////////////////////
// Formats
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef FormatName
 * @type {(
 *     'SInt16'
 *   | 'SInt32'
 *   | 'UInt8'
 *   | 'UInt16'
 *   | 'UInt32'
 *   | 'UInt64'
 *   | 'Utf8s'
 * )}
 */

/**
 * @typedef FormatType
 * @type {object}
 * @property {FormatName} name
 * @property {(buffer: Buffer, begin: number, end: number) => (number | string | bigint)} read
 * @property {(buffer: Buffer, begin: number, end: number, value: (number | string | bigint)) => number} write
 * @property {string} primitive
 */

/**
 * @typedef FormatTypeArray
 * @type {Array<FormatType>}
 */

/**
 * @typedef FormatTypeMap
 * @type {Map<FormatName, FormatType>}
 */

/**
 * @typedef Formats
 * @type {object}
 * @property {(value: FormatName) => FormatType} find
 */

///////////////////////////////////////////////////////////////////////////////
// Units
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef UnitName
 * @type {(
 *     'temperature'
 *   | 'relativeHumidity'
 *   | 'ambientLight'
 *   | 'barometricPressure'
 *   | 'soundNoise'
 *   | 'etvoc'
 *   | 'eco2'
 *   | 'discomfortIndex'
 *   | 'heatStroke'
 *   | 'acceleration'
 *   | 'siValue'
 *   | 'pga'
 *   | 'seismicIntensity'
 *   | 'siValueCalculationAxis'
 *   | 'vibrationInformation'
 *   | 'eventEnableDisable'
 * )}
 */

/**
 * @typedef UnitType
 * @type {object}
 * @property {UnitName} name
 * @property {(value: any) => any} encode
 * @property {(value: any) => any} decode
 */

/**
 * @typedef UnitTypeArray
 * @type {Array<UnitType>}
 */

/**
 * @typedef UnitTypeMap
 * @type {Map<UnitName, UnitType>}
 */

/**
 * @typedef Units
 * @type {object}
 * @property {(value: UnitName) => UnitType} find
 */

///////////////////////////////////////////////////////////////////////////////
// Channel
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef ChannelOptions
 * @type {object}
 * @property {string} path
 */

/**
 * @typedef Channel
 * @type {object}
 * @property {() => Stream} input
 * @property {() => Stream} output
 * @property {() => Promise<void>} open
 * @property {() => Promise<void>} close
 */

///////////////////////////////////////////////////////////////////////////////
// Reader
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Reader
 * @type {object}
 * @property {() => Stream} input
 * @property {() => Stream} output
 * @property {() => void} reset
 */

///////////////////////////////////////////////////////////////////////////////
// Writer
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef Writer
 * @type {object}
 * @property {() => Stream} input
 * @property {() => Stream} output
 */

///////////////////////////////////////////////////////////////////////////////
// Queue
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef CommandPayload
 * @type {object}
 * @property {CommandName} command
 * @property {AddressName} address
 * @property {any} data
 */

/**
 * @typedef ResponsePayload
 * @type {object}
 * @property {CommandName} command
 * @property {AddressName} address
 * @property {any} data
 */

/**
 * @typedef Task
 * @type {object}
 * @property {CommandPayload} commandPayload
 * @property {number} timeout
 * @property {number} timeoutTimer
 * @property {any} error
 * @property {ResponsePayload} responsePayload
 * @property {(value: ResponsePayload) => void} resolve
 * @property {(reason: any) => void} reject
 * @property {Promise} promise
 */

/**
 * @typedef Queue
 * @type {object}
 * @property {() => Stream} input
 * @property {() => Stream} output
 * @property {(input: CommandPayload) => Promise<ResponsePayload>} enqueue
 */

///////////////////////////////////////////////////////////////////////////////
// Controller
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef ControllerOptions
 * @type {object}
 * @property {string} path
 */

///////////////////////////////////////////////////////////////////////////////
// Field
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef SInt16
 * @type {number}
 */

/**
 * @typedef SInt32
 * @type {number}
 */

/**
* @typedef UInt8
* @type {number}
*/

/**
* @typedef UInt16
* @type {number}
*/

/**
* @typedef UInt32
* @type {number}
*/

/**
* @typedef UInt64
* @type {number}
*/

/**
* @typedef Utf8s
* @type {string}
*/

///////////////////////////////////////////////////////////////////////////////
// Data
///////////////////////////////////////////////////////////////////////////////

/**
 * @typedef MemoryDataLongReadCommandData
 * @type {object}
 * @property {UInt32} memoryIndexStart
 * - Byte: 0-3
 * - Field: Memory index (Start)
 * - Format: UInt32
 * @property {UInt32} memoryIndexEnd
 * - Byte: 4-7
 * - Field: Memory index (End)
 * - Format: UInt32
 */

/**
 * @typedef MemoryDataLongReadResponseData
 * @type {object}
 * @property {UInt32} memoryIndex
 * - Byte: 0-3
 * - Field: Memory index
 * - Format: UInt32
 * @property {UInt64} timeCounter
 * - Byte: 4-11
 * - Field: Time counter
 * - Format: UInt64
 * @property {SInt16} temperature
 * - Byte: 12-13
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 14-15
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 16-17
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 18-21
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 22-23
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 24-25
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 26-27
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 28-29
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 30-31
 * - Field: Heat stroke
 * - Format: SInt16
 * @property {UInt8} vibrationInformation
 * - Byte: 32
 * - Field: Vibration information
 * - Format: UInt8
 * @property {UInt16} siValue
 * - Byte: 33-34
 * - Field: SI value
 * - Format: UInt16
 * @property {UInt16} pga
 * - Byte: 35-36
 * - Field: PGA
 * - Format: UInt16
 * @property {UInt16} seismicIntensity
 * - Byte: 37-38
 * - Field: Seismic intensity
 * - Format: UInt16
 * @property {UInt16} temperatureFlag
 * - Byte: 39-40
 * - Field: Temperature flag
 * - Format: UInt16
 * @property {UInt16} relativeHumidityFlag
 * - Byte: 41-42
 * - Field: Relative humidity flag
 * - Format: UInt16
 * @property {UInt16} ambientLightFlag
 * - Byte: 43-44
 * - Field: Ambient light flag
 * - Format: UInt16
 * @property {UInt16} barometricPressureFlag
 * - Byte: 45-46
 * - Field: Barometric pressure flag
 * - Format: UInt16
 * @property {UInt16} soundNoiseFlag
 * - Byte: 47-48
 * - Field: Sound noise flag
 * - Format: UInt16
 * @property {UInt16} etvocFlag
 * - Byte: 49-50
 * - Field: eTVOC flag
 * - Format: UInt16
 * @property {UInt16} eco2Flag
 * - Byte: 51-52
 * - Field: eCO2 flag
 * - Format: UInt16
 * @property {UInt16} discomfortIndexFlag
 * - Byte: 53-54
 * - Field: Discomfort index flag
 * - Format: UInt16
 * @property {UInt16} heatStrokeFlag
 * - Byte: 55-56
 * - Field: Heat stroke flag
 * - Format: UInt16
 * @property {UInt8} siValueFlag
 * - Byte: 57
 * - Field: SI value flag
 * - Format: UInt8
 * @property {UInt8} pgaFlag
 * - Byte: 58
 * - Field: PGA flag
 * - Format: UInt8
 * @property {UInt8} seismicIntensityFlag
 * - Byte: 59
 * - Field: Seismic intensity flag
 * - Format: UInt8
 */

/**
 * @typedef MemoryDataShortReadCommandData
 * @type {object}
 * @property {UInt32} memoryIndexStart
 * - Byte: 0-3
 * - Field: Memory index (Start)
 * - Format: UInt32
 * @property {UInt32} memoryIndexEnd
 * - Byte: 4-7
 * - Field: Memory index (End)
 * - Format: UInt32
 */

/**
 * @typedef MemoryDataShortReadResponseData
 * @type {object}
 * @property {UInt32} memoryIndex
 * - Byte: 0-3
 * - Field: Memory index
 * - Format: UInt32
 * @property {UInt64} timeCounter
 * - Byte: 4-11
 * - Field: Time counter
 * - Format: UInt64
 * @property {SInt16} temperature
 * - Byte: 12-13
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 14-15
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 16-17
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 18-21
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 22-23
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 24-25
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 26-27
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 28-29
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 30-31
 * - Field: Heat stroke
 * - Format: SInt16
 */

/**
 * @typedef LatestDataLongReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestDataLongReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {SInt16} temperature
 * - Byte: 1-2
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 3-4
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 5-6
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 7-10
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 11-12
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 13-14
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 15-16
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 17-18
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 19-20
 * - Field: Heat stroke
 * - Format: SInt16
 * @property {UInt8} vibrationInformation
 * - Byte: 21
 * - Field: Vibration information
 * - Format: UInt8
 * @property {UInt16} siValue
 * - Byte: 22-23
 * - Field: SI value
 * - Format: UInt16
 * @property {UInt16} pga
 * - Byte: 24-25
 * - Field: PGA
 * - Format: UInt16
 * @property {UInt16} seismicIntensity
 * - Byte: 26-27
 * - Field: Seismic intensity
 * - Format: UInt16
 * @property {UInt16} temperatureFlag
 * - Byte: 28-29
 * - Field: Temperature flag
 * - Format: UInt16
 * @property {UInt16} relativeHumidityFlag
 * - Byte: 30-31
 * - Field: Relative humidity flag
 * - Format: UInt16
 * @property {UInt16} ambientLightFlag
 * - Byte: 32-33
 * - Field: Ambient light flag
 * - Format: UInt16
 * @property {UInt16} barometricPressureFlag
 * - Byte: 34-35
 * - Field: Barometric pressure flag
 * - Format: UInt16
 * @property {UInt16} soundNoiseFlag
 * - Byte: 36-37
 * - Field: Sound noise flag
 * - Format: UInt16
 * @property {UInt16} etvocFlag
 * - Byte: 38-39
 * - Field: eTVOC flag
 * - Format: UInt16
 * @property {UInt16} eco2Flag
 * - Byte: 40-41
 * - Field: eCO2 flag
 * - Format: UInt16
 * @property {UInt16} discomfortIndexFlag
 * - Byte: 42-43
 * - Field: Discomfort index flag
 * - Format: UInt16
 * @property {UInt16} heatStrokeFlag
 * - Byte: 44-45
 * - Field: Heat stroke flag
 * - Format: UInt16
 * @property {UInt8} siValueFlag
 * - Byte: 46
 * - Field: SI value flag
 * - Format: UInt8
 * @property {UInt8} pgaFlag
 * - Byte: 47
 * - Field: PGA flag
 * - Format: UInt8
 * @property {UInt8} seismicIntensityFlag
 * - Byte: 48
 * - Field: Seismic intensity flag
 * - Format: UInt8
 */

/**
 * @typedef LatestDataShortReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestDataShortReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {SInt16} temperature
 * - Byte: 1-2
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 3-4
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 5-6
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 7-10
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 11-12
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 13-14
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 15-16
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 17-18
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 19-20
 * - Field: Heat stroke
 * - Format: SInt16
 */

/**
 * @typedef AccelerationMemoryDataHeaderReadCommandData
 * @type {object}
 * @property {UInt8} accelerationDataType
 * - Byte: 0
 * - Field: Acceleration data type
 * - Format: UInt8
 * @property {UInt8} requestAccelerationMemoryIndex
 * - Byte: 1
 * - Field: Request acceleration memory index
 * - Format: UInt8
 */

/**
 * @typedef AccelerationMemoryDataHeaderReadResponseData
 * @type {object}
 * @property {UInt16} storageTotalPage
 * - Byte: 0-1
 * - Field: Storage total page
 * - Format: UInt16
 * @property {UInt32} earthquakesOrVibrationCount
 * - Byte: 2-5
 * - Field: Earthquakes or vibration count
 * - Format: UInt32
 * @property {UInt64} timeCounter
 * - Byte: 6-13
 * - Field: Time counter
 * - Format: UInt64
 * @property {UInt8} earthquakeFlag
 * - Byte: 14
 * - Field: Earthquake flag
 * - Format: UInt8
 * @property {UInt8} siValueCalculationAxis
 * - Byte: 15
 * - Field: SI value calculation axis
 * - Format: UInt8
 * @property {UInt8} reservedForFutureUse
 * - Byte: 16-17
 * - Field: Reserved for Future Use
 * - Format: UInt8
 * @property {UInt16} pageNumber
 * - Byte: 18-19
 * - Field: Page number
 * - Format: UInt16
 * @property {UInt16} siValue
 * - Byte: 20-21
 * - Field: SI value
 * - Format: UInt16
 * @property {UInt16} pga
 * - Byte: 22-23
 * - Field: PGA
 * - Format: UInt16
 * @property {UInt16} seismicIntensity
 * - Byte: 24-25
 * - Field: Seismic intensity
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationXAxis
 * - Byte: 26-27
 * - Field: Maximum acceleration (X-axis)
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationYAxis
 * - Byte: 28-29
 * - Field: Maximum acceleration (Y-axis)
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationZAxis
 * - Byte: 30-31
 * - Field: Maximum acceleration (Z-axis)
 * - Format: UInt16
 * @property {SInt16} temperature
 * - Byte: 32-33
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 34-35
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 36-37
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 38-41
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 42-43
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 44-45
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 46-47
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 48-49
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 50-51
 * - Field: Heat stroke
 * - Format: SInt16
 * @property {UInt8} reservedForFutureUse
 * - Byte: 52
 * - Field: Reserved for Future Use
 * - Format: UInt8
 * @property {UInt8} reservedForFutureUse
 * - Byte: 53
 * - Field: Reserved for Future Use
 * - Format: UInt8
 * @property {SInt16} accelerationOffsetXAxis
 * - Byte: 54-55
 * - Field: Acceleration offset (X-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationOffsetYAxis
 * - Byte: 56-57
 * - Field: Acceleration offset (Y-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationOffsetZAxis
 * - Byte: 58-59
 * - Field: Acceleration offset (Z-axis)
 * - Format: SInt16
 */

/**
 * @typedef AccelerationMemoryDataDataReadCommandData
 * @type {object}
 * @property {UInt8} accelerationDataType
 * - Byte: 0
 * - Field: Acceleration data type
 * - Format: UInt8
 * @property {UInt8} requestAccelerationMemoryIndex
 * - Byte: 1
 * - Field: Request acceleration memory index
 * - Format: UInt8
 * @property {UInt16} requestPageStart
 * - Byte: 2-3
 * - Field: Request page (Start)
 * - Format: UInt16
 * @property {UInt16} requestPageEnd
 * - Byte: 4-5
 * - Field: Request page (End)
 * - Format: UInt16
 */

/**
 * @typedef AccelerationMemoryDataDataReadResponseData
 * @type {object}
 * @property {UInt16} pageNumber
 * - Byte: 0-1
 * - Field: Page number
 * - Format: UInt16
 * @property {UInt16} siValue
 * - Byte: 2-3
 * - Field: SI value
 * - Format: UInt16
 * @property {UInt16} pga
 * - Byte: 4-5
 * - Field: PGA
 * - Format: UInt16
 * @property {UInt16} seismicIntensity
 * - Byte: 6-7
 * - Field: Seismic intensity
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationXAxis
 * - Byte: 8-9
 * - Field: Maximum acceleration (X-axis)
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationYAxis
 * - Byte: 10-11
 * - Field: Maximum acceleration (Y-axis)
 * - Format: UInt16
 * @property {UInt16} maximumAccelerationZAxis
 * - Byte: 12-13
 * - Field: Maximum acceleration (Z-axis)
 * - Format: UInt16
 * @property {SInt16} temperature
 * - Byte: 14-15
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 16-17
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 18-19
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 20-21
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 22-23
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 24-25
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 26-27
 * - Field: eCO2
 * - Format: SInt16
 * @property {SInt16} discomfortIndex
 * - Byte: 28-29
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 30-31
 * - Field: Heat stroke
 * - Format: SInt16
 * @property {UInt8} reservedForFutureUse
 * - Byte: 32-33
 * - Field: Reserved for Future Use
 * - Format: UInt8
 * @property {UInt8} reservedForFutureUse
 * - Byte: 34-35
 * - Field: Reserved for Future Use
 * - Format: UInt8
 * @property {SInt16} accelerationXAxis1
 * - Byte: 36-37
 * - Field: Acceleration (X-axis) 1
 * - Format: SInt16
 * @property {SInt16} accelerationYAxis1
 * - Byte: 38-39
 * - Field: Acceleration (Y-axis) 1
 * - Format: SInt16
 * @property {SInt16} accelerationZAxis1
 * - Byte: 40-41
 * - Field: Acceleration (Z-axis) 1
 * - Format: SInt16
 * @property {SInt16} accelerationXAxis32
 * - Byte: 222-223
 * - Field: Acceleration (X-axis) 32
 * - Format: SInt16
 * @property {SInt16} accelerationYAxis32
 * - Byte: 224-225
 * - Field: Acceleration (Y-axis) 32
 * - Format: SInt16
 * @property {SInt16} accelerationZAxis32
 * - Byte: 226-227
 * - Field: Acceleration (Z-axis) 32
 * - Format: SInt16
 */

/**
 * @typedef LatestMemoryInformationReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestMemoryInformationReadResponseData
 * @type {object}
 * @property {UInt32} memoryIndexLatest
 * - Byte: 0-3
 * - Field: Memory index (Latest)
 * - Format: UInt32
 * @property {UInt32} memoryIndexLast
 * - Byte: 4-7
 * - Field: Memory index (Last)
 * - Format: UInt32
 */

/**
 * @typedef LatestSensingDataReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestSensingDataReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {SInt16} temperature
 * - Byte: 1-2
 * - Field: Temperature
 * - Format: SInt16
 * @property {SInt16} relativeHumidity
 * - Byte: 3-4
 * - Field: Relative humidity
 * - Format: SInt16
 * @property {SInt16} ambientLight
 * - Byte: 5-6
 * - Field: Ambient light
 * - Format: SInt16
 * @property {SInt32} barometricPressure
 * - Byte: 7-10
 * - Field: Barometric pressure
 * - Format: SInt32
 * @property {SInt16} soundNoise
 * - Byte: 11-12
 * - Field: Sound noise
 * - Format: SInt16
 * @property {SInt16} etvoc
 * - Byte: 13-14
 * - Field: eTVOC
 * - Format: SInt16
 * @property {SInt16} eco2
 * - Byte: 15-16
 * - Field: eCO2
 * - Format: SInt16
 */

/**
 * @typedef LatestCalculationDataReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestCalculationDataReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {SInt16} discomfortIndex
 * - Byte: 1-2
 * - Field: Discomfort index
 * - Format: SInt16
 * @property {SInt16} heatStroke
 * - Byte: 3-4
 * - Field: Heat stroke
 * - Format: SInt16
 * @property {UInt8} vibrationInformation
 * - Byte: 5
 * - Field: Vibration information
 * - Format: UInt8
 * @property {UInt16} siValue
 * - Byte: 6-7
 * - Field: SI value
 * - Format: UInt16
 * @property {UInt16} pga
 * - Byte: 8-9
 * - Field: PGA
 * - Format: UInt16
 * @property {UInt16} seismicIntensity
 * - Byte: 10-11
 * - Field: Seismic intensity
 * - Format: UInt16
 * @property {SInt16} accelerationXAxis
 * - Byte: 12-13
 * - Field: Acceleration (X-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationYAxis
 * - Byte: 14-15
 * - Field: Acceleration (Y-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationZAxis
 * - Byte: 16-17
 * - Field: Acceleration (Z-axis)
 * - Format: SInt16
 */

/**
 * @typedef LatestSensingFlagReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestSensingFlagReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {UInt16} temperatureFlag
 * - Byte: 1-2
 * - Field: Temperature flag
 * - Format: UInt16
 * @property {UInt16} relativeHumidityFlag
 * - Byte: 3-4
 * - Field: Relative humidity flag
 * - Format: UInt16
 * @property {UInt16} ambientLightFlag
 * - Byte: 5-6
 * - Field: Ambient light flag
 * - Format: UInt16
 * @property {UInt16} barometricPressureFlag
 * - Byte: 7-10
 * - Field: Barometric pressure flag
 * - Format: UInt16
 * @property {UInt16} soundNoiseFlag
 * - Byte: 11-12
 * - Field: Sound noise flag
 * - Format: UInt16
 * @property {UInt16} etvocFlag
 * - Byte: 13-14
 * - Field: eTVOC flag
 * - Format: UInt16
 * @property {UInt16} eco2Flag
 * - Byte: 15-16
 * - Field: eCO2 flag
 * - Format: UInt16
 */

/**
 * @typedef LatestCalculationFlagReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestCalculationFlagReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {UInt16} discomfortIndexFlag
 * - Byte: 1-2
 * - Field: Discomfort index flag
 * - Format: UInt16
 * @property {UInt16} heatStrokeFlag
 * - Byte: 3-4
 * - Field: Heat stroke flag
 * - Format: UInt16
 * @property {UInt8} siValueFlag
 * - Byte: 5
 * - Field: SI value flag
 * - Format: UInt8
 * @property {UInt8} pgaFlag
 * - Byte: 6
 * - Field: PGA flag
 * - Format: UInt8
 * @property {UInt8} seismicIntensityFlag
 * - Byte: 7
 * - Field: Seismic intensity flag
 * - Format: UInt8
 */

/**
 * @typedef LatestAccelerationStatusReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestAccelerationStatusReadResponseData
 * @type {object}
 * @property {UInt8} sequenceNumber
 * - Byte: 0
 * - Field: Sequence number
 * - Format: UInt8
 * @property {UInt8} vibrationInformation
 * - Byte: 1
 * - Field: Vibration information
 * - Format: UInt8
 * @property {SInt16} maximumAccelerationXAxis
 * - Byte: 2-3
 * - Field: Maximum acceleration (X-axis)
 * - Format: SInt16
 * @property {SInt16} maximumAccelerationYAxis
 * - Byte: 4-5
 * - Field: Maximum acceleration (Y-axis)
 * - Format: SInt16
 * @property {SInt16} maximumAccelerationZAxis
 * - Byte: 6-7
 * - Field: Maximum acceleration (Z-axis)
 * - Format: SInt16
 * @property {UInt8} siValueCalculationAxis
 * - Byte: 8
 * - Field: SI value calculation axis
 * - Format: UInt8
 * @property {SInt16} accelerationOffsetXAxis
 * - Byte: 9-10
 * - Field: Acceleration offset (X-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationOffsetYAxis
 * - Byte: 11-12
 * - Field: Acceleration offset (Y-axis)
 * - Format: SInt16
 * @property {SInt16} accelerationOffsetZAxis
 * - Byte: 13-14
 * - Field: Acceleration offset (Z-axis)
 * - Format: SInt16
 */

/**
 * @typedef VibrationCountReadCommandData
 * @type {object}
 */

/**
 * @typedef VibrationCountReadResponseData
 * @type {object}
 * @property {UInt32} earthquakeCount
 * - Byte: 0-3
 * - Field: Earthquake count
 * - Format: UInt32
 * @property {UInt32} vibrationCount
 * - Byte: 4-7
 * - Field: Vibration count
 * - Format: UInt32
 */

/**
 * @typedef LedSettingNormalStateReadCommandData
 * @type {object}
 */

/**
 * @typedef LedSettingNormalStateReadResponseData
 * @type {object}
 * @property {UInt16} displayRuleNormalState
 * - Byte: 0-1
 * - Field: Display rule (normal state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingNormalStateWriteCommandData
 * @type {object}
 * @property {UInt16} displayRuleNormalState
 * - Byte: 0-1
 * - Field: Display rule (normal state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingNormalStateWriteResponseData
 * @type {object}
 * @property {UInt16} displayRuleNormalState
 * - Byte: 0-1
 * - Field: Display rule (normal state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingEventStateReadCommandData
 * @type {object}
 */

/**
 * @typedef LedSettingEventStateReadResponseData
 * @type {object}
 * @property {UInt16} displayRuleEventState
 * - Byte: 0-1
 * - Field: Display rule (event state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingEventStateWriteCommandData
 * @type {object}
 * @property {UInt16} displayRuleEventState
 * - Byte: 0-1
 * - Field: Display rule (event state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingEventStateWriteResponseData
 * @type {object}
 * @property {UInt16} displayRuleEventState
 * - Byte: 0-1
 * - Field: Display rule (event state)
 * - Format: UInt16
 * @property {UInt8} intensityOfLedRed
 * - Byte: 2
 * - Field: Intensity of LED (Red)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedGreen
 * - Byte: 3
 * - Field: Intensity of LED (Green)
 * - Format: UInt8
 * @property {UInt8} intensityOfLedBlue
 * - Byte: 4
 * - Field: Intensity of LED (Blue)
 * - Format: UInt8
 */

/**
 * @typedef LedSettingOperationReadCommandData
 * @type {object}
 */

/**
 * @typedef LedSettingOperationReadResponseData
 * @type {object}
 * @property {UInt8} startUp
 * - Byte: 0
 * - Field: Start up
 * - Format: UInt8
 * @property {UInt8} error
 * - Byte: 1
 * - Field: Error
 * - Format: UInt8
 * @property {UInt8} connection
 * - Byte: 2
 * - Field: Channel
 * - Format: UInt8
 */

/**
 * @typedef LedSettingOperationWriteCommandData
 * @type {object}
 * @property {UInt8} startUp
 * - Byte: 0
 * - Field: Start up
 * - Format: UInt8
 * @property {UInt8} error
 * - Byte: 1
 * - Field: Error
 * - Format: UInt8
 * @property {UInt8} connection
 * - Byte: 2
 * - Field: Channel
 * - Format: UInt8
 */

/**
 * @typedef LedSettingOperationWriteResponseData
 * @type {object}
 * @property {UInt8} startUp
 * - Byte: 0
 * - Field: Start up
 * - Format: UInt8
 * @property {UInt8} error
 * - Byte: 1
 * - Field: Error
 * - Format: UInt8
 * @property {UInt8} connection
 * - Byte: 2
 * - Field: Channel
 * - Format: UInt8
 */

/**
 * @typedef InstallationOffsetReadCommandData
 * @type {object}
 */

/**
 * @typedef InstallationOffsetReadResponseData
 * @type {object}
 * @property {UInt8} installationOffsetEnableDisable
 * - Byte: 0
 * - Field: Installation offset enable/disable
 * - Format: UInt8
 * @property {SInt16} temperatureInstallationOffset
 * - Byte: 1-2
 * - Field: Temperature installation offset
 * - Format: SInt16
 * @property {SInt16} relativeHumidityInstallationOffset
 * - Byte: 3-4
 * - Field: Relative humidity installation offset
 * - Format: SInt16
 * @property {SInt16} ambientLightInstallationGain
 * - Byte: 5-6
 * - Field: Ambient light installation gain
 * - Format: SInt16
 * @property {SInt32} barometricPressureInstallationOffset
 * - Byte: 7-10
 * - Field: Barometric pressure installation offset
 * - Format: SInt32
 * @property {SInt16} soundNoiseInstallationOffset
 * - Byte: 11-12
 * - Field: Sound noise installation offset
 * - Format: SInt16
 */

/**
 * @typedef InstallationOffsetWriteCommandData
 * @type {object}
 * @property {UInt8} installationOffsetEnableDisable
 * - Byte: 0
 * - Field: Installation offset enable/disable
 * - Format: UInt8
 * @property {SInt16} temperatureInstallationOffset
 * - Byte: 1-2
 * - Field: Temperature installation offset
 * - Format: SInt16
 * @property {SInt16} relativeHumidityInstallationOffset
 * - Byte: 3-4
 * - Field: Relative humidity installation offset
 * - Format: SInt16
 * @property {SInt16} ambientLightInstallationGain
 * - Byte: 5-6
 * - Field: Ambient light installation gain
 * - Format: SInt16
 * @property {SInt32} barometricPressureInstallationOffset
 * - Byte: 7-10
 * - Field: Barometric pressure installation offset
 * - Format: SInt32
 * @property {SInt16} soundNoiseInstallationOffset
 * - Byte: 11-12
 * - Field: Sound noise installation offset
 * - Format: SInt16
 */

/**
 * @typedef InstallationOffsetWriteResponseData
 * @type {object}
 * @property {UInt8} installationOffsetEnableDisable
 * - Byte: 0
 * - Field: Installation offset enable/disable
 * - Format: UInt8
 * @property {SInt16} temperatureInstallationOffset
 * - Byte: 1-2
 * - Field: Temperature installation offset
 * - Format: SInt16
 * @property {SInt16} relativeHumidityInstallationOffset
 * - Byte: 3-4
 * - Field: Relative humidity installation offset
 * - Format: SInt16
 * @property {SInt16} ambientLightInstallationGain
 * - Byte: 5-6
 * - Field: Ambient light installation gain
 * - Format: SInt16
 * @property {SInt32} barometricPressureInstallationOffset
 * - Byte: 7-10
 * - Field: Barometric pressure installation offset
 * - Format: SInt32
 * @property {SInt16} soundNoiseInstallationOffset
 * - Byte: 11-12
 * - Field: Sound noise installation offset
 * - Format: SInt16
 */

/**
 * @typedef AdvertiseSettingReadCommandData
 * @type {object}
 */

/**
 * @typedef AdvertiseSettingReadResponseData
 * @type {object}
 * @property {UInt16} advertisingInterval
 * - Byte: 0-1
 * - Field: Advertising interval
 * - Format: UInt16
 * @property {UInt8} advertisingMode
 * - Byte: 2
 * - Field: Advertising mode
 * - Format: UInt8
 */

/**
 * @typedef AdvertiseSettingWriteCommandData
 * @type {object}
 * @property {UInt16} advertisingInterval
 * - Byte: 0-1
 * - Field: Advertising interval
 * - Format: UInt16
 * @property {UInt8} advertisingMode
 * - Byte: 2
 * - Field: Advertising mode
 * - Format: UInt8
 */

/**
 * @typedef AdvertiseSettingWriteResponseData
 * @type {object}
 * @property {UInt16} advertisingInterval
 * - Byte: 0-1
 * - Field: Advertising interval
 * - Format: UInt16
 * @property {UInt8} advertisingMode
 * - Byte: 2
 * - Field: Advertising mode
 * - Format: UInt8
 */

/**
 * @typedef MemoryResetWriteCommandData
 * @type {object}
 * @property {UInt8} memoryReset
 * - Byte: 0
 * - Field: Memory reset
 * - Format: UInt8
 */

/**
 * @typedef MemoryResetWriteResponseData
 * @type {object}
 * @property {UInt8} memoryReset
 * - Byte: 0
 * - Field: Memory reset
 * - Format: UInt8
 */

/**
 * @typedef ModeChangeReadCommandData
 * @type {object}
 */

/**
 * @typedef ModeChangeReadResponseData
 * @type {object}
 * @property {UInt8} modeChange
 * - Byte: 0
 * - Field: Mode change
 * - Format: UInt8
 */

/**
 * @typedef ModeChangeWriteCommandData
 * @type {object}
 * @property {UInt8} modeChange
 * - Byte: 0
 * - Field: Mode change
 * - Format: UInt8
 */

/**
 * @typedef ModeChangeWriteResponseData
 * @type {object}
 * @property {UInt8} modeChange
 * - Byte: 0
 * - Field: Mode change
 * - Format: UInt8
 */

/**
 * @typedef AccelerationLoggerControlWriteCommandData
 * @type {object}
 * @property {UInt8} loggerCondition
 * - Byte: 0
 * - Field: Logger condition
 * - Format: UInt8
 * @property {UInt8} rangeOfDetection
 * - Byte: 1
 * - Field: Range of detection
 * - Format: UInt8
 * @property {UInt8} odrSetting
 * - Byte: 2
 * - Field: ODR setting
 * - Format: UInt8
 * @property {UInt16} startPage
 * - Byte: 3-4
 * - Field: Start page
 * - Format: UInt16
 * @property {UInt16} endPage
 * - Byte: 5-6
 * - Field: End page
 * - Format: UInt16
 */

/**
 * @typedef AccelerationLoggerControlWriteResponseData
 * @type {object}
 * @property {UInt8} loggerCondition
 * - Byte: 0
 * - Field: Logger condition
 * - Format: UInt8
 * @property {UInt8} rangeOfDetection
 * - Byte: 1
 * - Field: Range of detection
 * - Format: UInt8
 * @property {UInt8} odrSetting
 * - Byte: 2
 * - Field: ODR setting
 * - Format: UInt8
 * @property {UInt16} startPage
 * - Byte: 3-4
 * - Field: Start page
 * - Format: UInt16
 * @property {UInt16} endPage
 * - Byte: 5-6
 * - Field: End page
 * - Format: UInt16
 */

/**
 * @typedef AccelerationLoggerStatusReadCommandData
 * @type {object}
 */

/**
 * @typedef AccelerationLoggerStatusReadResponseData
 * @type {object}
 * @property {UInt8} loggerStatus
 * - Byte: 0
 * - Field: Logger status
 * - Format: UInt8
 * @property {UInt16} runningPage
 * - Byte: 1-2
 * - Field: Running page
 * - Format: UInt16
 */

/**
 * @typedef AccelerationLoggerStatusWriteCommandData
 * @type {object}
 * @property {UInt8} loggerStatus
 * - Byte: 0
 * - Field: Logger status
 * - Format: UInt8
 * @property {UInt16} runningPage
 * - Byte: 1-2
 * - Field: Running page
 * - Format: UInt16
 */

/**
 * @typedef AccelerationLoggerStatusWriteResponseData
 * @type {object}
 * @property {UInt8} loggerStatus
 * - Byte: 0
 * - Field: Logger status
 * - Format: UInt8
 * @property {UInt16} runningPage
 * - Byte: 1-2
 * - Field: Running page
 * - Format: UInt16
 */

/**
 * @typedef LatestTimeCounterReadCommandData
 * @type {object}
 */

/**
 * @typedef LatestTimeCounterReadResponseData
 * @type {object}
 * @property {UInt64} timeCounter
 * - Byte: 0-7
 * - Field: Time counter
 * - Format: UInt64
 */

/**
 * @typedef TimeSettingReadCommandData
 * @type {object}
 */

/**
 * @typedef TimeSettingReadResponseData
 * @type {object}
 * @property {UInt64} timeSetting
 * - Byte: 0-7
 * - Field: Time setting
 * - Format: UInt64
 */

/**
 * @typedef TimeSettingWriteCommandData
 * @type {object}
 * @property {UInt64} timeSetting
 * - Byte: 0-7
 * - Field: Time setting
 * - Format: UInt64
 */

/**
 * @typedef TimeSettingWriteResponseData
 * @type {object}
 * @property {UInt64} timeSetting
 * - Byte: 0-7
 * - Field: Time setting
 * - Format: UInt64
 */

/**
 * @typedef MemoryStorageIntervalReadCommandData
 * @type {object}
 */

/**
 * @typedef MemoryStorageIntervalReadResponseData
 * @type {object}
 * @property {UInt16} memoryStorageInterval
 * - Byte: 0-1
 * - Field: Memory storage interval
 * - Format: UInt16
 */

/**
 * @typedef MemoryStorageIntervalWriteCommandData
 * @type {object}
 * @property {UInt16} memoryStorageInterval
 * - Byte: 0-1
 * - Field: Memory storage interval
 * - Format: UInt16
 */

/**
 * @typedef MemoryStorageIntervalWriteResponseData
 * @type {object}
 * @property {UInt16} memoryStorageInterval
 * - Byte: 0-1
 * - Field: Memory storage interval
 * - Format: UInt16
 */

/**
 * @typedef EventPatternSensor1ReadCommandData
 * @type {object}
 */

/**
 * @typedef EventPatternSensor1ReadResponseData
 * @type {object}
 * @property {UInt16} eventEnableDisable
 * - Byte: 0-1
 * - Field: Event enable/disable
 * - Format: UInt16
 * @property {SInt16} simpleThresholdUpperLimit1
 * - Byte: 2-3
 * - Field: Simple threshold [upper limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdUpperLimit2
 * - Byte: 4-5
 * - Field: Simple threshold [upper limit] 2
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit1
 * - Byte: 6-7
 * - Field: Simple threshold [lower limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit2
 * - Byte: 8-9
 * - Field: Simple threshold [lower limit] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise1
 * - Byte: 10-11
 * - Field: Change threshold [rise] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise2
 * - Byte: 12-13
 * - Field: Change threshold [rise] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline1
 * - Byte: 14-15
 * - Field: Change threshold [decline] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline2
 * - Byte: 16-17
 * - Field: Change threshold [decline] 2
 * - Format: SInt16
 * @property {UInt8} reserveForFutureUse
 * - Byte: 18
 * - Field: Reserve for Future Use
 * - Format: UInt8
 * @property {UInt8} reserveForFutureUse
 * - Byte: 19
 * - Field: Reserve for Future Use
 * - Format: UInt8
 */

/**
 * @typedef EventPatternSensor1WriteCommandData
 * @type {object}
 * @property {UInt16} eventEnableDisable
 * - Byte: 0-1
 * - Field: Event enable/disable
 * - Format: UInt16
 * @property {SInt16} simpleThresholdUpperLimit1
 * - Byte: 2-3
 * - Field: Simple threshold [upper limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdUpperLimit2
 * - Byte: 4-5
 * - Field: Simple threshold [upper limit] 2
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit1
 * - Byte: 6-7
 * - Field: Simple threshold [lower limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit2
 * - Byte: 8-9
 * - Field: Simple threshold [lower limit] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise1
 * - Byte: 10-11
 * - Field: Change threshold [rise] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise2
 * - Byte: 12-13
 * - Field: Change threshold [rise] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline1
 * - Byte: 14-15
 * - Field: Change threshold [decline] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline2
 * - Byte: 16-17
 * - Field: Change threshold [decline] 2
 * - Format: SInt16
 * @property {UInt8} reserveForFutureUse
 * - Byte: 18
 * - Field: Reserve for Future Use
 * - Format: UInt8
 * @property {UInt8} reserveForFutureUse
 * - Byte: 19
 * - Field: Reserve for Future Use
 * - Format: UInt8
 */

/**
 * @typedef EventPatternSensor1WriteResponseData
 * @type {object}
 * @property {UInt16} eventEnableDisable
 * - Byte: 0-1
 * - Field: Event enable/disable
 * - Format: UInt16
 * @property {SInt16} simpleThresholdUpperLimit1
 * - Byte: 2-3
 * - Field: Simple threshold [upper limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdUpperLimit2
 * - Byte: 4-5
 * - Field: Simple threshold [upper limit] 2
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit1
 * - Byte: 6-7
 * - Field: Simple threshold [lower limit] 1
 * - Format: SInt16
 * @property {SInt16} simpleThresholdLowerLimit2
 * - Byte: 8-9
 * - Field: Simple threshold [lower limit] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise1
 * - Byte: 10-11
 * - Field: Change threshold [rise] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdRise2
 * - Byte: 12-13
 * - Field: Change threshold [rise] 2
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline1
 * - Byte: 14-15
 * - Field: Change threshold [decline] 1
 * - Format: SInt16
 * @property {SInt16} changeThresholdDecline2
 * - Byte: 16-17
 * - Field: Change threshold [decline] 2
 * - Format: SInt16
 * @property {UInt8} reserveForFutureUse
 * - Byte: 18
 * - Field: Reserve for Future Use
 * - Format: UInt8
 * @property {UInt8} reserveForFutureUse
 * - Byte: 19
 * - Field: Reserve for Future Use
 * - Format: UInt8
 */

/**
 * @typedef EventPatternSensor2ReadCommandData
 * @type {object}
 */

/**
 * @typedef EventPatternSensor2ReadResponseData
 * @type {object}
 * @property {SInt16} averageValueThresholdUpper
 * - Byte: 0-1
 * - Field: Average value threshold [upper]
 * - Format: SInt16
 * @property {SInt16} averageValueThresholdLower
 * - Byte: 2-3
 * - Field: Average value threshold [lower]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdUpper
 * - Byte: 4-5
 * - Field: Peak to Peak threshold [upper]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdLower
 * - Byte: 6-7
 * - Field: Peak to Peak threshold [lower]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdUpper
 * - Byte: 8-9
 * - Field: Interval difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdLower
 * - Byte: 10-11
 * - Field: Interval difference threshold [lower]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdUpper
 * - Byte: 12-13
 * - Field: Base difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdLower
 * - Byte: 14-15
 * - Field: Base difference threshold [lower]
 * - Format: SInt16
 * @property {UInt8} averageValueCount
 * - Byte: 16
 * - Field: Average value count
 * - Format: UInt8
 * @property {UInt8} peakToPeakCount
 * - Byte: 17
 * - Field: Peak to Peak count
 * - Format: UInt8
 * @property {UInt8} intervalDifferenceCount
 * - Byte: 18
 * - Field: Interval difference count
 * - Format: UInt8
 * @property {UInt8} baseDifferenceCount
 * - Byte: 19
 * - Field: Base difference count
 * - Format: UInt8
 */

/**
 * @typedef EventPatternSensor2WriteCommandData
 * @type {object}
 * @property {SInt16} averageValueThresholdUpper
 * - Byte: 0-1
 * - Field: Average value threshold [upper]
 * - Format: SInt16
 * @property {SInt16} averageValueThresholdLower
 * - Byte: 2-3
 * - Field: Average value threshold [lower]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdUpper
 * - Byte: 4-5
 * - Field: Peak to Peak threshold [upper]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdLower
 * - Byte: 6-7
 * - Field: Peak to Peak threshold [lower]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdUpper
 * - Byte: 8-9
 * - Field: Interval difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdLower
 * - Byte: 10-11
 * - Field: Interval difference threshold [lower]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdUpper
 * - Byte: 12-13
 * - Field: Base difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdLower
 * - Byte: 14-15
 * - Field: Base difference threshold [lower]
 * - Format: SInt16
 * @property {UInt8} averageValueCount
 * - Byte: 16
 * - Field: Average value count
 * - Format: UInt8
 * @property {UInt8} peakToPeakCount
 * - Byte: 17
 * - Field: Peak to Peak count
 * - Format: UInt8
 * @property {UInt8} intervalDifferenceCount
 * - Byte: 18
 * - Field: Interval difference count
 * - Format: UInt8
 * @property {UInt8} baseDifferenceCount
 * - Byte: 19
 * - Field: Base difference count
 * - Format: UInt8
 */

/**
 * @typedef EventPatternSensor2WriteResponseData
 * @type {object}
 * @property {SInt16} averageValueThresholdUpper
 * - Byte: 0-1
 * - Field: Average value threshold [upper]
 * - Format: SInt16
 * @property {SInt16} averageValueThresholdLower
 * - Byte: 2-3
 * - Field: Average value threshold [lower]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdUpper
 * - Byte: 4-5
 * - Field: Peak to Peak threshold [upper]
 * - Format: SInt16
 * @property {SInt16} peakToPeakThresholdLower
 * - Byte: 6-7
 * - Field: Peak to Peak threshold [lower]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdUpper
 * - Byte: 8-9
 * - Field: Interval difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} intervalDifferenceThresholdLower
 * - Byte: 10-11
 * - Field: Interval difference threshold [lower]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdUpper
 * - Byte: 12-13
 * - Field: Base difference threshold [upper]
 * - Format: SInt16
 * @property {SInt16} baseDifferenceThresholdLower
 * - Byte: 14-15
 * - Field: Base difference threshold [lower]
 * - Format: SInt16
 * @property {UInt8} averageValueCount
 * - Byte: 16
 * - Field: Average value count
 * - Format: UInt8
 * @property {UInt8} peakToPeakCount
 * - Byte: 17
 * - Field: Peak to Peak count
 * - Format: UInt8
 * @property {UInt8} intervalDifferenceCount
 * - Byte: 18
 * - Field: Interval difference count
 * - Format: UInt8
 * @property {UInt8} baseDifferenceCount
 * - Byte: 19
 * - Field: Base difference count
 * - Format: UInt8
 */

/**
 * @typedef EventPatternAccelerationReadCommandData
 * @type {object}
 */

/**
 * @typedef EventPatternAccelerationReadResponseData
 * @type {object}
 * @property {UInt8} eventEnableDisable
 * - Byte: 0
 * - Field: Event enable/disable
 * - Format: UInt8
 * @property {UInt16} simpleThresholdUpperLimit1
 * - Byte: 1-2
 * - Field: Simple threshold [upper limit] 1
 * - Format: UInt16
 * @property {UInt16} simpleThresholdUpperLimit2
 * - Byte: 3-4
 * - Field: Simple threshold [upper limit] 2
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise1
 * - Byte: 5-6
 * - Field: Change threshold [rise] 1
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise2
 * - Byte: 7-8
 * - Field: Change threshold [rise] 2
 * - Format: UInt16
 */

/**
 * @typedef EventPatternAccelerationWriteCommandData
 * @type {object}
 * @property {UInt8} eventEnableDisable
 * - Byte: 0
 * - Field: Event enable/disable
 * - Format: UInt8
 * @property {UInt16} simpleThresholdUpperLimit1
 * - Byte: 1-2
 * - Field: Simple threshold [upper limit] 1
 * - Format: UInt16
 * @property {UInt16} simpleThresholdUpperLimit2
 * - Byte: 3-4
 * - Field: Simple threshold [upper limit] 2
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise1
 * - Byte: 5-6
 * - Field: Change threshold [rise] 1
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise2
 * - Byte: 7-8
 * - Field: Change threshold [rise] 2
 * - Format: UInt16
 */

/**
 * @typedef EventPatternAccelerationWriteResponseData
 * @type {object}
 * @property {UInt8} eventEnableDisable
 * - Byte: 0
 * - Field: Event enable/disable
 * - Format: UInt8
 * @property {UInt16} simpleThresholdUpperLimit1
 * - Byte: 1-2
 * - Field: Simple threshold [upper limit] 1
 * - Format: UInt16
 * @property {UInt16} simpleThresholdUpperLimit2
 * - Byte: 3-4
 * - Field: Simple threshold [upper limit] 2
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise1
 * - Byte: 5-6
 * - Field: Change threshold [rise] 1
 * - Format: UInt16
 * @property {UInt16} changeThresholdRise2
 * - Byte: 7-8
 * - Field: Change threshold [rise] 2
 * - Format: UInt16
 */

/**
 * @typedef ErrorStatusReadCommandData
 * @type {object}
 */

/**
 * @typedef ErrorStatusReadResponseData
 * @type {object}
 * @property {UInt8} temperatureSensorError
 * - Byte: 0
 * - Field: Temperature sensor error
 * - Format: UInt8
 * @property {UInt8} relativeHumiditySensorError
 * - Byte: 1
 * - Field: Relative humidity sensor error
 * - Format: UInt8
 * @property {UInt8} ambientLightSensorError
 * - Byte: 2
 * - Field: Ambient light sensor error
 * - Format: UInt8
 * @property {UInt8} barometricPressureSensorError
 * - Byte: 3
 * - Field: Barometric pressure sensor error
 * - Format: UInt8
 * @property {UInt8} soundNoiseSensorError
 * - Byte: 4
 * - Field: Sound noise sensor error
 * - Format: UInt8
 * @property {UInt8} accelerationSensorError
 * - Byte: 5
 * - Field: Acceleration sensor error
 * - Format: UInt8
 * @property {UInt8} etvocSensorError
 * - Byte: 6
 * - Field: eTVOC sensor error
 * - Format: UInt8
 * @property {UInt8} eco2SensorError
 * - Byte: 7
 * - Field: eCO2 sensor error
 * - Format: UInt8
 * @property {UInt8} cpuError
 * - Byte: 8
 * - Field: CPU error
 * - Format: UInt8
 * @property {UInt8} reserveForFutureUse
 * - Byte: 9
 * - Field: Reserve for Future Use
 * - Format: UInt8
 * @property {UInt8} reserveForFutureUse
 * - Byte: 10
 * - Field: Reserve for Future Use
 * - Format: UInt8
 */

/**
 * @typedef MountingOrientationReadCommandData
 * @type {object}
 */

/**
 * @typedef MountingOrientationReadResponseData
 * @type {object}
 * @property {UInt8} mountingOrientation
 * - Byte: 0
 * - Field: Mounting orientation
 * - Format: UInt8
 */

/**
 * @typedef DeviceInformationReadCommandData
 * @type {object}
 */

/**
 * @typedef DeviceInformationReadResponseData
 * @type {object}
 * @property {Utf8s} modelNumber
 * - Byte: 0-9
 * - Field: Model number
 * - Format: Utf8s
 * @property {Utf8s} serialNumber
 * - Byte: 10-19
 * - Field: Serial number
 * - Format: Utf8s
 * @property {Utf8s} firmwareRevision
 * - Byte: 20-24
 * - Field: Firmware revision
 * - Format: Utf8s
 * @property {Utf8s} hardwareRevision
 * - Byte: 25-29
 * - Field: Hardware revision
 * - Format: Utf8s
 * @property {Utf8s} manufactureName
 * - Byte: 30-34
 * - Field: Manufacture name
 * - Format: Utf8s
 */
