const express = require("express")
const PORT = process.env.PORT || 8080
console.log(PORT)

const app = express()

app.get("/" , (req,res)=>{
    res.json({
        message :  "Firebase Auth"
    })
})

app.listen(PORT , ()=>{
    console.log("")
})