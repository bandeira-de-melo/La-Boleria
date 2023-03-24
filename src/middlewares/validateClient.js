import postClientsSchema from "../schemas/postClientsSchema.js";

export default async function validateClient(req, res, next){
    const body = req.body;

    const {error, value} = postClientsSchema.validate(body,{abortEarly:false});
    if(error) return res.status(400).send(error);

    res.locals.data = value

    next();
}