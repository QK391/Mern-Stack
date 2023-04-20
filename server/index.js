const express = require('express');
const mongoose = require('mongoose');
const connecctDB = async () => {
    try {
        await mongoose.connect()
    }catch (err) {

    }
}
const app = express();
app.get('/', (req, res) => res.send("Hello, world!"));
const PORT = 5000
app.listen(PORT, () => console.log(`Server starder on port ${PORT}`))