const mongoose = require('mongoose');
const passport = require("passport");
const plm = require('passport-local-mongoose')
const config = require('../config.js')
// Define the User Schema

mongoose.connect(config.db_uri);

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
