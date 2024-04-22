import Joi from 'joi'



const signUpScheme = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    .message('Password must be between 6-16 characters have at least one capital letter, one lowercase letter, one digit and one special character')
    .required()
})

const validate = async (req, res, next) => {
    try {
        const { error, value } = await signUpScheme.validate(req.body);
        if (error) {
            throw new Error(error.details[0].message);
        }
        req.validatedBody = value; // Attach the validated data to the request object
        next(); // Call the next middleware function
    } catch (error) {
        res.status(400).send(error.message);
    }
}


export default validate;
// const email =  Joi.string().email().required();
// const username = Joi.string().alphanum().min(3).max(30).required();
// // const password = Joi.string().required();
// const message = 'must be between 6-16 characters,' + 
//                 'have at least one capital letter,' +
//                 'one lowercase letter, one digit,' +
//                 'and one special character';

// const password = Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
// // .options({

// //     language: {
// //         string: {
// //             regex: {
// //                 base: message
// //             }
// //         }
// //     }
// // });

// export const signUp = Joi.object().keys({
//     email,
//     username,
//     password
// });

// export const signIn = Joi.object().keys({
//     email,
//     password
// });