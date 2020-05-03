/**
 * node-omron-2jcie-bu/lib/controller.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @private
 */
const Channel = require('./channel');

/**
 * @private
 */
const Reader = require('./reader');

/**
 * @private
 */
const Writer = require('./writer');

/**
 * @private
 */
const Queue = require('./queue');

/**
 * @public
 * @function
 * @param {ControllerOptions} options 
 */
const Controller = (options) => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {Channel}
     */
    privateScope.channel = null;

    /**
     * @private
     * @type {Reader}
     */
    privateScope.reader = null;

    /**
     * @private
     * @type {Writer}
     */
    privateScope.writer = null;

    /**
     * @private
     * @type {Queue}
     */
    privateScope.queue = null;

    /**
     * @private
     * @function
     * @param {CommandPayload} commandPayload
     * @return {Promise<ResponsePayload>}
     */
    privateScope.execute = (commandPayload) => {
        return privateScope.queue.enqueue(commandPayload);
    };

    /**
     * @public
     */
    const publicScope = {};

    /**
     * @private
     * @function
     */
    publicScope.privateScope = () => {
        return privateScope;
    };

    /** 
     * @public 
     * @function 
     * @param {number} milliseconds 
     * @return {Promise<void>}
     */
    publicScope.sleep = (milliseconds) => {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        });
    };

    /**
     * @public
     * @async 
     * @function
     * @return {Promise<void>}
     */
    publicScope.open = async () => {
        if (privateScope.channel == null) {
            privateScope.channel = Channel({
                path: options.path
            });
            privateScope.reader = Reader();
            privateScope.writer = Writer();
            privateScope.queue = Queue();
            privateScope.channel.output().pipe(privateScope.reader.input());
            privateScope.writer.output().pipe(privateScope.channel.input());
            privateScope.reader.output().pipe(privateScope.queue.input());
            privateScope.queue.output().pipe(privateScope.writer.input());
            await privateScope.channel.open();
        }
    };

    /**
     * @public
     * @async 
     * @function
     * @return {Promise<void>}
     */
    publicScope.close = async () => {
        if (privateScope.channel != null) {
            privateScope.reader.output().unpipe(privateScope.queue.input());
            privateScope.queue.output().unpipe(privateScope.writer.input());
            privateScope.channel.output().unpipe(privateScope.reader.input());
            privateScope.writer.output().unpipe(privateScope.channel.input());
            await privateScope.channel.close();
            privateScope.channel = null;
        }
    };

    publicScope.memoryDataLong = {
        /**
         * @public
         * @function
         * @param {MemoryDataLongReadCommandData} data
         * @return {Promise<MemoryDataLongReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'memoryDataLong',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.memoryDataShort = {
        /**
         * @public
         * @function
         * @param {MemoryDataShortReadCommandData} data
         * @return {Promise<MemoryDataShortReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'memoryDataShort',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestDataLong = {
        /**
         * @public
         * @function
         * @param {LatestDataLongReadCommandData} data
         * @return {Promise<LatestDataLongReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestDataLong',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestDataShort = {
        /**
         * @public
         * @function
         * @param {LatestDataShortReadCommandData} data
         * @return {Promise<LatestDataShortReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestDataShort',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.accelerationMemoryDataHeader = {
        /**
         * @public
         * @function
         * @param {AccelerationMemoryDataHeaderReadCommandData} data
         * @return {Promise<AccelerationMemoryDataHeaderReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'accelerationMemoryDataHeader',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.accelerationMemoryDataData = {
        /**
         * @public
         * @function
         * @param {AccelerationMemoryDataDataReadCommandData} data
         * @return {Promise<AccelerationMemoryDataDataReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'accelerationMemoryDataData',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestMemoryInformation = {
        /**
         * @public
         * @function
         * @param {LatestMemoryInformationReadCommandData} data
         * @return {Promise<LatestMemoryInformationReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestMemoryInformation',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestSensingData = {
        /**
         * @public
         * @function
         * @param {LatestSensingDataReadCommandData} data
         * @return {Promise<LatestSensingDataReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestSensingData',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestCalculationData = {
        /**
         * @public
         * @function
         * @param {LatestCalculationDataReadCommandData} data
         * @return {Promise<LatestCalculationDataReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestCalculationData',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestSensingFlag = {
        /**
         * @public
         * @function
         * @param {LatestSensingFlagReadCommandData} data
         * @return {Promise<LatestSensingFlagReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestSensingFlag',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestCalculationFlag = {
        /**
         * @public
         * @function
         * @param {LatestCalculationFlagReadCommandData} data
         * @return {Promise<LatestCalculationFlagReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestCalculationFlag',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestAccelerationStatus = {
        /**
         * @public
         * @function
         * @param {LatestAccelerationStatusReadCommandData} data
         * @return {Promise<LatestAccelerationStatusReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestAccelerationStatus',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.vibrationCount = {
        /**
         * @public
         * @function
         * @param {VibrationCountReadCommandData} data
         * @return {Promise<VibrationCountReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'vibrationCount',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.ledSettingNormalState = {
        /**
         * @public
         * @function
         * @param {LedSettingNormalStateReadCommandData} data
         * @return {Promise<LedSettingNormalStateReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'ledSettingNormalState',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {LedSettingNormalStateWriteCommandData} data
         * @return {Promise<LedSettingNormalStateWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'ledSettingNormalState',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.ledSettingEventState = {
        /**
         * @public
         * @function
         * @param {LedSettingEventStateReadCommandData} data
         * @return {Promise<LedSettingEventStateReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'ledSettingEventState',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {LedSettingEventStateWriteCommandData} data
         * @return {Promise<LedSettingEventStateWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'ledSettingEventState',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.ledSettingOperation = {
        /**
         * @public
         * @function
         * @param {LedSettingOperationReadCommandData} data
         * @return {Promise<LedSettingOperationReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'ledSettingOperation',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {LedSettingOperationWriteCommandData} data
         * @return {Promise<LedSettingOperationWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'ledSettingOperation',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.installationOffset = {
        /**
         * @public
         * @function
         * @param {InstallationOffsetReadCommandData} data
         * @return {Promise<InstallationOffsetReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'installationOffset',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {InstallationOffsetWriteCommandData} data
         * @return {Promise<InstallationOffsetWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'installationOffset',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.advertiseSetting = {
        /**
         * @public
         * @function
         * @param {AdvertiseSettingReadCommandData} data
         * @return {Promise<AdvertiseSettingReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'advertiseSetting',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {AdvertiseSettingWriteCommandData} data
         * @return {Promise<AdvertiseSettingWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'advertiseSetting',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.memoryReset = {
        /**
         * @public
         * @function
         * @param {MemoryResetWriteCommandData} data
         * @return {Promise<MemoryResetWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'memoryReset',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.modeChange = {
        /**
         * @public
         * @function
         * @param {ModeChangeReadCommandData} data
         * @return {Promise<ModeChangeReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'modeChange',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {ModeChangeWriteCommandData} data
         * @return {Promise<ModeChangeWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'modeChange',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.accelerationLoggerControl = {
        /**
         * @public
         * @function
         * @param {AccelerationLoggerControlWriteCommandData} data
         * @return {Promise<AccelerationLoggerControlWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'accelerationLoggerControl',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.accelerationLoggerStatus = {
        /**
         * @public
         * @function
         * @param {AccelerationLoggerStatusReadCommandData} data
         * @return {Promise<AccelerationLoggerStatusReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'accelerationLoggerStatus',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {AccelerationLoggerStatusWriteCommandData} data
         * @return {Promise<AccelerationLoggerStatusWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'accelerationLoggerStatus',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.latestTimeCounter = {
        /**
         * @public
         * @function
         * @param {LatestTimeCounterReadCommandData} data
         * @return {Promise<LatestTimeCounterReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'latestTimeCounter',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.timeSetting = {
        /**
         * @public
         * @function
         * @param {TimeSettingReadCommandData} data
         * @return {Promise<TimeSettingReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'timeSetting',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {TimeSettingWriteCommandData} data
         * @return {Promise<TimeSettingWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'timeSetting',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.memoryStorageInterval = {
        /**
         * @public
         * @function
         * @param {MemoryStorageIntervalReadCommandData} data
         * @return {Promise<MemoryStorageIntervalReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'memoryStorageInterval',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {MemoryStorageIntervalWriteCommandData} data
         * @return {Promise<MemoryStorageIntervalWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'memoryStorageInterval',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.eventPatternSensor1 = {
        /**
         * @public
         * @function
         * @param {EventPatternSensor1ReadCommandData} data
         * @return {Promise<EventPatternSensor1ReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'eventPatternSensor1',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {EventPatternSensor1WriteCommandData} data
         * @return {Promise<EventPatternSensor1WriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'eventPatternSensor1',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.eventPatternSensor2 = {
        /**
         * @public
         * @function
         * @param {EventPatternSensor2ReadCommandData} data
         * @return {Promise<EventPatternSensor2ReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'eventPatternSensor2',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {EventPatternSensor2WriteCommandData} data
         * @return {Promise<EventPatternSensor2WriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'eventPatternSensor2',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.eventPatternAcceleration = {
        /**
         * @public
         * @function
         * @param {EventPatternAccelerationReadCommandData} data
         * @return {Promise<EventPatternAccelerationReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'eventPatternAcceleration',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
        /**
         * @public
         * @function
         * @param {EventPatternAccelerationWriteCommandData} data
         * @return {Promise<EventPatternAccelerationWriteResponseData>}
         */
        write: (data) => {
            return privateScope.execute({
                command: 'write',
                address: 'eventPatternAcceleration',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.errorStatus = {
        /**
         * @public
         * @function
         * @param {ErrorStatusReadCommandData} data
         * @return {Promise<ErrorStatusReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'errorStatus',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.mountingOrientation = {
        /**
         * @public
         * @function
         * @param {MountingOrientationReadCommandData} data
         * @return {Promise<MountingOrientationReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'mountingOrientation',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    publicScope.deviceInformation = {
        /**
         * @public
         * @function
         * @param {DeviceInformationReadCommandData} data
         * @return {Promise<DeviceInformationReadResponseData>}
         */
        read: (data) => {
            return privateScope.execute({
                command: 'read',
                address: 'deviceInformation',
                data,
            }).then((responsePayload) => responsePayload.data);
        },
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Controller;
