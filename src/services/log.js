'use strict';

function initLog(context) {
    context.log = {
        info: console.log,
        error: console.error,
    };

    return context.log;
}

module.exports = initLog;
