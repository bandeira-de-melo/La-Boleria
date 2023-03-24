import { db } from "../config/database.js";

async function postCakeController(req, res) {
    const {name, price, image, description} = res.locals.data;
    try {
        const isCake = await db.query('SELECT * FROM cakes WHERE name=$1',[name])
        if(isCake) return res.status(409)
        res.send(name)
    } catch (error) {
        res.status(500).send(error)
    }
}