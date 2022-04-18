const mongoose = require('mongoose');
const { Schema } = mongoose;
const notesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        res:'user'
    },
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    tag:{
        type:String,
        default:"general"
    },

    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports=mongoose.model('Notes',notesSchema);