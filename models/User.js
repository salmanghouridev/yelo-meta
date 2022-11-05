// Table for USer

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true,
            maxlength: 20,
        },
        age:{
            type: Number,
            required:true,
        },
        Password: {
            type: String,
            required: true,
            maxlength: 50,
        },
        
    },
    {
        timestamps: true //fordata
    },
        );


export default mongoose.models.User || mongoose.model("Users", UserSchema);