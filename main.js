/**
 * node-omron-2jcie-bu/main.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const readline = require('readline');

const omron2jciebu = require('./');

async function main() {

    const serialPortPath = process.argv[2] || '/dev/ttyUSB0';

    const keyboard = readline.createInterface(process.stdin);

    const controller = omron2jciebu({
        path: serialPortPath,
    });

    await controller.open();

    await controller.ledSettingNormalState.write({
        displayRuleNormalState: 0x0001,
        intensityOfLedRed: 0,
        intensityOfLedGreen: 255,
        intensityOfLedBlue: 0
    });

    await new Promise((resolve) => {

        process.on('SIGINT', () => {
            console.log(new Date(), 'process', 'SIGINT');
            resolve();
        });

        keyboard.on('close', () => {
            console.log(new Date(), 'keyboard', 'close');
            resolve();
        });

        keyboard.on('line', async (line) => {
            const tokens = line.trim().split(' ');
            const command = tokens[0].toLowerCase();
            if (command == 'quit') {
                keyboard.close();
            }
            if (command == 'off') {
                console.log(await controller.ledSettingNormalState.write({
                    displayRuleNormalState: 0,
                    intensityOfLedRed: 0,
                    intensityOfLedGreen: 0,
                    intensityOfLedBlue: 0,
                }));
            }
            if (command == 'white') {
                console.log(await controller.ledSettingNormalState.write({
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 255,
                }));
            }
            if (command == 'red') {
                console.log(await controller.ledSettingNormalState.write({
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 255,
                    intensityOfLedGreen: 0,
                    intensityOfLedBlue: 0,
                }));
            }
            if (command == 'green') {
                console.log(await controller.ledSettingNormalState.write({
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 0,
                    intensityOfLedGreen: 255,
                    intensityOfLedBlue: 0,
                }));
            }
            if (command == 'blue') {
                console.log(await controller.ledSettingNormalState.write({
                    displayRuleNormalState: 1,
                    intensityOfLedRed: 0,
                    intensityOfLedGreen: 0,
                    intensityOfLedBlue: 255,
                }));
            }
            if (command == 'data') {
                console.log(await controller.latestDataLong.read({}));
            }
        });

    });

    await controller.ledSettingNormalState.write({
        displayRuleNormalState: 0x0001,
        intensityOfLedRed: 255,
        intensityOfLedGreen: 0,
        intensityOfLedBlue: 0
    });

    await controller.close();

    process.exit(0);

}

main();
