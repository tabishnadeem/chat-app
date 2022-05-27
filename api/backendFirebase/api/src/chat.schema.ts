
import mongoose from "mongoose";


const userFriendSchema = new mongoose.Schema({
    message : {type: String},
    isSender: {type: Boolean},
})

export const ChatSchema = new mongoose.Schema({
    user : {type: String},
    friend: [userFriendSchema],
})