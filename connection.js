//Import modules
const net = require('net');
const fs = require('fs');
const path = require('path');

//Creating of TCP Server and listening on port 3000
const server = net.createServer((socket) =>{     
    socket.on('data', (data)=>{
        console.log(`${socket.remoteAddress}:${socket.remotePort} send this data:\n ${data}`)
    })

    socket.on('error', (err)=>[
        console.error('Error')
    ])

    socket.on('close', ()=>{
        console.log(`Connection closed ${socket.remoteAddress}:${socket.remotePort}`);
    })
})

server.on('listening', ()=>{
    console.log('Server listening on http://localhost:3000 \n ---SHOW CONNECTED CLIENT MESSAGE---')
});


//Waiting for new connection
server.on('connection', (socket)=>{
    let clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    let d = new Date();
    console.log(`New Client connected ${clientAddress} @ ${d.toLocaleTimeString()}`);

/*
    //File Path
    const filePath = path.join(__dirname, 'demo.txt');

    if(!fs.existsSync(filePath)){
        console.log('File does not exist');
        return;
    }else{
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) =>{
            if(err){
                console.log(err);
                return;
            }
            //Write file to the Client
        });
    };
*/
    socket.write('start fsquirt')
}); 

module.exports = server;