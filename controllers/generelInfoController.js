import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config();

const myName = process.env.NAME;


//function for personal welcome to main page
const welcomeName = (req, res, next => {
    const name = req.query.name || req.body.name;

    if (!name) {
        return res.send ('Please enter your name: ')
    }

    res.send(`Hello ${name}, welcome to ${myName}'s portfolio!`);
});


// function for contact method to reach out 
