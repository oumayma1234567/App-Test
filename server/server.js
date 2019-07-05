const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello llll")
})

app.listen(3000, (err)=>{
    if(err) console.log("server err")
    else console.log("server is running on port 3000")
})