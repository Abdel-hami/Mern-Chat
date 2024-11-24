const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL);

const cors = require('cors');
// app.use(cors({
//     credentials: true,
//     origin: process.env.CLIENT_URL
// }));
// di9i9a 38 f vid ytb
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());



const user = require('./models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWTSECRET;

app.get('/test', (req, res) => {
    res.json('okay');
})


//user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userCreated = await user.create({ username, password });
        jwt.sign({ userId: userCreated._id }, jwtSecret, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                _id: userCreated._id
            });
        })
    } catch (err) {
        if (err) throw err;
    }
})
app.listen(4000, () => {
    console.log('am listenning at port 4000');
})

