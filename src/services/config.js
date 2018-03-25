'use strict';

const getPossibleModes = require('./mode.js').getPossibleModes;
const config = {
    server: {
        default: {

        },
        dev: {

        },
        test: {

        },
        prod: {

        },
    },
};

function initConfig(context) {
    Object.keys(config).forEach(key => {
        const item = config[key];
        // check if all modes defined
        if(JSON.stringify(Object.keys(item)) !== JSON.stringify(Object.keys(getPossibleModes()))) {
            context.log.error(`config.${item} does not have correct set of modes`);
        }

        // update with mode
        Object.defineProperty(config, key, {
            get: () => { return item[context.mode]; },
            set: newConfigKey => { context.log.error(`can't set config keys: config.${item}=${newConfigKey}`); }
        });

        // CONFIG_SERVER_PORT

        console.log(item);

        // // Overriding with the env vars
        // Object.keys(config).forEach((key) => {
        //     const envKey = envPrefix + key.toUpperCase();
        //
        //     if(process.env[envKey]) {
        //         config[key] = process.env[envKey];
        //         log(`message="[CONFIG] ${type}.${key} set from env variable ${envKey}"`);
        //     }
        // });
    });

    return config;
}

module.exports = initConfig;




