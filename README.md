# node-omron-2jcie-bu

[![npm version](https://badge.fury.io/js/%40e53e04ac%2Fnode-omron-2jcie-bu.svg)](https://badge.fury.io/js/%40e53e04ac%2Fnode-omron-2jcie-bu)
[![Build Status](https://travis-ci.org/e53e04ac/node-omron-2jcie-bu.svg?branch=master)](https://travis-ci.org/e53e04ac/node-omron-2jcie-bu)
[![Coverage Status](https://coveralls.io/repos/github/e53e04ac/node-omron-2jcie-bu/badge.svg?branch=master)](https://coveralls.io/github/e53e04ac/node-omron-2jcie-bu?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9abd386982e944d0b52633f78b60fcc8)](https://app.codacy.com/manual/e53e04ac/node-omron-2jcie-bu?utm_source=github.com&utm_medium=referral&utm_content=e53e04ac/node-omron-2jcie-bu&utm_campaign=Badge_Grade_Dashboard)
[![dependencies Status](https://david-dm.org/e53e04ac/node-omron-2jcie-bu/status.svg)](https://david-dm.org/e53e04ac/node-omron-2jcie-bu)
[![devDependencies Status](https://david-dm.org/e53e04ac/node-omron-2jcie-bu/dev-status.svg)](https://david-dm.org/e53e04ac/node-omron-2jcie-bu?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[OMRON 2JCIE-BU](https://www.fa.omron.co.jp/products/family/3724/) Controller for Node.js (**UNOFFICIAL**)

-----

## Requirements

- [Raspberry Pi](https://www.raspberrypi.org/)

- [OMRON 2JCIE-BU](https://www.fa.omron.co.jp/products/family/3724/)

- [Node.js](https://nodejs.org/en/) (v10, v12, v13, v14)

-----

## Installation

run the command:

~~~~~ sh
npm install @e53e04ac/node-omron-2jcie-bu
~~~~~

-----

## Examples

### Set LED light color

1. save a file: `example-set-led-light-color.js`

    ~~~~~ js
    const omron2jciebu = require('@e53e04ac/node-omron-2jcie-bu');

    (async () => {

        const controller = omron2jciebu({ path: '/dev/ttyUSB0' });

        await controller.open();

        await controller.ledSettingNormalState.write({
            displayRuleNormalState: 0x0001,
            intensityOfLedRed: 0,
            intensityOfLedGreen: 255,
            intensityOfLedBlue: 0,
        });

        await controller.close();

    })();
    ~~~~~

2. execute commands and the script

    ~~~~~ sh
    sudo modprobe ftdi_sio
    sudo chmod 777 /sys/bus/usb-serial/drivers/ftdi_sio/new_id
    sudo echo 0590 00d4 > /sys/bus/usb-serial/drivers/ftdi_sio/new_id

    node example-set-led-light-color.js
    ~~~~~

    the LED light will turn green.

### Get sensor data

1. save a file: `example-get-sensor-data.js`

    ~~~~~ js
    const omron2jciebu = require('@e53e04ac/node-omron-2jcie-bu');

    (async () => {

        const controller = omron2jciebu({ path: '/dev/ttyUSB0' });

        await controller.open();

        const latestData = await controller.latestDataLong.read({});

        console.log(latestData);

        await controller.close();

    })();
    ~~~~~

2. execute commands and the script

    ~~~~~ sh
    sudo modprobe ftdi_sio
    sudo chmod 777 /sys/bus/usb-serial/drivers/ftdi_sio/new_id
    sudo echo 0590 00d4 > /sys/bus/usb-serial/drivers/ftdi_sio/new_id

    node example-get-sensor-data.js
    ~~~~~

    you will get a sensor data, like this:

    ~~~~~
    {
        sequenceNumber: 77,
        temperature: { raw: 3172, value: 31.720000000000002, unit: 'degC' },
        relativeHumidity: { raw: 4418, value: 44.18, unit: '%RH' },
        ambientLight: { raw: 219, value: 219, unit: 'lx' },
        barometricPressure: { raw: 1009238, value: 1009.238, unit: 'hPa' },
        soundNoise: { raw: 6503, value: 65.03, unit: 'dB' },
        etvoc: { raw: 168, value: 168, unit: 'ppb' },
        eco2: { raw: 1494, value: 1494, unit: 'ppm' },
        discomfortIndex: { raw: 7954, value: 79.54, unit: null },
        heatStroke: { raw: 2623, value: 26.23, unit: 'degC' },
        vibrationInformation: { raw: 0, value: 'none' },
        siValue: { raw: 0, value: 0, unit: 'kine' },
        pga: { raw: 0, value: 0, unit: 'gal' },
        seismicIntensity: { raw: 0, value: 0, unit: null },
        temperatureFlag: 0,
        relativeHumidityFlag: 0,
        ambientLightFlag: 0,
        barometricPressureFlag: 0,
        soundNoiseFlag: 0,
        etvocFlag: 0,
        eco2Flag: 0,
        discomfortIndexFlag: 0,
        heatStrokeFlag: 0,
        siValueFlag: 0,
        pgaFlag: 0,
        seismicIntensityFlag: 0
    }
    ~~~~~

-----

## Documentation

- [API](docs/api)

- [Internal API](docs/internal-api)

-----

## License

- [MIT](LICENSE)

-----
