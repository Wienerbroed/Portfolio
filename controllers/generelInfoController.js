import dotenv from 'dotenv';

dotenv.config();

const myName = process.env.NAME;

const welcomeName = (req, res, next => {
    const name = req.query.name || req.body.name;

    if (!name) {
        return res.send ('Please enter your name: ')
    }

    res.send(`Hello ${name}, welcome to ${myName}'s portfolio!`);
});