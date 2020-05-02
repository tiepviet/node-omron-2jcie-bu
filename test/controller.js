'use strict';

const expect = require('expect');

const Controller = require('../lib/controller');

describe('Controller', () => {

    const controller = Controller({ path: '/dev/ttys000' });

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
            return controller.memoryDataLong.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.memoryDataShort.read(data)', () => {

        it('<empty>', () => {
            return controller.memoryDataShort.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestDataLong.read(data)', () => {

        it('<empty>', () => {
            return controller.latestDataLong.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestDataShort.read(data)', () => {

        it('<empty>', () => {
            return controller.latestDataShort.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.accelerationMemoryDataHeader.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationMemoryDataHeader.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.accelerationMemoryDataData.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationMemoryDataData.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestMemoryInformation.read(data)', () => {

        it('<empty>', () => {
            return controller.latestMemoryInformation.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestSensingData.read(data)', () => {

        it('<empty>', () => {
            return controller.latestSensingData.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestCalculationData.read(data)', () => {

        it('<empty>', () => {
            return controller.latestCalculationData.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestSensingFlag.read(data)', () => {

        it('<empty>', () => {
            return controller.latestSensingFlag.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestCalculationFlag.read(data)', () => {

        it('<empty>', () => {
            return controller.latestCalculationFlag.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestAccelerationStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.latestAccelerationStatus.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.vibrationCount.read(data)', () => {

        it('<empty>', () => {
            return controller.vibrationCount.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingNormalState.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingNormalState.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingNormalState.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingNormalState.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingEventState.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingEventState.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingEventState.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingEventState.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingOperation.read(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingOperation.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.ledSettingOperation.write(data)', () => {

        it('<empty>', () => {
            return controller.ledSettingOperation.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.installationOffset.read(data)', () => {

        it('<empty>', () => {
            return controller.installationOffset.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.installationOffset.write(data)', () => {

        it('<empty>', () => {
            return controller.installationOffset.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.advertiseSetting.read(data)', () => {

        it('<empty>', () => {
            return controller.advertiseSetting.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.advertiseSetting.write(data)', () => {

        it('<empty>', () => {
            return controller.advertiseSetting.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.memoryReset.write(data)', () => {

        it('<empty>', () => {
            return controller.memoryReset.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.modeChange.read(data)', () => {

        it('<empty>', () => {
            return controller.modeChange.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.modeChange.write(data)', () => {

        it('<empty>', () => {
            return controller.modeChange.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerControl.write(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerControl.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerStatus.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.accelerationLoggerStatus.write(data)', () => {

        it('<empty>', () => {
            return controller.accelerationLoggerStatus.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.latestTimeCounter.read(data)', () => {

        it('<empty>', () => {
            return controller.latestTimeCounter.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.timeSetting.read(data)', () => {

        it('<empty>', () => {
            return controller.timeSetting.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.timeSetting.write(data)', () => {

        it('<empty>', () => {
            return controller.timeSetting.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.memoryStorageInterval.read(data)', () => {

        it('<empty>', () => {
            return controller.memoryStorageInterval.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.memoryStorageInterval.write(data)', () => {

        it('<empty>', () => {
            return controller.memoryStorageInterval.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor1.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor1.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor1.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor1.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor2.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor2.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternSensor2.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternSensor2.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternAcceleration.read(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternAcceleration.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.eventPatternAcceleration.write(data)', () => {

        it('<empty>', () => {
            return controller.eventPatternAcceleration.write({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.errorStatus.read(data)', () => {

        it('<empty>', () => {
            return controller.errorStatus.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.mountingOrientation.read(data)', () => {

        it('<empty>', () => {
            return controller.mountingOrientation.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
            });
        });

    });

    describe('.deviceInformation.read(data)', () => {

        it('<empty>', () => {
            return controller.deviceInformation.read({}).then((value) => ({ value }), (error) => ({ error })).then(({ error, value }) => {
                expect(error).toBe(undefined);
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
