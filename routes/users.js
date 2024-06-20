const mongoose = require('mongoose');
const passport = require("passport");
const plm = require('passport-local-mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/cloneApp1");

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
       
        unique: true,
        
    },
    password: {
      type: String
  },
    email: {
        type: String,
    
        unique: true,
       
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Post',  // Assuming you have a Post model
        default: []
    },
    dp: {
        type: String,  // Assuming you store the URL or path to the display picture
        trim: true,
        default: "NA"
    },
    fullname: {
        type: String,
      
    }
});

// Create the User Model
userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);

module.exports = User;
