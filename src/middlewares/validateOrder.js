import postOrderSchema from "../schemas/postOrderSchema.js";

export default async function validateOrder(req, res, next){
    const body = req.body;

    const {error, value} = postOrderSchema.validate(body,{abortEarly:false});
    if(error) return res.status(400).send(error);

    res.locals.data = value

    next();
}