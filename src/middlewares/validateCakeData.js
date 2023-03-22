import postCakeSchema from "../schemas/postCakeSchema.js";
import imageUrlSchema from "../schemas/urlSchema.js";

export default async function validateCakeData(req, res, next){
    const{name, price, image, description} = req.body;

    const {error: cakeInfoError} = postCakeSchema.validate({name, price, description},{abortEarly:false});
    if(cakeInfoError) return res.status(400);

    const {error: cakeImageError} = imageUrlSchema.validate({image});
    if(cakeImageError) return res.sendStatus(422);

    res.locals.data = {name, price, image, description}

    next();
}

