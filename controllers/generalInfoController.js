import dotenv from 'dotenv';

dotenv.config();

const salesAndStore = 2;
const middleManagement = 4;
const management = 2;
const volunteerEvent = 2;
const volunteerBoard = 5;

export const workExperience = (req, res, next) => {
    res.status(200).json({salesAndStore,
         middleManagement,
          management, 
          volunteerEvent, 
          volunteerBoard});
}

// function for contact method to reach out 



