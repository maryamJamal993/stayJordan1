const mongoose=require('mongoose')

const Schema=mongoose.Schema

const placeSchema=new Schema({
    photoPath:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ownerEmail:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
},{ timestamps: true })

module.exports=mongoose.model('Place',placeSchema)