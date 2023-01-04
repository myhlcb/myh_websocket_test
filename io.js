const http = require('http')
const fs = require('fs')
const index = fs.readFileSync('./io.html');
const app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});
const io  = require('socket.io')(app)
io.on('connection',server=>{
    console.log('server connect')
    server.emit('welcome',{
        msg:'床前明月光'
    })
    server.on('client_msg',({msg})=>{
       console.log(`get client msg:${msg}`)
    })
    server.on('disconnect',()=>{
        console.log('close')
    })
})


app.listen(3000,()=>{
    console.log('server start 3000')
})