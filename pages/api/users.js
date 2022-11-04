// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import main from "../../database/connection"
import Kitten from "../../database/schema"

export default function getUsers(req, res) {
    
    main().catch(err => console.log(err));
    
    const create = new Kitten({ name: 'fluffy' });
    create.save().then(() => {
        res.status(200).json(create)
    }
    );
  }
  