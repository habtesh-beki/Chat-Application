const app = require('./app')
const http = require('http')
const {Server} = require('socket.io')
const dotenv = require('dotenv')
const server = http.createServer(app);
const io = new Server(server)

dotenv.config({path: './config.env'})
io.on('connection' , (socket) => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconneced')
    })
    socket.on('chat message' , (msg) => {
        console.log('message:' + msg);
        socket.broadcast.emit('chat message', msg);
    })
})
const PORT = 3000;

server.listen(PORT, () => {
    console.log('server is listening on the port 3000')
})
