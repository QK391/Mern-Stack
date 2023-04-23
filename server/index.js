require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-stack.iknckcm.mongodb.net/?retryWrites=true&w=majority`,{
            useCreateIndex : true,
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindEndModified : false,
        })
       console.log("MongoDB connected")
    }
    catch (err) {
        console.log(err.massage);
        process.exit(1);
    }
}
connectDB.connect;
const app = express();
app.use('/api/auth', authRouter);

const PORT = 5000
app.listen(PORT, () => console.log(`Server starder on port ${PORT}`))