import { db } from "../config/database.js";

export async function postOrderController(req, res) {

    const {clientId, cakeId, quantity, totalPrice} = res.locals.data;

    try {
        const isClient = await db.query(`SELECT * FROM clients WHERE id=$1;`,[clientId]);
        if(!isClient.rows[0]) return res.sendStatus(404);
        
        const isCake = await db.query(`SELECT * FROM cakes WHERE id=$1;`,[cakeId]);
        if(!isCake.rows[0]) return res.sendStatus(404);
        
        await db.query(`INSERT INTO 
                        orders(clientId, cakeId, quantity, totalPrice) 
                        VALUES ($1, $2, $3, $4)`,
                        [clientId, cakeId, quantity, totalPrice]
                        );
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error);
    }
}