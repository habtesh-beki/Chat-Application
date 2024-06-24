const express = require('express');
const userRouter = require('./router/userRouter')
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname , 'public')))
app.get('/' , (req, res) => {
    res.sendFile(__dirname ,'public', 'index.html')
})

app.use('/api/v1/users', userRouter);

module.exports = app;
