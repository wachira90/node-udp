#!node
const dgram = require('dgram');
const message = Buffer.from('Some bytes kk');
const client = dgram.createSocket('udp4');
client.connect(4000, 'localhost', (err) => {
    client.send(message, (err) => {
        client.close();
    });
});