const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'user'
    }, 
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now,
    }
  });

  const Notes = new mongoose.model("user", NotesSchema);
  module.exports = Notes;