var aedes = require('aedes')()
var server = require('net').createServer(aedes.handle)
var port = 1883;

server.listen(port, function() {
  console.log('server listening on port', port)
});

aedes.on('client', (client) => {
  console.log(`${client.id} client connected`);
});

aedes.on('clientDisconnect', (client) => {
  console.info(`${client.id} client disconnected`);
});