/* eslint-env mocha */

'use strict';

const expect = require('expect');

const ChannelVirtual = require('./channel-virtual');

const Controller = require('../lib/controller');

describe('Controller', () => {

    const controller = Controller({
        path: ChannelVirtual,
    });

    describe('.privateScope()', () => {

        it('<empty>', () => {
            const privateScope = controller.privateScope();
            expect(privateScope).toBeInstanceOf(Object);
        });

    });

    describe('.sleep()', () => {

        it('<empty>', async () => {
            {
                const { error } = await controller.sleep(0).then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
        });

    });

    describe('.open()', () => {

        it('<empty>', async () => {
            {
                const { error } = await controller.open().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
            {
                const { error } = await controller.open().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
        });

    });

    describe('.memoryDataLong.read(data)', () => {

        it('<empty>', () => {
            return controller.memoryDataLong.read({
                memoryIndexStart: 0,
                memoryIndexEnd: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.memoryDataShort.read(data)', () => {

        it('<empty>', () => {
            return controller.memoryDataShort.read({
                memoryIndexStart: 0,
                memoryIndexEnd: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestDataLong.read(data)', () => {

        it('<empty>', () => {
            return controller.latestDataLong.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestDataShort.read(data)', () => {

        it('<empty>', () => {
            return controller.latestDataShort.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.accelerationMemoryDataHeader.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationMemoryDataHeader.read({
                accelerationDataType: 0,
                requestAccelerationMemoryIndex: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.accelerationMemoryDataData.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationMemoryDataData.read({
                accelerationDataType: 0,
                requestAccelerationMemoryIndex: 0,
                requestPageStart: 0,
                requestPageEnd: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestMemoryInformation.read(data)', () => {

        it('<empty>', () => {
            return controller.latestMemoryInformation.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestSensingData.read(data)', () => {

        it('<empty>', () => {
            return controller.latestSensingData.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestCalculationData.read(data)', () => {

        it('<empty>', () => {
            return controller.latestCalculationData.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestSensingFlag.read(data)', () => {

        it('<empty>', () => {
            return controller.latestSensingFlag.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestCalculationFlag.read(data)', () => {

        it('<empty>', () => {
            return controller.latestCalculationFlag.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestAccelerationStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.latestAccelerationStatus.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.vibrationCount.read(data)', () => {

        it('<empty>', () => {
            return controller.vibrationCount.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingNormalState.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingNormalState.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingNormalState.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingNormalState.write({
                displayRuleNormalState: 0,
                intensityOfLedRed: 0,
                intensityOfLedGreen: 0,
                intensityOfLedBlue: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingEventState.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingEventState.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingEventState.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingEventState.write({
                displayRuleEventState: 0,
                intensityOfLedRed: 0,
                intensityOfLedGreen: 0,
                intensityOfLedBlue: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingOperation.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingOperation.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.ledSettingOperation.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingOperation.write({
                startUp: 0,
                error: 0,
                connection: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.installationOffset.read(data)', () => {

        it('<empty>', () => {
            return controller.installationOffset.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.installationOffset.write(data)', () => {

        it('<empty>', () => {
            return controller.installationOffset.write({
                installationOffsetEnableDisable: 0,
                temperatureInstallationOffset: 0,
                relativeHumidityInstallationOffset: 0,
                ambientLightInstallationGain: 0,
                barometricPressureInstallationOffset: 0,
                soundNoiseInstallationOffset: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.advertiseSetting.read(data)', () => {

        it('<empty>', () => {
            return controller.advertiseSetting.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.advertiseSetting.write(data)', () => {

        it('<empty>', () => {
            return controller.advertiseSetting.write({
                advertisingInterval: 0,
                advertisingMode: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.memoryReset.write(data)', () => {

        it('<empty>', () => {
            return controller.memoryReset.write({
                memoryReset: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.modeChange.read(data)', () => {

        it('<empty>', () => {
            return controller.modeChange.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.modeChange.write(data)', () => {

        it('<empty>', () => {
            return controller.modeChange.write({
                modeChange: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerControl.write(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerControl.write({
                loggerCondition: 0,
                rangeOfDetection: 0,
                odrSetting: 0,
                startPage: 0,
                endPage: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerStatus.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerStatus.write(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerStatus.write({
                loggerStatus: 0,
                runningPage: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.latestTimeCounter.read(data)', () => {

        it('<empty>', () => {
            return controller.latestTimeCounter.read({
                timeCounter: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.timeSetting.read(data)', () => {

        it('<empty>', () => {
            return controller.timeSetting.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.timeSetting.write(data)', () => {

        it('<empty>', () => {
            return controller.timeSetting.write({
                timeSetting: BigInt(0),
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.memoryStorageInterval.read(data)', () => {

        it('<empty>', () => {
            return controller.memoryStorageInterval.read({
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.memoryStorageInterval.write(data)', () => {

        it('<empty>', () => {
            return controller.memoryStorageInterval.write({
                memoryStorageInterval: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor1.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor1.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor1.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor1.write({
                eventEnableDisable: 0,
                simpleThresholdUpperLimit1: 0,
                simpleThresholdUpperLimit2: 0,
                simpleThresholdLowerLimit1: 0,
                simpleThresholdLowerLimit2: 0,
                changeThresholdRise1: 0,
                changeThresholdRise2: 0,
                changeThresholdDecline1: 0,
                changeThresholdDecline2: 0,
                reserveForFutureUse: 0,
                reserveForFutureUse: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor2.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor2.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor2.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor2.write({
                averageValueThresholdUpper: 0,
                averageValueThresholdLower: 0,
                peakToPeakThresholdUpper: 0,
                peakToPeakThresholdLower: 0,
                intervalDifferenceThresholdUpper: 0,
                intervalDifferenceThresholdLower: 0,
                baseDifferenceThresholdUpper: 0,
                baseDifferenceThresholdLower: 0,
                averageValueCount: 0,
                peakToPeakCount: 0,
                intervalDifferenceCount: 0,
                baseDifferenceCount: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternAcceleration.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternAcceleration.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.eventPatternAcceleration.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternAcceleration.write({
                eventEnableDisable: 0,
                simpleThresholdUpperLimit1: 0,
                simpleThresholdUpperLimit2: 0,
                changeThresholdRise1: 0,
                changeThresholdRise2: 0,
            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.errorStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.errorStatus.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.mountingOrientation.read(data)', () => {

        it('<empty>', () => {
            return controller.mountingOrientation.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.deviceInformation.read(data)', () => {

        it('<empty>', () => {
            return controller.deviceInformation.read({

            }).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
                expect(value).not.toBe(undefined);
            });
        });

    });

    describe('.close()', () => {

        it('<empty>', async () => {
            {
                const { error } = await controller.close().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
            {
                const { error } = await controller.close().then((value) => ({ value }), (error) => ({ error }));
                expect(error).toBe(undefined);
            }
        });

    });


});
