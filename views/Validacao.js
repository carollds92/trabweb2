const Joi = require('@hapi/joi');
 
const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
 
    pass: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
 
module.exports = {
    userSchema
}