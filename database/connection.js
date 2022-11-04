// connection MongoDB

import mongoose from 'mongoose';

const main = async () => {

    await mongoose.connect('mongodb+srv://admin:admin123@testing.3lwu3xv.mongodb.net/?retryWrites=true&w=majority');
        console.log('Database connected');
     
}

export default main;