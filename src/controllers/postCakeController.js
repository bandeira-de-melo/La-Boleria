import { db } from "../config/database.js";

export async function postCakeController(req, res) {
    const {name, price, image, description} = res.locals.data;
    try {
        const isCake = await db.query('SELECT * FROM cakes WHERE name=$1',[name])
        if(isCake.rows[0]) return res.sendStatus(409)
        await db.query(`INSERT INTO cakes(name, price, image, description) VALUES ($1, $2, $3, $4);`,[name, price, image, description])
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

