const { Client } = require('pg')
const tunnel = require('tunnel-ssh');

const sshConfig = {
    host: '10.121.22.11',
    port: '22',
    username: 'ait_admin',
    password: 'P@ssw0rd2021'
}

const dbConfig = {
    user: 'postgres',
    host: '10.121.15.81',
    database: 'postgres',
}

const tunnelConfig = {
    ...sshConfig,
    dstHost: '10.121.15.81',
    dstPort: '5433',
    localHost: 'localhost',
    localPort: '5432'
}

tunnel(tunnelConfig, (error, server) => {
    if (error) {
        console.log(error)
        return;
    }

    const client = new Client({
        host: 'localhost',
        port: '5432',
        user: 'ait_admin',
        password: 'P@ssw0rd2021',
        database: 'ait_admin'
    })
})