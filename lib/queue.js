/**
 * node-omron-2jcie-bu/lib/queue.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

require('./annotations');

/**
 * @private
 */
const Duplex = require('stream').Duplex;

/**
 * @public
 * @function
 * @return {Queue}
 */
const Queue = () => {

    /**
     * @private
     */
    const privateScope = {};

    /**
     * @private
     * @type {number}
     */
    privateScope.defaultTimeout = 1000;

    /**
     * @private
     * @type {Array<Task>}
     */
    privateScope.taskQueue = [];

    /**
     * @private
     * @type {Task}
     */
    privateScope.task = null;

    /**
     * @private
     * @type {Duplex}
     */
    privateScope.stream = new Duplex({
        objectMode: true,
        write: (chunk, _encoding, callback) => {
            privateScope.endTask(null, chunk);
            callback();
        },
        read: (_size) => {
            // noop
        },
    });

    /**
     * @private
     * @function
     * @return {void}
     */
    privateScope.beginTask = () => {
        privateScope.task.timeoutTimer = setTimeout(() => {
            privateScope.task.timeoutTimer = null;
            privateScope.endTask({
                timeout: true,
            }, null);
        }, privateScope.task.timeout);
        privateScope.stream.push(privateScope.task.commandPayload);
    };

    /**
     * @private
     * @function
     * @param {any} error
     * @param {ResponsePayload} responsePayload
     * @return {void}
     */
    privateScope.endTask = (error, responsePayload) => {
        if (privateScope.task == null) {
            return;
        }
        if (privateScope.task.timeoutTimer != null) {
            clearTimeout(privateScope.task.timeoutTimer);
            privateScope.task.timeoutTimer = null;
        }
        privateScope.task.error = error;
        privateScope.task.responsePayload = responsePayload;
        if (privateScope.task.error != null) {
            privateScope.task.reject(privateScope.task.error);
        } else {
            switch (privateScope.task.responsePayload.command) {
                case 'read': {
                    privateScope.task.resolve(privateScope.task.responsePayload);
                    break;
                }
                case 'write': {
                    privateScope.task.resolve(privateScope.task.responsePayload);
                    break;
                }
                case 'readError': {
                    privateScope.task.reject(privateScope.task.responsePayload);
                    break;
                }
                case 'writeError': {
                    privateScope.task.reject(privateScope.task.responsePayload);
                    break;
                }
                case 'unknown': {
                    privateScope.task.reject(privateScope.task.responsePayload);
                    break;
                }
            }
        }
        privateScope.task = null;
        privateScope.dequeue();
    };

    /**
     * @private
     * @function
     * @return {void}
     */
    privateScope.dequeue = () => {
        process.nextTick(() => {
            if (privateScope.task != null) {
                return;
            }
            if (privateScope.taskQueue.length == 0) {
                return;
            }
            privateScope.task = privateScope.taskQueue.shift();
            privateScope.beginTask();
        });
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
     * @return {Stream}
     */
    publicScope.input = () => {
        return privateScope.stream;
    };

    /**
     * @public
     * @function
     * @return {Stream}
     */
    publicScope.output = () => {
        return privateScope.stream;
    };

    /**
     * @public
     * @function
     * @param {CommandPayload} commandPayload
     * @return {Promise<ResponsePayload>}
     */
    publicScope.enqueue = (commandPayload) => {
        const task = {};
        task.commandPayload = commandPayload;
        task.timeout = privateScope.defaultTimeout;
        task.timeoutTimer = null;
        task.error = null;
        task.responsePayload = null;
        task.resolve = null;
        task.reject = null;
        task.promise = new Promise((resolve, reject) => {
            task.resolve = resolve;
            task.reject = reject;
            privateScope.taskQueue.push(task);
            privateScope.dequeue();
        });
        return task.promise;
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Queue;
