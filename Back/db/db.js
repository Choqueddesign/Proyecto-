const mongoose = require('mongoose')
const srv = "mongodb+srv://CristianCamilo:CristianCamilo@mongolearn.cxavf.mongodb.net/NodeHouse"

const connectDB = async () => {
    try{
        await mongoose.connect(srv).then(()=>{
            console.log("Estamos conectados")
        }, (err)=>{
            console.log("No pudimos conectarnos por: " + err)
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    connectDB
}