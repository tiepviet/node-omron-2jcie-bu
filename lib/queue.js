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
 * @private
 */
const Utilities = require('./utilities');

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
    privateScope.timeoutInterval = 1000;

    /**
     * @private
     * @type {TaskArray}
     */
    privateScope.pendingTasks = [];

    /**
     * @private
     * @type {Task}
     */
    privateScope.currentTask = null;

    /**
     * @private
     * @type {Duplex}
     */
    privateScope.stream = new Duplex({
        readableObjectMode: true,
        writableObjectMode: true,
        write: (chunk, _encoding, callback) => {
            if (privateScope.currentTask != null) {
                privateScope.currentTask.pong(null, chunk);
            }
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
    privateScope.dequeueTaskIfPossible = () => {
        process.nextTick(() => {
            if (privateScope.currentTask == null && privateScope.pendingTasks.length > 0) {
                privateScope.currentTask = privateScope.pendingTasks.shift();
                privateScope.currentTask.ping(privateScope.stream);
            }
        });
    };

    /**
     * @private
     * @function
     * @param {Task} task
     * @return {void}
     */
    privateScope.enqueueTask = (task) => {
        privateScope.pendingTasks.push(task);
        privateScope.dequeueTaskIfPossible();
    };

    /**
     * @private
     * @function
     * @return {void}
     */
    privateScope.finishCurrentTask = () => {
        privateScope.currentTask = null;
        privateScope.dequeueTaskIfPossible();
    };

    /**
     * @public
     */
    const publicScope = {};

    /**
     * @private
     * @function
     * @return {any}
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
     * @return {Task}
     */
    publicScope.enqueue = (commandPayload) => {
        /** @type {Task} */
        const task = {};
        task.commandPayload = commandPayload;
        task.promise = null;
        task.resolve = null;
        task.reject = null;
        task.ended = false;
        task.received = false;
        task.timeoutTimer = null;
        task.reason = null;
        task.responsePayloads = [];
        task.abort = () => {
            task.pong({
                abort: true,
            }, null);
        };
        task.ping = (stream) => {
            task.timeoutTimer = setTimeout(() => {
                task.pong({
                    timeout: true,
                }, null);
            }, privateScope.timeoutInterval);
            if (stream != null) {
                stream.push(task.commandPayload);
            }
        };
        task.pong = (error, responsePayload) => {
            if (task.timeoutTimer != null) {
                clearTimeout(task.timeoutTimer);
                task.timeoutTimer = null;
            }
            if (!task.ended) {
                if (error != null) {
                    task.reason = error;
                    task.end(task.reason, null);
                } else {
                    task.responsePayloads.push(responsePayload);
                    task.received = Utilities.checkAllResponsePayloadsReceived(task.commandPayload, task.responsePayloads);
                    if (!task.received) {
                        task.ping(null);
                    } else {
                        task.end(null, task.responsePayloads);
                    }
                }
            }
        };
        task.end = (reason, value) => {
            task.ended = true;
            privateScope.finishCurrentTask();
            if (reason != null) {
                task.reject(reason);
            } else {
                task.resolve(value);
            }
        };
        task.promise = new Promise((resolve, reject) => {
            task.resolve = resolve;
            task.reject = reject;
            privateScope.enqueueTask(task);
        });
        return task;
    };

    return publicScope;

};

/**
 * @public
 */
module.exports = Queue;
