//validation

// const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');




//register user valiation

const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().
            required(),
        lastName: Joi.string().
            required(),
        password: Joi.string().
            min(6).
            pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).
            required(),
        email: Joi.string().
            email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).
            required()
    });

    return schema.validate(data);

}

//login validation

const loginValidation = (data) => {
    const schema = Joi.object({

        password: Joi.string().
            min(6).
            required(),
        email: Joi.string().
            email().
            required()
    });

    return schema.validate(data);

}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
