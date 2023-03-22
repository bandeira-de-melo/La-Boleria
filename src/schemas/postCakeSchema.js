import Joi from 'joi';

const postCakeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().allow("")
});

export default postCakeSchema;
