/**
 * node-omron-2jcie-bu/src/lib/controller.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const { Channel } = require('./channel');
const { Reader } = require('./reader');
const { Writer } = require('./writer');
const { Queue } = require('./queue');

const { Controller } = (() => {

    /** @typedef ControllerConstructorOptions @type {import('../../types').ControllerConstructorOptions} */
    /** @typedef _Controller @type {import('../../types')._Controller} */
    /** @typedef Controller @type {import('../../types').Controller} */
    /** @typedef ControllerConstructor @type {import('../../types').ControllerConstructor} */

    /** @type {ControllerConstructor} */
    const Controller = (options) => {

        /** @type {ControllerConstructorOptions} */
        const _options = options;

        /** @type {_Controller} */
        const _it = {};
        _it.channel = null;
        _it.reader = null;
        _it.writer = null;
        _it.queue = null;
        _it.execute = (commandPayload) => {
            /* istanbul ignore next */
            if (_it.queue == null) {
                throw new Error();
            }
            const task = _it.queue.enqueue(commandPayload);
            /* istanbul ignore next */
            if (task.promise == null) {
                throw new Error();
            }
            return task.promise;
        };

        /** @type {Controller} */
        const it = {};
        it.ControllerConstructorOptions = () => {
            return _options;
        };
        it._Controller = () => {
            return _it;
        };
        it.sleep = (milliseconds) => {
            return new Promise((resolve, _reject) => {
                setTimeout(() => {
                    resolve();
                }, milliseconds);
            });
        };
        it.open = async () => {
            if (_it.channel == null) {
                _it.channel = Channel({
                    path: options.path
                });
                _it.reader = Reader({});
                _it.writer = Writer({});
                _it.queue = Queue({});
                _it.channel.output().pipe(_it.reader.input());
                _it.writer.output().pipe(_it.channel.input());
                _it.reader.output().pipe(_it.queue.input());
                _it.queue.output().pipe(_it.writer.input());
                await _it.channel.open();
            }
        };
        it.close = async () => {
            if (_it.channel != null && _it.reader != null && _it.writer != null && _it.queue != null) {
                _it.reader.output().unpipe(_it.queue.input());
                _it.queue.output().unpipe(_it.writer.input());
                _it.channel.output().unpipe(_it.reader.input());
                _it.writer.output().unpipe(_it.channel.input());
                await _it.channel.close();
                _it.queue = null;
                _it.writer = null;
                _it.reader = null;
                _it.channel = null;
            }
        };
        it.memoryDataLong = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'memoryDataLong', data }).then((responsePayloads) => responsePayloads.map((responsePayload) => responsePayload.data));
            },
        };
        it.memoryDataShort = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'memoryDataShort', data }).then((responsePayloads) => responsePayloads.map((responsePayload) => responsePayload.data));
            },
        };
        it.latestDataLong = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestDataLong', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestDataShort = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestDataShort', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.accelerationMemoryDataHeader = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'accelerationMemoryDataHeader', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.accelerationMemoryDataData = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'accelerationMemoryDataData', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestMemoryInformation = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestMemoryInformation', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestSensingData = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestSensingData', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestCalculationData = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestCalculationData', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestSensingFlag = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestSensingFlag', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestCalculationFlag = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestCalculationFlag', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestAccelerationStatus = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestAccelerationStatus', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.vibrationCount = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'vibrationCount', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.ledSettingNormalState = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'ledSettingNormalState', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'ledSettingNormalState', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.ledSettingEventState = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'ledSettingEventState', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'ledSettingEventState', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.ledSettingOperation = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'ledSettingOperation', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'ledSettingOperation', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.installationOffset = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'installationOffset', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'installationOffset', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.advertiseSetting = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'advertiseSetting', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'advertiseSetting', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.memoryReset = {
            write: (data) => {
                return _it.execute({ command: 'write', address: 'memoryReset', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.modeChange = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'modeChange', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'modeChange', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.accelerationLoggerControl = {
            write: (data) => {
                return _it.execute({ command: 'write', address: 'accelerationLoggerControl', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.accelerationLoggerStatus = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'accelerationLoggerStatus', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'accelerationLoggerStatus', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.latestTimeCounter = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'latestTimeCounter', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.timeSetting = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'timeSetting', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'timeSetting', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.memoryStorageInterval = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'memoryStorageInterval', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'memoryStorageInterval', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.eventPatternSensor1 = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'eventPatternSensor1', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'eventPatternSensor1', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.eventPatternSensor2 = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'eventPatternSensor2', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'eventPatternSensor2', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.eventPatternAcceleration = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'eventPatternAcceleration', data }).then((responsePayloads) => responsePayloads[0].data);
            },
            write: (data) => {
                return _it.execute({ command: 'write', address: 'eventPatternAcceleration', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.errorStatus = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'errorStatus', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.mountingOrientation = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'mountingOrientation', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        it.deviceInformation = {
            read: (data) => {
                return _it.execute({ command: 'read', address: 'deviceInformation', data }).then((responsePayloads) => responsePayloads[0].data);
            },
        };
        return it;

    };
    return { Controller };

})();

module.exports = { Controller };
