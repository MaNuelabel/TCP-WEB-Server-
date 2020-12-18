const TCPServer = require('./connection');
const webServer = require('./web');
const serverConfig = require('./serverConfig.json')


TCPServer.listen(serverConfig.TCP_port, serverConfig.hostname)
webServer.listen(serverConfig.WEB_port, serverConfig.hostname)