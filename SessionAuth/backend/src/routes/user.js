import express from 'express'
import Joi from 'joi';
import User from '../models/user'
import validate from '../validations/user'

const userRoutes = express.Router();
userRoutes.post("", validate, async  (req, res) => {
    try {
        const {username, email, password} = req.validatedBody;
        const newUser = new User({username, email, password})
        await newUser.save()
        res.send({userId: newUser.id, username: newUser.username})
        // const {username, email, password} = req.body
        // await Joi.validate({username, email, password}, signUp);
        // console.log("reached", username, passport)
        // const newUser = new User({username, email, password});
        // await newUser.save();
        // res.send({userId: newUser.id, username});

    } catch(err) {
        console.log("ERROR IN SIGNUP METHOD")
        res.status(400).send(err);
    }
})
userRoutes.get("", (req, res) => {
    console.log("You have reached a connection!")
}) 
export default userRoutes;