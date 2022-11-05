// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
    const { method } = req;


    // DB Connection
    dbConnect();


    // Get & Post Method
    if(method === "GET"){
        try{
            const users = await User.find();
            res.status(200).json(users);

        }catch(err){
            res.status(500).json(err);
        }
    }

    if(method === "POST"){
        try{
            const user = await User.create(req.body);
            res.status(201).json(user);

        }catch(err){
            res.status(500).json(err);
        }
    }
  
  }
  