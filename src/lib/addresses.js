/**
 * node-omron-2jcie-bu/src/lib/addresses.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Addresses } = (() => {

    /** @typedef AddressesConstructorOptions @type {import('../../types').AddressesConstructorOptions} */
    /** @typedef _Addresses @type {import('../../types')._Addresses} */
    /** @typedef Addresses @type {import('../../types').Addresses} */
    /** @typedef AddressesConstructor @type {import('../../types').AddressesConstructor} */

    /** @type {AddressesConstructor} */
    const Addresses = (options) => {

        /** @type {AddressesConstructorOptions} */
        const _options = options;

        /** @type {_Addresses} */
        const _it = {};
        _it.addressTypeArray = [
            {
                name: 'memoryDataLong',
                originalName: 'Memory data long',
                value: 0x500E,
                readCommandDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'memoryIndexStart', originalName: 'Memory index (Start)', },
                        { begin: 4, end: 7, format: 'UInt32', content: 'raw', name: 'memoryIndexEnd', originalName: 'Memory index (End)', },
                    ],
                },
                readResponseDataType: {
                    length: 60,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'memoryIndex', originalName: 'Memory index', },
                        { begin: 4, end: 11, format: 'UInt64', content: 'raw', name: 'timeCounter', originalName: 'Time counter', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 18, end: 21, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 22, end: 23, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 24, end: 25, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 26, end: 27, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 28, end: 29, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 30, end: 31, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                        { begin: 32, end: 32, format: 'UInt8', content: 'vibrationInformation', name: 'vibrationInformation', originalName: 'Vibration information', },
                        { begin: 33, end: 34, format: 'UInt16', content: 'siValue', name: 'siValue', originalName: 'SI value', },
                        { begin: 35, end: 36, format: 'UInt16', content: 'pga', name: 'pga', originalName: 'PGA', },
                        { begin: 37, end: 38, format: 'UInt16', content: 'seismicIntensity', name: 'seismicIntensity', originalName: 'Seismic intensity', },
                        { begin: 39, end: 40, format: 'UInt16', content: 'raw', name: 'temperatureFlag', originalName: 'Temperature flag', },
                        { begin: 41, end: 42, format: 'UInt16', content: 'raw', name: 'relativeHumidityFlag', originalName: 'Relative humidity flag', },
                        { begin: 43, end: 44, format: 'UInt16', content: 'raw', name: 'ambientLightFlag', originalName: 'Ambient light flag', },
                        { begin: 45, end: 46, format: 'UInt16', content: 'raw', name: 'barometricPressureFlag', originalName: 'Barometric pressure flag', },
                        { begin: 47, end: 48, format: 'UInt16', content: 'raw', name: 'soundNoiseFlag', originalName: 'Sound noise flag ', },
                        { begin: 49, end: 50, format: 'UInt16', content: 'raw', name: 'etvocFlag', originalName: 'eTVOC flag', },
                        { begin: 51, end: 52, format: 'UInt16', content: 'raw', name: 'eco2Flag', originalName: 'eCO2 flag', },
                        { begin: 53, end: 54, format: 'UInt16', content: 'raw', name: 'discomfortIndexFlag', originalName: 'Discomfort index flag ', },
                        { begin: 55, end: 56, format: 'UInt16', content: 'raw', name: 'heatStrokeFlag', originalName: 'Heat stroke flag', },
                        { begin: 57, end: 57, format: 'UInt8', content: 'raw', name: 'siValueFlag', originalName: 'SI value flag', },
                        { begin: 58, end: 58, format: 'UInt8', content: 'raw', name: 'pgaFlag', originalName: 'PGA flag', },
                        { begin: 59, end: 59, format: 'UInt8', content: 'raw', name: 'seismicIntensityFlag', originalName: 'Seismic intensity flag', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'memoryDataShort',
                originalName: 'Memory data short',
                value: 0x500F,
                readCommandDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'memoryIndexStart', originalName: 'Memory index (Start)', },
                        { begin: 4, end: 7, format: 'UInt32', content: 'raw', name: 'memoryIndexEnd', originalName: 'Memory index (End)', },
                    ],
                },
                readResponseDataType: {
                    length: 32,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'memoryIndex', originalName: 'Memory index', },
                        { begin: 4, end: 11, format: 'UInt64', content: 'raw', name: 'timeCounter', originalName: 'Time counter', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 18, end: 21, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 22, end: 23, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 24, end: 25, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 26, end: 27, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 28, end: 29, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 30, end: 31, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestDataLong',
                originalName: 'Latest data Long',
                value: 0x5021,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 49,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 13, end: 14, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 15, end: 16, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 17, end: 18, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 19, end: 20, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                        { begin: 21, end: 21, format: 'UInt8', content: 'vibrationInformation', name: 'vibrationInformation', originalName: 'Vibration information', },
                        { begin: 22, end: 23, format: 'UInt16', content: 'siValue', name: 'siValue', originalName: 'SI value', },
                        { begin: 24, end: 25, format: 'UInt16', content: 'pga', name: 'pga', originalName: 'PGA', },
                        { begin: 26, end: 27, format: 'UInt16', content: 'seismicIntensity', name: 'seismicIntensity', originalName: 'Seismic intensity', },
                        { begin: 28, end: 29, format: 'UInt16', content: 'raw', name: 'temperatureFlag', originalName: 'Temperature flag', },
                        { begin: 30, end: 31, format: 'UInt16', content: 'raw', name: 'relativeHumidityFlag', originalName: 'Relative humidity flag', },
                        { begin: 32, end: 33, format: 'UInt16', content: 'raw', name: 'ambientLightFlag', originalName: 'Ambient light flag', },
                        { begin: 34, end: 35, format: 'UInt16', content: 'raw', name: 'barometricPressureFlag', originalName: 'Barometric pressure flag', },
                        { begin: 36, end: 37, format: 'UInt16', content: 'raw', name: 'soundNoiseFlag', originalName: 'Sound noise flag ', },
                        { begin: 38, end: 39, format: 'UInt16', content: 'raw', name: 'etvocFlag', originalName: 'eTVOC flag', },
                        { begin: 40, end: 41, format: 'UInt16', content: 'raw', name: 'eco2Flag', originalName: 'eCO2 flag', },
                        { begin: 42, end: 43, format: 'UInt16', content: 'raw', name: 'discomfortIndexFlag', originalName: 'Discomfort index flag ', },
                        { begin: 44, end: 45, format: 'UInt16', content: 'raw', name: 'heatStrokeFlag', originalName: 'Heat stroke flag', },
                        { begin: 46, end: 46, format: 'UInt8', content: 'raw', name: 'siValueFlag', originalName: 'SI value flag', },
                        { begin: 47, end: 47, format: 'UInt8', content: 'raw', name: 'pgaFlag', originalName: 'PGA flag', },
                        { begin: 48, end: 48, format: 'UInt8', content: 'raw', name: 'seismicIntensityFlag', originalName: 'Seismic intensity flag', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestDataShort',
                originalName: 'Latest data short',
                value: 0x5022,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 21,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 13, end: 14, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 15, end: 16, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 17, end: 18, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 19, end: 20, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'accelerationMemoryDataHeader',
                originalName: 'Acceleration memory data [Header]',
                value: 0x503E,
                readCommandDataType: {
                    length: 2,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'accelerationDataType', originalName: 'Acceleration data type', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'requestAccelerationMemoryIndex', originalName: 'Request acceleration memory index', },
                    ],
                },
                readResponseDataType: {
                    length: 60,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'storageTotalPage', originalName: 'Storage total page', },
                        { begin: 2, end: 5, format: 'UInt32', content: 'raw', name: 'earthquakesOrVibrationCount', originalName: 'Earthquakes or vibration count', },
                        { begin: 6, end: 13, format: 'UInt64', content: 'raw', name: 'timeCounter', originalName: 'Time counter', },
                        { begin: 14, end: 14, format: 'UInt8', content: 'raw', name: 'earthquakeFlag', originalName: 'Earthquake flag', },
                        { begin: 15, end: 15, format: 'UInt8', content: 'siValueCalculationAxis', name: 'siValueCalculationAxis', originalName: 'SI value calculation axis', },
                        { begin: 16, end: 17, format: 'UInt8', content: 'raw', name: 'reservedForFutureUse', originalName: 'Reserved for Future Use', },
                        { begin: 18, end: 19, format: 'UInt16', content: 'raw', name: 'pageNumber', originalName: 'Page number', },
                        { begin: 20, end: 21, format: 'UInt16', content: 'siValue', name: 'siValue', originalName: 'SI value', },
                        { begin: 22, end: 23, format: 'UInt16', content: 'pga', name: 'pga', originalName: 'PGA', },
                        { begin: 24, end: 25, format: 'UInt16', content: 'seismicIntensity', name: 'seismicIntensity', originalName: 'Seismic intensity', },
                        { begin: 26, end: 27, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationXAxis', originalName: 'Maximum acceleration (X-axis)', },
                        { begin: 28, end: 29, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationYAxis', originalName: 'Maximum acceleration (Y-axis)', },
                        { begin: 30, end: 31, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationZAxis', originalName: 'Maximum acceleration (Z-axis)', },
                        { begin: 32, end: 33, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 34, end: 35, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 36, end: 37, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 38, end: 41, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 42, end: 43, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 44, end: 45, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 46, end: 47, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 48, end: 49, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 50, end: 51, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                        { begin: 52, end: 52, format: 'UInt8', content: 'raw', name: 'reservedForFutureUse', originalName: 'Reserved for Future Use', },
                        { begin: 53, end: 53, format: 'UInt8', content: 'raw', name: 'reservedForFutureUse', originalName: 'Reserved for Future Use', },
                        { begin: 54, end: 55, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetXAxis', originalName: 'Acceleration offset (X-axis)', },
                        { begin: 56, end: 57, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetYAxis', originalName: 'Acceleration offset (Y-axis)', },
                        { begin: 58, end: 59, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetZAxis', originalName: 'Acceleration offset (Z-axis)', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'accelerationMemoryDataData',
                originalName: 'Acceleration memory data [Data]',
                value: 0x503F,
                readCommandDataType: {
                    length: 6,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'accelerationDataType', originalName: 'Acceleration data type', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'requestAccelerationMemoryIndex', originalName: 'Request acceleration memory index', },
                        { begin: 2, end: 3, format: 'UInt16', content: 'raw', name: 'requestPageStart', originalName: 'Request page (Start)', },
                        { begin: 4, end: 5, format: 'UInt16', content: 'raw', name: 'requestPageEnd', originalName: 'Request page (End)', },
                    ],
                },
                readResponseDataType: {
                    length: 228,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'pageNumber', originalName: 'Page number', },
                        { begin: 2, end: 3, format: 'UInt16', content: 'siValue', name: 'siValue', originalName: 'SI value', },
                        { begin: 4, end: 5, format: 'UInt16', content: 'pga', name: 'pga', originalName: 'PGA', },
                        { begin: 6, end: 7, format: 'UInt16', content: 'seismicIntensity', name: 'seismicIntensity', originalName: 'Seismic intensity', },
                        { begin: 8, end: 9, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationXAxis', originalName: 'Maximum acceleration (X-axis)', },
                        { begin: 10, end: 11, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationYAxis', originalName: 'Maximum acceleration (Y-axis)', },
                        { begin: 12, end: 13, format: 'UInt16', content: 'acceleration', name: 'maximumAccelerationZAxis', originalName: 'Maximum acceleration (Z-axis)', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 18, end: 19, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 20, end: 21, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 22, end: 23, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 24, end: 25, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 26, end: 27, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                        { begin: 28, end: 29, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 30, end: 31, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                        { begin: 32, end: 33, format: 'UInt8', content: 'raw', name: 'reservedForFutureUse', originalName: 'Reserved for Future Use', },
                        { begin: 34, end: 35, format: 'UInt8', content: 'raw', name: 'reservedForFutureUse', originalName: 'Reserved for Future Use', },
                        { begin: 36, end: 37, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis1', originalName: 'Acceleration (X-axis) 1', },
                        { begin: 38, end: 39, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis1', originalName: 'Acceleration (Y-axis) 1', },
                        { begin: 40, end: 41, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis1', originalName: 'Acceleration (Z-axis) 1', },
                        { begin: 42, end: 43, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis2', originalName: 'Acceleration (X-axis) 2', },
                        { begin: 44, end: 45, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis2', originalName: 'Acceleration (Y-axis) 2', },
                        { begin: 46, end: 47, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis2', originalName: 'Acceleration (Z-axis) 2', },
                        { begin: 48, end: 49, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis3', originalName: 'Acceleration (X-axis) 3', },
                        { begin: 50, end: 51, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis3', originalName: 'Acceleration (Y-axis) 3', },
                        { begin: 52, end: 53, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis3', originalName: 'Acceleration (Z-axis) 3', },
                        { begin: 54, end: 55, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis4', originalName: 'Acceleration (X-axis) 4', },
                        { begin: 56, end: 57, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis4', originalName: 'Acceleration (Y-axis) 4', },
                        { begin: 58, end: 59, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis4', originalName: 'Acceleration (Z-axis) 4', },
                        { begin: 60, end: 61, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis5', originalName: 'Acceleration (X-axis) 5', },
                        { begin: 62, end: 63, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis5', originalName: 'Acceleration (Y-axis) 5', },
                        { begin: 64, end: 65, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis5', originalName: 'Acceleration (Z-axis) 5', },
                        { begin: 66, end: 67, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis6', originalName: 'Acceleration (X-axis) 6', },
                        { begin: 68, end: 69, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis6', originalName: 'Acceleration (Y-axis) 6', },
                        { begin: 70, end: 71, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis6', originalName: 'Acceleration (Z-axis) 6', },
                        { begin: 72, end: 73, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis7', originalName: 'Acceleration (X-axis) 7', },
                        { begin: 74, end: 75, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis7', originalName: 'Acceleration (Y-axis) 7', },
                        { begin: 76, end: 77, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis7', originalName: 'Acceleration (Z-axis) 7', },
                        { begin: 78, end: 79, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis8', originalName: 'Acceleration (X-axis) 8', },
                        { begin: 80, end: 81, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis8', originalName: 'Acceleration (Y-axis) 8', },
                        { begin: 82, end: 83, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis8', originalName: 'Acceleration (Z-axis) 8', },
                        { begin: 84, end: 85, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis9', originalName: 'Acceleration (X-axis) 9', },
                        { begin: 86, end: 87, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis9', originalName: 'Acceleration (Y-axis) 9', },
                        { begin: 88, end: 89, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis9', originalName: 'Acceleration (Z-axis) 9', },
                        { begin: 90, end: 91, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis10', originalName: 'Acceleration (X-axis) 10', },
                        { begin: 92, end: 93, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis10', originalName: 'Acceleration (Y-axis) 10', },
                        { begin: 94, end: 95, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis10', originalName: 'Acceleration (Z-axis) 10', },
                        { begin: 96, end: 97, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis11', originalName: 'Acceleration (X-axis) 11', },
                        { begin: 98, end: 99, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis11', originalName: 'Acceleration (Y-axis) 11', },
                        { begin: 100, end: 101, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis11', originalName: 'Acceleration (Z-axis) 11', },
                        { begin: 102, end: 103, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis12', originalName: 'Acceleration (X-axis) 12', },
                        { begin: 104, end: 105, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis12', originalName: 'Acceleration (Y-axis) 12', },
                        { begin: 106, end: 107, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis12', originalName: 'Acceleration (Z-axis) 12', },
                        { begin: 108, end: 109, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis13', originalName: 'Acceleration (X-axis) 13', },
                        { begin: 110, end: 111, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis13', originalName: 'Acceleration (Y-axis) 13', },
                        { begin: 112, end: 113, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis13', originalName: 'Acceleration (Z-axis) 13', },
                        { begin: 114, end: 115, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis14', originalName: 'Acceleration (X-axis) 14', },
                        { begin: 116, end: 117, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis14', originalName: 'Acceleration (Y-axis) 14', },
                        { begin: 118, end: 119, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis14', originalName: 'Acceleration (Z-axis) 14', },
                        { begin: 120, end: 121, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis15', originalName: 'Acceleration (X-axis) 15', },
                        { begin: 122, end: 123, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis15', originalName: 'Acceleration (Y-axis) 15', },
                        { begin: 124, end: 125, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis15', originalName: 'Acceleration (Z-axis) 15', },
                        { begin: 126, end: 127, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis16', originalName: 'Acceleration (X-axis) 16', },
                        { begin: 128, end: 129, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis16', originalName: 'Acceleration (Y-axis) 16', },
                        { begin: 130, end: 131, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis16', originalName: 'Acceleration (Z-axis) 16', },
                        { begin: 132, end: 133, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis17', originalName: 'Acceleration (X-axis) 17', },
                        { begin: 134, end: 135, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis17', originalName: 'Acceleration (Y-axis) 17', },
                        { begin: 136, end: 137, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis17', originalName: 'Acceleration (Z-axis) 17', },
                        { begin: 138, end: 139, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis18', originalName: 'Acceleration (X-axis) 18', },
                        { begin: 140, end: 141, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis18', originalName: 'Acceleration (Y-axis) 18', },
                        { begin: 142, end: 143, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis18', originalName: 'Acceleration (Z-axis) 18', },
                        { begin: 144, end: 145, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis19', originalName: 'Acceleration (X-axis) 19', },
                        { begin: 146, end: 147, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis19', originalName: 'Acceleration (Y-axis) 19', },
                        { begin: 148, end: 149, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis19', originalName: 'Acceleration (Z-axis) 19', },
                        { begin: 150, end: 151, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis20', originalName: 'Acceleration (X-axis) 20', },
                        { begin: 152, end: 153, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis20', originalName: 'Acceleration (Y-axis) 20', },
                        { begin: 154, end: 155, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis20', originalName: 'Acceleration (Z-axis) 20', },
                        { begin: 156, end: 157, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis21', originalName: 'Acceleration (X-axis) 21', },
                        { begin: 158, end: 159, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis21', originalName: 'Acceleration (Y-axis) 21', },
                        { begin: 160, end: 161, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis21', originalName: 'Acceleration (Z-axis) 21', },
                        { begin: 162, end: 163, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis22', originalName: 'Acceleration (X-axis) 22', },
                        { begin: 164, end: 165, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis22', originalName: 'Acceleration (Y-axis) 22', },
                        { begin: 166, end: 167, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis22', originalName: 'Acceleration (Z-axis) 22', },
                        { begin: 168, end: 169, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis23', originalName: 'Acceleration (X-axis) 23', },
                        { begin: 170, end: 171, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis23', originalName: 'Acceleration (Y-axis) 23', },
                        { begin: 172, end: 173, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis23', originalName: 'Acceleration (Z-axis) 23', },
                        { begin: 174, end: 175, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis24', originalName: 'Acceleration (X-axis) 24', },
                        { begin: 176, end: 177, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis24', originalName: 'Acceleration (Y-axis) 24', },
                        { begin: 178, end: 179, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis24', originalName: 'Acceleration (Z-axis) 24', },
                        { begin: 180, end: 181, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis25', originalName: 'Acceleration (X-axis) 25', },
                        { begin: 182, end: 183, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis25', originalName: 'Acceleration (Y-axis) 25', },
                        { begin: 184, end: 185, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis25', originalName: 'Acceleration (Z-axis) 25', },
                        { begin: 186, end: 187, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis26', originalName: 'Acceleration (X-axis) 26', },
                        { begin: 188, end: 189, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis26', originalName: 'Acceleration (Y-axis) 26', },
                        { begin: 190, end: 191, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis26', originalName: 'Acceleration (Z-axis) 26', },
                        { begin: 192, end: 193, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis27', originalName: 'Acceleration (X-axis) 27', },
                        { begin: 194, end: 195, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis27', originalName: 'Acceleration (Y-axis) 27', },
                        { begin: 196, end: 197, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis27', originalName: 'Acceleration (Z-axis) 27', },
                        { begin: 198, end: 199, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis28', originalName: 'Acceleration (X-axis) 28', },
                        { begin: 200, end: 201, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis28', originalName: 'Acceleration (Y-axis) 28', },
                        { begin: 202, end: 203, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis28', originalName: 'Acceleration (Z-axis) 28', },
                        { begin: 204, end: 205, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis29', originalName: 'Acceleration (X-axis) 29', },
                        { begin: 206, end: 207, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis29', originalName: 'Acceleration (Y-axis) 29', },
                        { begin: 208, end: 209, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis29', originalName: 'Acceleration (Z-axis) 29', },
                        { begin: 210, end: 211, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis30', originalName: 'Acceleration (X-axis) 30', },
                        { begin: 212, end: 213, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis30', originalName: 'Acceleration (Y-axis) 30', },
                        { begin: 214, end: 215, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis30', originalName: 'Acceleration (Z-axis) 30', },
                        { begin: 216, end: 217, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis31', originalName: 'Acceleration (X-axis) 31', },
                        { begin: 218, end: 219, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis31', originalName: 'Acceleration (Y-axis) 31', },
                        { begin: 220, end: 221, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis31', originalName: 'Acceleration (Z-axis) 31', },
                        { begin: 222, end: 223, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis32', originalName: 'Acceleration (X-axis) 32', },
                        { begin: 224, end: 225, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis32', originalName: 'Acceleration (Y-axis) 32', },
                        { begin: 226, end: 227, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis32', originalName: 'Acceleration (Z-axis) 32', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestMemoryInformation',
                originalName: 'Latest memory information',
                value: 0x5004,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'memoryIndexLatest', originalName: 'Memory index (Latest)', },
                        { begin: 4, end: 7, format: 'UInt32', content: 'raw', name: 'memoryIndexLast', originalName: 'Memory index (Last)', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestSensingData',
                originalName: 'Latest sensing data',
                value: 0x5012,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 17,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'temperature', name: 'temperature', originalName: 'Temperature', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'relativeHumidity', name: 'relativeHumidity', originalName: 'Relative humidity', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'ambientLight', name: 'ambientLight', originalName: 'Ambient light', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'barometricPressure', name: 'barometricPressure', originalName: 'Barometric pressure', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'soundNoise', name: 'soundNoise', originalName: 'Sound noise', },
                        { begin: 13, end: 14, format: 'SInt16', content: 'etvoc', name: 'etvoc', originalName: 'eTVOC', },
                        { begin: 15, end: 16, format: 'SInt16', content: 'eco2', name: 'eco2', originalName: 'eCO2', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestCalculationData',
                originalName: 'Latest calculation data',
                value: 0x5013,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 18,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'discomfortIndex', name: 'discomfortIndex', originalName: 'Discomfort index', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'heatStroke', name: 'heatStroke', originalName: 'Heat stroke', },
                        { begin: 5, end: 5, format: 'UInt8', content: 'vibrationInformation', name: 'vibrationInformation', originalName: 'Vibration information', },
                        { begin: 6, end: 7, format: 'UInt16', content: 'siValue', name: 'siValue', originalName: 'SI value', },
                        { begin: 8, end: 9, format: 'UInt16', content: 'pga', name: 'pga', originalName: 'PGA', },
                        { begin: 10, end: 11, format: 'UInt16', content: 'seismicIntensity', name: 'seismicIntensity', originalName: 'Seismic intensity', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'acceleration', name: 'accelerationXAxis', originalName: 'Acceleration (X-axis)', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'acceleration', name: 'accelerationYAxis', originalName: 'Acceleration (Y-axis)', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'acceleration', name: 'accelerationZAxis', originalName: 'Acceleration (Z-axis)', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestSensingFlag',
                originalName: 'Latest sensing flag',
                value: 0x5014,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 17,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'temperatureFlag', originalName: 'Temperature flag', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'relativeHumidityFlag', originalName: 'Relative humidity flag', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'ambientLightFlag', originalName: 'Ambient light flag ', },
                        { begin: 7, end: 10, format: 'UInt16', content: 'raw', name: 'barometricPressureFlag', originalName: 'Barometric pressure flag', },
                        { begin: 11, end: 12, format: 'UInt16', content: 'raw', name: 'soundNoiseFlag', originalName: 'Sound noise flag', },
                        { begin: 13, end: 14, format: 'UInt16', content: 'raw', name: 'etvocFlag', originalName: 'eTVOC flag', },
                        { begin: 15, end: 16, format: 'UInt16', content: 'raw', name: 'eco2Flag', originalName: 'eCO2 flag', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestCalculationFlag',
                originalName: 'Latest calculation flag',
                value: 0x5015,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'discomfortIndexFlag', originalName: 'Discomfort index flag', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'heatStrokeFlag', originalName: 'Heat stroke flag', },
                        { begin: 5, end: 5, format: 'UInt8', content: 'raw', name: 'siValueFlag', originalName: 'SI value flag', },
                        { begin: 6, end: 6, format: 'UInt8', content: 'raw', name: 'pgaFlag', originalName: 'PGA flag', },
                        { begin: 7, end: 7, format: 'UInt8', content: 'raw', name: 'seismicIntensityFlag', originalName: 'Seismic intensity flag', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'latestAccelerationStatus',
                originalName: 'Latest acceleration status',
                value: 0x5016,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 15,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'sequenceNumber', originalName: 'Sequence number', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'vibrationInformation', name: 'vibrationInformation', originalName: 'Vibration information', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'acceleration', name: 'maximumAccelerationXAxis', originalName: 'Maximum acceleration (X-axis)', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'acceleration', name: 'maximumAccelerationYAxis', originalName: 'Maximum acceleration (Y-axis)', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'acceleration', name: 'maximumAccelerationZAxis', originalName: 'Maximum acceleration (Z-axis)', },
                        { begin: 8, end: 8, format: 'UInt8', content: 'siValueCalculationAxis', name: 'siValueCalculationAxis', originalName: 'SI value calculation axis', },
                        { begin: 9, end: 10, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetXAxis', originalName: 'Acceleration offset (X-axis)', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetYAxis', originalName: 'Acceleration offset (Y-axis) ', },
                        { begin: 13, end: 14, format: 'SInt16', content: 'acceleration', name: 'accelerationOffsetZAxis', originalName: 'Acceleration offset (Z-axis)', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'vibrationCount',
                originalName: 'Vibration count',
                value: 0x5031,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 3, format: 'UInt32', content: 'raw', name: 'earthquakeCount', originalName: 'Earthquake count', },
                        { begin: 4, end: 7, format: 'UInt32', content: 'raw', name: 'vibrationCount', originalName: 'Vibration count', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'ledSettingNormalState',
                originalName: 'LED setting [normal state]',
                value: 0x5111,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleNormalState', originalName: 'Display rule (normal state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
                writeCommandDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleNormalState', originalName: 'Display rule (normal state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
                writeResponseDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleNormalState', originalName: 'Display rule (normal state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
            },
            {
                name: 'ledSettingEventState',
                originalName: 'LED setting [event state]',
                value: 0x5112,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleEventState', originalName: 'Display rule (event state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
                writeCommandDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleEventState', originalName: 'Display rule (event state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
                writeResponseDataType: {
                    length: 5,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'displayRuleEventState', originalName: 'Display rule (event state)', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'intensityOfLedRed', originalName: 'Intensity of LED (Red)', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'intensityOfLedGreen', originalName: 'Intensity of LED (Green)', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'intensityOfLedBlue', originalName: 'Intensity of LED (Blue)', },
                    ],
                },
            },
            {
                name: 'ledSettingOperation',
                originalName: 'LED setting [operation]',
                value: 0x5113,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'startUp', originalName: 'Start up', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'error', originalName: 'Error', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'connection', originalName: 'Connection', },
                    ],
                },
                writeCommandDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'startUp', originalName: 'Start up', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'error', originalName: 'Error', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'connection', originalName: 'Connection', },
                    ],
                },
                writeResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'startUp', originalName: 'Start up', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'error', originalName: 'Error', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'connection', originalName: 'Connection', },
                    ],
                },
            },
            {
                name: 'installationOffset',
                originalName: 'Installation offset',
                value: 0x5114,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 13,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'installationOffsetEnableDisable', originalName: 'Installation offset enable/disable', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'raw', name: 'temperatureInstallationOffset', originalName: 'Temperature installation offset', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'raw', name: 'relativeHumidityInstallationOffset', originalName: 'Relative humidity installation offset', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'raw', name: 'ambientLightInstallationGain', originalName: 'Ambient light installation gain', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'raw', name: 'barometricPressureInstallationOffset', originalName: 'Barometric pressure installation offset', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'raw', name: 'soundNoiseInstallationOffset', originalName: 'Sound noise installation offset', },
                    ],
                },
                writeCommandDataType: {
                    length: 13,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'installationOffsetEnableDisable', originalName: 'Installation offset enable/disable', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'raw', name: 'temperatureInstallationOffset', originalName: 'Temperature installation offset', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'raw', name: 'relativeHumidityInstallationOffset', originalName: 'Relative humidity installation offset', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'raw', name: 'ambientLightInstallationGain', originalName: 'Ambient light installation gain', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'raw', name: 'barometricPressureInstallationOffset', originalName: 'Barometric pressure installation offset', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'raw', name: 'soundNoiseInstallationOffset', originalName: 'Sound noise installation offset', },
                    ],
                },
                writeResponseDataType: {
                    length: 13,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'installationOffsetEnableDisable', originalName: 'Installation offset enable/disable', },
                        { begin: 1, end: 2, format: 'SInt16', content: 'raw', name: 'temperatureInstallationOffset', originalName: 'Temperature installation offset', },
                        { begin: 3, end: 4, format: 'SInt16', content: 'raw', name: 'relativeHumidityInstallationOffset', originalName: 'Relative humidity installation offset', },
                        { begin: 5, end: 6, format: 'SInt16', content: 'raw', name: 'ambientLightInstallationGain', originalName: 'Ambient light installation gain', },
                        { begin: 7, end: 10, format: 'SInt32', content: 'raw', name: 'barometricPressureInstallationOffset', originalName: 'Barometric pressure installation offset', },
                        { begin: 11, end: 12, format: 'SInt16', content: 'raw', name: 'soundNoiseInstallationOffset', originalName: 'Sound noise installation offset', },
                    ],
                },
            },
            {
                name: 'advertiseSetting',
                originalName: 'Advertise setting',
                value: 0x5115,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'advertisingInterval', originalName: 'Advertising interval', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'advertisingMode', originalName: 'Advertising mode', },
                    ],
                },
                writeCommandDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'advertisingInterval', originalName: 'Advertising interval', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'advertisingMode', originalName: 'Advertising mode', },
                    ],
                },
                writeResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'advertisingInterval', originalName: 'Advertising interval', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'advertisingMode', originalName: 'Advertising mode', },
                    ],
                },
            },
            {
                name: 'memoryReset',
                originalName: 'Memory reset',
                value: 0x5116,
                readCommandDataType: null,
                readResponseDataType: null,
                writeCommandDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'memoryReset', originalName: 'Memory reset', },
                    ],
                },
                writeResponseDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'memoryReset', originalName: 'Memory reset', },
                    ],
                },
            },
            {
                name: 'modeChange',
                originalName: 'Mode change',
                value: 0x5117,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'modeChange', originalName: 'Mode change', },
                    ],
                },
                writeCommandDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'modeChange', originalName: 'Mode change', },
                    ],
                },
                writeResponseDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'modeChange', originalName: 'Mode change', },
                    ],
                },
            },
            {
                name: 'accelerationLoggerControl',
                originalName: 'Acceleration logger control',
                value: 0x5118,
                readCommandDataType: null,
                readResponseDataType: null,
                writeCommandDataType: {
                    length: 7,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'loggerCondition', originalName: 'Logger condition', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'rangeOfDetection', originalName: 'Range of detection', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'odrSetting', originalName: 'ODR setting', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'startPage', originalName: 'Start page', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'endPage', originalName: 'End page', },
                    ],
                },
                writeResponseDataType: {
                    length: 7,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'loggerCondition', originalName: 'Logger condition', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'rangeOfDetection', originalName: 'Range of detection', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'odrSetting', originalName: 'ODR setting', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'startPage', originalName: 'Start page', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'endPage', originalName: 'End page', },
                    ],
                },
            },
            {
                name: 'accelerationLoggerStatus',
                originalName: 'Acceleration logger status',
                value: 0x5119,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'loggerStatus', originalName: 'Logger status', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'runningPage', originalName: 'Running page', },
                    ],
                },
                writeCommandDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'loggerStatus', originalName: 'Logger status', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'runningPage', originalName: 'Running page', },
                    ],
                },
                writeResponseDataType: {
                    length: 3,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'loggerStatus', originalName: 'Logger status', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'runningPage', originalName: 'Running page', },
                    ],
                },
            },
            {
                name: 'latestTimeCounter',
                originalName: 'Latest time counter',
                value: 0x5201,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 7, format: 'UInt64', content: 'raw', name: 'timeCounter', originalName: 'Time counter', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'timeSetting',
                originalName: 'Time setting',
                value: 0x5202,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 7, format: 'UInt64', content: 'raw', name: 'timeSetting', originalName: 'Time setting', },
                    ],
                },
                writeCommandDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 7, format: 'UInt64', content: 'raw', name: 'timeSetting', originalName: 'Time setting', },
                    ],
                },
                writeResponseDataType: {
                    length: 8,
                    fieldTypes: [
                        { begin: 0, end: 7, format: 'UInt64', content: 'raw', name: 'timeSetting', originalName: 'Time setting', },
                    ],
                },
            },
            {
                name: 'memoryStorageInterval',
                originalName: 'Memory storage interval',
                value: 0x5203,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 2,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'memoryStorageInterval', originalName: 'Memory storage interval', },
                    ],
                },
                writeCommandDataType: {
                    length: 2,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'memoryStorageInterval', originalName: 'Memory storage interval', },
                    ],
                },
                writeResponseDataType: {
                    length: 2,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'memoryStorageInterval', originalName: 'Memory storage interval', },
                    ],
                },
            },
            {
                name: 'eventPatternSensor1',
                originalName: 'Event pattern [Sensor 1]',
                value: 0x5211,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit1', originalName: 'Simple threshold [lower limit] 1', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit2', originalName: 'Simple threshold [lower limit] 2', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline1', originalName: 'Change threshold [decline] 1', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline2', originalName: 'Change threshold [decline] 2', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                    ],
                },
                writeCommandDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit1', originalName: 'Simple threshold [lower limit] 1', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit2', originalName: 'Simple threshold [lower limit] 2', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline1', originalName: 'Change threshold [decline] 1', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline2', originalName: 'Change threshold [decline] 2', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                    ],
                },
                writeResponseDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'UInt16', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit1', originalName: 'Simple threshold [lower limit] 1', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'simpleThresholdLowerLimit2', originalName: 'Simple threshold [lower limit] 2', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline1', originalName: 'Change threshold [decline] 1', },
                        { begin: 16, end: 17, format: 'SInt16', content: 'raw', name: 'changeThresholdDecline2', originalName: 'Change threshold [decline] 2', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                    ],
                },
            },
            {
                name: 'eventPatternSensor2',
                originalName: 'Event pattern [Sensor 2]',
                value: 0x5212,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'SInt16', content: 'raw', name: 'averageValueThresholdUpper', originalName: 'Average value threshold [upper]', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'averageValueThresholdLower', originalName: 'Average value threshold [lower]', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdUpper', originalName: 'Peak to Peak threshold [upper]', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdLower', originalName: 'Peak to Peak threshold [lower]', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdUpper', originalName: 'Interval difference threshold [upper]', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdLower', originalName: 'Interval difference threshold [lower]', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdUpper', originalName: 'Base difference threshold [upper]', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdLower', originalName: 'Base difference threshold [lower]', },
                        { begin: 16, end: 16, format: 'UInt8', content: 'raw', name: 'averageValueCount', originalName: 'Average value count', },
                        { begin: 17, end: 17, format: 'UInt8', content: 'raw', name: 'peakToPeakCount', originalName: 'Peak to Peak count', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'intervalDifferenceCount', originalName: 'Interval difference count', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'baseDifferenceCount', originalName: 'Base difference count', },
                    ],
                },
                writeCommandDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'SInt16', content: 'raw', name: 'averageValueThresholdUpper', originalName: 'Average value threshold [upper]', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'averageValueThresholdLower', originalName: 'Average value threshold [lower]', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdUpper', originalName: 'Peak to Peak threshold [upper]', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdLower', originalName: 'Peak to Peak threshold [lower]', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdUpper', originalName: 'Interval difference threshold [upper]', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdLower', originalName: 'Interval difference threshold [lower]', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdUpper', originalName: 'Base difference threshold [upper]', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdLower', originalName: 'Base difference threshold [lower]', },
                        { begin: 16, end: 16, format: 'UInt8', content: 'raw', name: 'averageValueCount', originalName: 'Average value count', },
                        { begin: 17, end: 17, format: 'UInt8', content: 'raw', name: 'peakToPeakCount', originalName: 'Peak to Peak count', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'intervalDifferenceCount', originalName: 'Interval difference count', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'baseDifferenceCount', originalName: 'Base difference count', },
                    ],
                },
                writeResponseDataType: {
                    length: 20,
                    fieldTypes: [
                        { begin: 0, end: 1, format: 'SInt16', content: 'raw', name: 'averageValueThresholdUpper', originalName: 'Average value threshold [upper]', },
                        { begin: 2, end: 3, format: 'SInt16', content: 'raw', name: 'averageValueThresholdLower', originalName: 'Average value threshold [lower]', },
                        { begin: 4, end: 5, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdUpper', originalName: 'Peak to Peak threshold [upper]', },
                        { begin: 6, end: 7, format: 'SInt16', content: 'raw', name: 'peakToPeakThresholdLower', originalName: 'Peak to Peak threshold [lower]', },
                        { begin: 8, end: 9, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdUpper', originalName: 'Interval difference threshold [upper]', },
                        { begin: 10, end: 11, format: 'SInt16', content: 'raw', name: 'intervalDifferenceThresholdLower', originalName: 'Interval difference threshold [lower]', },
                        { begin: 12, end: 13, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdUpper', originalName: 'Base difference threshold [upper]', },
                        { begin: 14, end: 15, format: 'SInt16', content: 'raw', name: 'baseDifferenceThresholdLower', originalName: 'Base difference threshold [lower]', },
                        { begin: 16, end: 16, format: 'UInt8', content: 'raw', name: 'averageValueCount', originalName: 'Average value count', },
                        { begin: 17, end: 17, format: 'UInt8', content: 'raw', name: 'peakToPeakCount', originalName: 'Peak to Peak count', },
                        { begin: 18, end: 18, format: 'UInt8', content: 'raw', name: 'intervalDifferenceCount', originalName: 'Interval difference count', },
                        { begin: 19, end: 19, format: 'UInt8', content: 'raw', name: 'baseDifferenceCount', originalName: 'Base difference count', },
                    ],
                },
            },
            {
                name: 'eventPatternAcceleration',
                originalName: 'Event pattern [Acceleration]',
                value: 0x5226,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 9,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 7, end: 8, format: 'UInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                    ],
                },
                writeCommandDataType: {
                    length: 9,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 7, end: 8, format: 'UInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                    ],
                },
                writeResponseDataType: {
                    length: 9,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'eventEnableDisable', originalName: 'Event enable/disable', },
                        { begin: 1, end: 2, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit1', originalName: 'Simple threshold [upper limit] 1', },
                        { begin: 3, end: 4, format: 'UInt16', content: 'raw', name: 'simpleThresholdUpperLimit2', originalName: 'Simple threshold [upper limit] 2', },
                        { begin: 5, end: 6, format: 'UInt16', content: 'raw', name: 'changeThresholdRise1', originalName: 'Change threshold [rise] 1', },
                        { begin: 7, end: 8, format: 'UInt16', content: 'raw', name: 'changeThresholdRise2', originalName: 'Change threshold [rise] 2', },
                    ],
                },
            },
            {
                name: 'errorStatus',
                originalName: 'Error status',
                value: 0x5401,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 11,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'temperatureSensorError', originalName: 'Temperature sensor error', },
                        { begin: 1, end: 1, format: 'UInt8', content: 'raw', name: 'relativeHumiditySensorError', originalName: 'Relative humidity sensor error', },
                        { begin: 2, end: 2, format: 'UInt8', content: 'raw', name: 'ambientLightSensorError', originalName: 'Ambient light sensor error', },
                        { begin: 3, end: 3, format: 'UInt8', content: 'raw', name: 'barometricPressureSensorError', originalName: 'Barometric pressure sensor error ', },
                        { begin: 4, end: 4, format: 'UInt8', content: 'raw', name: 'soundNoiseSensorError', originalName: 'Sound noise sensor error', },
                        { begin: 5, end: 5, format: 'UInt8', content: 'raw', name: 'accelerationSensorError', originalName: 'Acceleration sensor error', },
                        { begin: 6, end: 6, format: 'UInt8', content: 'raw', name: 'etvocSensorError', originalName: 'eTVOC sensor error', },
                        { begin: 7, end: 7, format: 'UInt8', content: 'raw', name: 'eco2SensorError', originalName: 'eCO2 sensor error', },
                        { begin: 8, end: 8, format: 'UInt8', content: 'raw', name: 'cpuError', originalName: 'CPU error', },
                        { begin: 9, end: 9, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                        { begin: 10, end: 10, format: 'UInt8', content: 'raw', name: 'reserveForFutureUse', originalName: 'Reserve for Future Use', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'mountingOrientation',
                originalName: 'Mounting orientation',
                value: 0x5402,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 1,
                    fieldTypes: [
                        { begin: 0, end: 0, format: 'UInt8', content: 'raw', name: 'mountingOrientation', originalName: 'Mounting orientation', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
            {
                name: 'deviceInformation',
                originalName: 'Device information',
                value: 0x180A,
                readCommandDataType: {
                    length: 0,
                    fieldTypes: [],
                },
                readResponseDataType: {
                    length: 35,
                    fieldTypes: [
                        { begin: 0, end: 9, format: 'Utf8s', content: 'raw', name: 'modelNumber', originalName: 'Model number', },
                        { begin: 10, end: 19, format: 'Utf8s', content: 'raw', name: 'serialNumber', originalName: 'Serial number', },
                        { begin: 20, end: 24, format: 'Utf8s', content: 'raw', name: 'firmwareRevision', originalName: 'Firmware revision', },
                        { begin: 25, end: 29, format: 'Utf8s', content: 'raw', name: 'hardwareRevision', originalName: 'Hardware revision', },
                        { begin: 30, end: 34, format: 'Utf8s', content: 'raw', name: 'manufactureName', originalName: 'Manufacture name', },
                    ],
                },
                writeCommandDataType: null,
                writeResponseDataType: null,
            },
        ];
        _it.addressTypeMap = new Map();
        for (const addressType of _it.addressTypeArray) {
            _it.addressTypeMap.set(addressType.name, addressType);
            _it.addressTypeMap.set(addressType.value, addressType);
        }

        /** @type {Addresses} */
        const it = {};
        it.AddressesConstructorOptions = () => {
            return _options;
        };
        it._Addresses = () => {
            return _it;
        };
        it.find = (value) => {
            return _it.addressTypeMap.get(value);
        };
        return it;

    };
    return { Addresses };

})();

module.exports = { Addresses: Addresses({}) };
