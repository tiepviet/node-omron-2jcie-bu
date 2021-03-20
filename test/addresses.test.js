/**
 * node-omron-2jcie-bu/test/addresses.test.js
 * Copyright (C) e53e04ac
 * MIT License
 */

// @ts-nocheck
/* eslint-env mocha */

'use strict';

const expect = require('expect');

const { Addresses } = require('../src/lib/addresses');

describe('Addresses', () => {

    describe('.AddressesConstructorOptions()', () => {

        it('<type test>', () => {
            const _options = Addresses.AddressesConstructorOptions();
            expect(_options).toBeInstanceOf(Object);
        });

    });

    describe('._Addresses()', () => {

        it('<type test>', () => {
            const _it = Addresses._Addresses();
            expect(_it).toBeInstanceOf(Object);
        });

    });

    describe('.find(value)', () => {

        it('"memoryDataLong"', () => {
            const addressType = Addresses.find('memoryDataLong');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x500E));
        });

        it('0x500E', () => {
            const addressType = Addresses.find(0x500E);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('memoryDataLong'));
        });

        it('"memoryDataShort"', () => {
            const addressType = Addresses.find('memoryDataShort');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x500F));
        });

        it('0x500F', () => {
            const addressType = Addresses.find(0x500F);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('memoryDataShort'));
        });

        it('"latestDataLong"', () => {
            const addressType = Addresses.find('latestDataLong');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5021));
        });

        it('0x5021', () => {
            const addressType = Addresses.find(0x5021);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestDataLong'));
        });

        it('"latestDataShort"', () => {
            const addressType = Addresses.find('latestDataShort');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5022));
        });

        it('0x5022', () => {
            const addressType = Addresses.find(0x5022);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestDataShort'));
        });

        it('"accelerationMemoryDataHeader"', () => {
            const addressType = Addresses.find('accelerationMemoryDataHeader');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x503E));
        });

        it('0x503E', () => {
            const addressType = Addresses.find(0x503E);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('accelerationMemoryDataHeader'));
        });

        it('"accelerationMemoryDataData"', () => {
            const addressType = Addresses.find('accelerationMemoryDataData');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x503F));
        });

        it('0x503F', () => {
            const addressType = Addresses.find(0x503F);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('accelerationMemoryDataData'));
        });

        it('"latestMemoryInformation"', () => {
            const addressType = Addresses.find('latestMemoryInformation');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5004));
        });

        it('0x5004', () => {
            const addressType = Addresses.find(0x5004);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestMemoryInformation'));
        });

        it('"latestSensingData"', () => {
            const addressType = Addresses.find('latestSensingData');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5012));
        });

        it('0x5012', () => {
            const addressType = Addresses.find(0x5012);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestSensingData'));
        });

        it('"latestCalculationData"', () => {
            const addressType = Addresses.find('latestCalculationData');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5013));
        });

        it('0x5013', () => {
            const addressType = Addresses.find(0x5013);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestCalculationData'));
        });

        it('"latestSensingFlag"', () => {
            const addressType = Addresses.find('latestSensingFlag');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5014));
        });

        it('0x5014', () => {
            const addressType = Addresses.find(0x5014);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestSensingFlag'));
        });

        it('"latestCalculationFlag"', () => {
            const addressType = Addresses.find('latestCalculationFlag');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5015));
        });

        it('0x5015', () => {
            const addressType = Addresses.find(0x5015);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestCalculationFlag'));
        });

        it('"latestAccelerationStatus"', () => {
            const addressType = Addresses.find('latestAccelerationStatus');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5016));
        });

        it('0x5016', () => {
            const addressType = Addresses.find(0x5016);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestAccelerationStatus'));
        });

        it('"vibrationCount"', () => {
            const addressType = Addresses.find('vibrationCount');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5031));
        });

        it('0x5031', () => {
            const addressType = Addresses.find(0x5031);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('vibrationCount'));
        });

        it('"ledSettingNormalState"', () => {
            const addressType = Addresses.find('ledSettingNormalState');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5111));
        });

        it('0x5111', () => {
            const addressType = Addresses.find(0x5111);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('ledSettingNormalState'));
        });

        it('"ledSettingEventState"', () => {
            const addressType = Addresses.find('ledSettingEventState');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5112));
        });

        it('0x5112', () => {
            const addressType = Addresses.find(0x5112);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('ledSettingEventState'));
        });

        it('"ledSettingOperation"', () => {
            const addressType = Addresses.find('ledSettingOperation');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5113));
        });

        it('0x5113', () => {
            const addressType = Addresses.find(0x5113);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('ledSettingOperation'));
        });

        it('"installationOffset"', () => {
            const addressType = Addresses.find('installationOffset');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5114));
        });

        it('0x5114', () => {
            const addressType = Addresses.find(0x5114);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('installationOffset'));
        });

        it('"advertiseSetting"', () => {
            const addressType = Addresses.find('advertiseSetting');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5115));
        });

        it('0x5115', () => {
            const addressType = Addresses.find(0x5115);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('advertiseSetting'));
        });

        it('"memoryReset"', () => {
            const addressType = Addresses.find('memoryReset');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5116));
        });

        it('0x5116', () => {
            const addressType = Addresses.find(0x5116);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('memoryReset'));
        });

        it('"modeChange"', () => {
            const addressType = Addresses.find('modeChange');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5117));
        });

        it('0x5117', () => {
            const addressType = Addresses.find(0x5117);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('modeChange'));
        });

        it('"accelerationLoggerControl"', () => {
            const addressType = Addresses.find('accelerationLoggerControl');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5118));
        });

        it('0x5118', () => {
            const addressType = Addresses.find(0x5118);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('accelerationLoggerControl'));
        });

        it('"accelerationLoggerStatus"', () => {
            const addressType = Addresses.find('accelerationLoggerStatus');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5119));
        });

        it('0x5119', () => {
            const addressType = Addresses.find(0x5119);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('accelerationLoggerStatus'));
        });

        it('"latestTimeCounter"', () => {
            const addressType = Addresses.find('latestTimeCounter');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5201));
        });

        it('0x5201', () => {
            const addressType = Addresses.find(0x5201);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('latestTimeCounter'));
        });

        it('"timeSetting"', () => {
            const addressType = Addresses.find('timeSetting');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5202));
        });

        it('0x5202', () => {
            const addressType = Addresses.find(0x5202);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('timeSetting'));
        });

        it('"memoryStorageInterval"', () => {
            const addressType = Addresses.find('memoryStorageInterval');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5203));
        });

        it('0x5203', () => {
            const addressType = Addresses.find(0x5203);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('memoryStorageInterval'));
        });

        it('"eventPatternSensor1"', () => {
            const addressType = Addresses.find('eventPatternSensor1');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5211));
        });

        it('0x5211', () => {
            const addressType = Addresses.find(0x5211);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('eventPatternSensor1'));
        });

        it('"eventPatternSensor2"', () => {
            const addressType = Addresses.find('eventPatternSensor2');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5212));
        });

        it('0x5212', () => {
            const addressType = Addresses.find(0x5212);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('eventPatternSensor2'));
        });

        it('"eventPatternAcceleration"', () => {
            const addressType = Addresses.find('eventPatternAcceleration');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5226));
        });

        it('0x5226', () => {
            const addressType = Addresses.find(0x5226);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('eventPatternAcceleration'));
        });

        it('"errorStatus"', () => {
            const addressType = Addresses.find('errorStatus');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5401));
        });

        it('0x5401', () => {
            const addressType = Addresses.find(0x5401);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('errorStatus'));
        });

        it('"mountingOrientation"', () => {
            const addressType = Addresses.find('mountingOrientation');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x5402));
        });

        it('0x5402', () => {
            const addressType = Addresses.find(0x5402);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('mountingOrientation'));
        });

        it('"deviceInformation"', () => {
            const addressType = Addresses.find('deviceInformation');
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find(0x180A));
        });

        it('0x180A', () => {
            const addressType = Addresses.find(0x180A);
            expect(addressType).toBeInstanceOf(Object);
            expect(addressType).toBe(Addresses.find('deviceInformation'));
        });

        it('<empty>', () => {
            expect(Addresses.find()).toBe(undefined);
            expect(Addresses.find('')).toBe(undefined);
            expect(Addresses.find(0x0000)).toBe(undefined);
        });

    });

    describe('AddressType', () => {

        const checkDataType = (dataType) => {
            const length = dataType.length;
            let lengthCheck = 0;
            for (const fieldType of dataType.fieldTypes) {
                const fieldLength = fieldType.end - fieldType.begin + 1;
                lengthCheck += fieldLength;
            }
            const lengthMatch = lengthCheck === length;
            return lengthMatch;
        };

        describe('"memoryDataLong"', () => {
            const addressType = Addresses.find('memoryDataLong');
            it('.name', () => {
                expect(addressType.name).toBe('memoryDataLong');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x500e);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(8);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(60);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(27);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"memoryDataShort"', () => {
            const addressType = Addresses.find('memoryDataShort');
            it('.name', () => {
                expect(addressType.name).toBe('memoryDataShort');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x500f);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(8);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(32);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(11);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestDataLong"', () => {
            const addressType = Addresses.find('latestDataLong');
            it('.name', () => {
                expect(addressType.name).toBe('latestDataLong');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5021);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(49);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(26);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestDataShort"', () => {
            const addressType = Addresses.find('latestDataShort');
            it('.name', () => {
                expect(addressType.name).toBe('latestDataShort');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5022);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(21);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(10);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"accelerationMemoryDataHeader"', () => {
            const addressType = Addresses.find('accelerationMemoryDataHeader');
            it('.name', () => {
                expect(addressType.name).toBe('accelerationMemoryDataHeader');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x503e);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(2);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(60);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(27);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"accelerationMemoryDataData"', () => {
            const addressType = Addresses.find('accelerationMemoryDataData');
            it('.name', () => {
                expect(addressType.name).toBe('accelerationMemoryDataData');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x503f);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(6);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(228);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(114);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestMemoryInformation"', () => {
            const addressType = Addresses.find('latestMemoryInformation');
            it('.name', () => {
                expect(addressType.name).toBe('latestMemoryInformation');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5004);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(8);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestSensingData"', () => {
            const addressType = Addresses.find('latestSensingData');
            it('.name', () => {
                expect(addressType.name).toBe('latestSensingData');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5012);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(17);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(8);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestCalculationData"', () => {
            const addressType = Addresses.find('latestCalculationData');
            it('.name', () => {
                expect(addressType.name).toBe('latestCalculationData');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5013);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(18);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(10);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestSensingFlag"', () => {
            const addressType = Addresses.find('latestSensingFlag');
            it('.name', () => {
                expect(addressType.name).toBe('latestSensingFlag');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5014);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(17);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(8);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestCalculationFlag"', () => {
            const addressType = Addresses.find('latestCalculationFlag');
            it('.name', () => {
                expect(addressType.name).toBe('latestCalculationFlag');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5015);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(8);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(6);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"latestAccelerationStatus"', () => {
            const addressType = Addresses.find('latestAccelerationStatus');
            it('.name', () => {
                expect(addressType.name).toBe('latestAccelerationStatus');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5016);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(15);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(9);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"vibrationCount"', () => {
            const addressType = Addresses.find('vibrationCount');
            it('.name', () => {
                expect(addressType.name).toBe('vibrationCount');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5031);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(8);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"ledSettingNormalState"', () => {
            const addressType = Addresses.find('ledSettingNormalState');
            it('.name', () => {
                expect(addressType.name).toBe('ledSettingNormalState');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5111);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(5);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(5);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(5);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"ledSettingEventState"', () => {
            const addressType = Addresses.find('ledSettingEventState');
            it('.name', () => {
                expect(addressType.name).toBe('ledSettingEventState');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5112);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(5);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(5);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(5);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(4);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"ledSettingOperation"', () => {
            const addressType = Addresses.find('ledSettingOperation');
            it('.name', () => {
                expect(addressType.name).toBe('ledSettingOperation');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5113);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(3);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(3);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(3);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(3);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(3);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(3);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"installationOffset"', () => {
            const addressType = Addresses.find('installationOffset');
            it('.name', () => {
                expect(addressType.name).toBe('installationOffset');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5114);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(13);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(6);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(13);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(6);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(13);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(6);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"advertiseSetting"', () => {
            const addressType = Addresses.find('advertiseSetting');
            it('.name', () => {
                expect(addressType.name).toBe('advertiseSetting');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5115);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(3);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(3);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(3);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"memoryReset"', () => {
            const addressType = Addresses.find('memoryReset');
            it('.name', () => {
                expect(addressType.name).toBe('memoryReset');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5116);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType).toBe(null);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType).toBe(null);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(1);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(1);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"modeChange"', () => {
            const addressType = Addresses.find('modeChange');
            it('.name', () => {
                expect(addressType.name).toBe('modeChange');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5117);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(1);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(1);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(1);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"accelerationLoggerControl"', () => {
            const addressType = Addresses.find('accelerationLoggerControl');
            it('.name', () => {
                expect(addressType.name).toBe('accelerationLoggerControl');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5118);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType).toBe(null);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType).toBe(null);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(7);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(7);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"accelerationLoggerStatus"', () => {
            const addressType = Addresses.find('accelerationLoggerStatus');
            it('.name', () => {
                expect(addressType.name).toBe('accelerationLoggerStatus');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5119);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(3);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(3);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(3);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(2);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"latestTimeCounter"', () => {
            const addressType = Addresses.find('latestTimeCounter');
            it('.name', () => {
                expect(addressType.name).toBe('latestTimeCounter');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5201);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(8);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"timeSetting"', () => {
            const addressType = Addresses.find('timeSetting');
            it('.name', () => {
                expect(addressType.name).toBe('timeSetting');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5202);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(8);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(8);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(8);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"memoryStorageInterval"', () => {
            const addressType = Addresses.find('memoryStorageInterval');
            it('.name', () => {
                expect(addressType.name).toBe('memoryStorageInterval');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5203);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(2);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(2);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(2);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"eventPatternSensor1"', () => {
            const addressType = Addresses.find('eventPatternSensor1');
            it('.name', () => {
                expect(addressType.name).toBe('eventPatternSensor1');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5211);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(20);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(11);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(20);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(11);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(20);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(11);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"eventPatternSensor2"', () => {
            const addressType = Addresses.find('eventPatternSensor2');
            it('.name', () => {
                expect(addressType.name).toBe('eventPatternSensor2');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5212);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(20);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(12);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(20);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(12);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(20);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(12);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"eventPatternAcceleration"', () => {
            const addressType = Addresses.find('eventPatternAcceleration');
            it('.name', () => {
                expect(addressType.name).toBe('eventPatternAcceleration');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5226);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(9);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType.length).toBe(9);
                expect(addressType.writeCommandDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.writeCommandDataType)).toBe(true);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType.length).toBe(9);
                expect(addressType.writeResponseDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.writeResponseDataType)).toBe(true);
            });
        });

        describe('"errorStatus"', () => {
            const addressType = Addresses.find('errorStatus');
            it('.name', () => {
                expect(addressType.name).toBe('errorStatus');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5401);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(11);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(11);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"mountingOrientation"', () => {
            const addressType = Addresses.find('mountingOrientation');
            it('.name', () => {
                expect(addressType.name).toBe('mountingOrientation');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x5402);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(1);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(1);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

        describe('"deviceInformation"', () => {
            const addressType = Addresses.find('deviceInformation');
            it('.name', () => {
                expect(addressType.name).toBe('deviceInformation');
            });
            it('.originalName', () => {
                expect(addressType.originalName).toBeDefined();
            });
            it('.value', () => {
                expect(addressType.value).toBe(0x180a);
            });
            it('.readCommandDataType', () => {
                expect(addressType.readCommandDataType.length).toBe(0);
                expect(addressType.readCommandDataType.fieldTypes.length).toBe(0);
                expect(checkDataType(addressType.readCommandDataType)).toBe(true);
            });
            it('.readResponseDataType', () => {
                expect(addressType.readResponseDataType.length).toBe(35);
                expect(addressType.readResponseDataType.fieldTypes.length).toBe(5);
                expect(checkDataType(addressType.readResponseDataType)).toBe(true);
            });
            it('.writeCommandDataType', () => {
                expect(addressType.writeCommandDataType).toBe(null);
            });
            it('.writeResponseDataType', () => {
                expect(addressType.writeResponseDataType).toBe(null);
            });
        });

    });

});
