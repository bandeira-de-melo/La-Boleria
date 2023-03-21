import Joi from 'joi';

const postOrderSchema = ({
    clientId: Joi.string().min(1).required(),
    cakeId: Joi.string().min(1).required(),
    quantity: Joi.string().min(0).max(5).required(),
    totalPrice: Joi.number().min(1).required()
});

export default postOrderSchema;