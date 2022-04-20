const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./usersApp'))

app.listen(3000, ()=>{
    console.log('Server is running')
})

