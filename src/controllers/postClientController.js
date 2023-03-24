import { db } from "../config/database.js";

export async function postClientController(req, res) {
    const {name, address, phone} = res.locals.data;
    try {
        await db.query(`INSERT INTO clients(name, address, phone) VALUES ($1, $2, $3);`,[name, address, phone])
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}