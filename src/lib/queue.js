/**
 * node-omron-2jcie-bu/src/lib/queue.js
 * Copyright (C) e53e04ac
 * MIT License
 */

'use strict';

const stream = require('stream');

const { Utilities } = require('./utilities');

const { Queue } = (() => {

    /** @typedef QueueConstructorOptions @type {import('../../types').QueueConstructorOptions} */
    /** @typedef _Queue @type {import('../../types')._Queue} */
    /** @typedef Queue @type {import('../../types').Queue} */
    /** @typedef QueueConstructor @type {import('../../types').QueueConstructor} */
    /** @typedef QueueTask @type {import('../../types').QueueTask} */

    /** @type {QueueConstructor} */
    const Queue = (options) => {

        /** @type {QueueConstructorOptions} */
        const _options = options;

        /** @type {_Queue} */
        const _it = {};
        _it.timeoutInterval = 1000;
        _it.pendingTasks = [];
        _it.currentTask = null;
        _it.stream = new stream.Duplex({
            readableObjectMode: true,
            writableObjectMode: true,
            write: (chunk, _encoding, callback) => {
                if (_it.currentTask != null) {
                    _it.currentTask.pong(null, chunk);
                }
                callback();
            },
            read: (_size) => {
                // noop
            },
        });
        _it.dequeueTaskIfPossible = () => {
            process.nextTick(() => {
                if (_it.currentTask == null && _it.pendingTasks.length > 0) {
                    const pendingTask = _it.pendingTasks.shift();
                    /* istanbul ignore next */
                    if (pendingTask == null) {
                        throw new Error();
                    }
                    _it.currentTask = pendingTask;
                    _it.currentTask.ping(_it.stream);
                }
            });
        };
        _it.enqueueTask = (task) => {
            _it.pendingTasks.push(task);
            _it.dequeueTaskIfPossible();
        };
        _it.finishCurrentTask = () => {
            _it.currentTask = null;
            _it.dequeueTaskIfPossible();
        };

        /** @type {Queue} */
        const it = {};
        it.QueueConstructorOptions = () => {
            return _options;
        };
        it._Queue = () => {
            return _it;
        };
        it.input = () => {
            return _it.stream;
        };
        it.output = () => {
            return _it.stream;
        };
        it.enqueue = (commandPayload) => {
            /** @type {QueueTask} */
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
                }, _it.timeoutInterval);
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
                        /* istanbul ignore next */
                        if (responsePayload == null) {
                            throw new Error();
                        }
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
                _it.finishCurrentTask();
                if (reason != null) {
                    /* istanbul ignore next */
                    if (task.reject == null) {
                        throw new Error();
                    }
                    task.reject(reason);
                } else {
                    /* istanbul ignore next */
                    if (task.resolve == null) {
                        throw new Error();
                    }
                    task.resolve(value);
                }
            };
            task.promise = new Promise((resolve, reject) => {
                task.resolve = resolve;
                task.reject = reject;
                _it.enqueueTask(task);
            });
            return task;
        };
        return it;

    };
    return { Queue };

})();

module.exports = { Queue };
