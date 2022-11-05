// FOr Connect MongoDB

import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URI = process.env.MONGODB_URI


if(!MONGODB_URI){
    throw new Error(

    )
}


let cached = global.mongoose
if(!cached) {
    cached = global.mongoose = {
        conn: null,
        Promise: null
    }
}

async function dbConnect(){
    if(cached.conn) {
        return cached.conn
    }
    if(!cached.Promise){
        const opts = {
            butterComands: false,

        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose  
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}


export default dbConnect

