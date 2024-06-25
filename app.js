const express = require('express');
const userRouter = require('./router/userRouter')
const path = require('path')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname , 'public')))
app.get('/' , (req, res) => {
    res.sendFile(__dirname ,'public', 'index.html')
})
app.use(express.json())
app.use('/api/users', userRouter);

module.exports = app;
