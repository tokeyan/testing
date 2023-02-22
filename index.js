const express = require('express')
const routePath = require('./router/router')
const app = express()

app.use(express.json())
app.use("/",routePath)

app.listen(8000,(err) => {
    if(err) throw err;
    console.log("port connected 8000-")
})