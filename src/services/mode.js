'use strict';

const modes = {
    dev:  { regex: 'dev', description: 'Default mode for the local development'},
    test: { regex: 'test', description: 'Use this on staging/preprod server before prod deployment'},
    prod: { regex: 'prod', description: 'Production'},
};

function initMode(context) {
    let mode = null;

    Object.defineProperty(context, 'mode', {
        get: () => {
            const result =
                mode                 ||
                process.env.mode     ||
                process.env.MODE     ||
                process.env.node_env ||
                process.env.NODE_ENV ||
                'dev';

            return result;
        },
        set: newMode => {
            mode = newMode;

            return mode;
        }
    });

    return context.mode;
}

function getPossibleModes() {
    return modes;
}

module.exports = { initMode, getPossibleModes };
