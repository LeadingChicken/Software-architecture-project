const redis = require('redis');
let client = {};

const statusConnectRedis = {
    CONNECT: 'connect',
    END: 'end',
    RECONNECT: 'reconnecting',
    ERROR: 'error'
};

const handleEventConnect = (connectionRedis) => {
    connectionRedis.on(statusConnectRedis.CONNECT, () => {
        console.log('Redis = Connection status: connected');
    });
    connectionRedis.on(statusConnectRedis.END, () => {
        console.log('Redis = Connection status: disconnected');
    });
    connectionRedis.on(statusConnectRedis.RECONNECT, () => {
        console.log('Redis = Connection status: reconnecting');
    });
    connectionRedis.on(statusConnectRedis.ERROR, (error) => {
        console.log(`Redis = Connection status: error ${error}`);
    });
};

const initRedis = () => {
    try {
        const instanceRedis = redis.createClient({
            password: process.env.REDIS_PASSWORD || '123456',
            socket: {
                host: process.env.REDIS_HOST || 'redis-12083.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com',
                port: process.env.REDIS_PORT || '6732'
            }
        });
        instanceRedis.connect();
        client.instanceConnect = instanceRedis;
        handleEventConnect(instanceRedis);
    } catch (error) {
        console.error('Failed to initialize Redis:', error);
    }
};


const getRedis = () => {
    return client;
};

const closeRedis = () => {
    if (client.instanceConnect) {
        client.instanceConnect.quit(() => {
            console.log('Redis connection closed');
        });
    } else {
        console.log('No Redis connection to close');
    }
};

module.exports = {
    initRedis,
    getRedis,
    closeRedis
};
