import Joi from "joi";

const imageUrlSchema = Joi.object({
    image: Joi.string().uri().required()
})

export default imageUrlSchema;