import { db } from "../config/database.js";

export async function getOrderByClientIdController(req, res) {
    const {id} = req.params
    try {
        const result = await db.query(`SELECT  o.id AS orderId, o.createdAt, o.quantity, o.totalPrice, cakes.name as cakeName FROM orders AS o JOIN cakes ON o.cakeId=cakes.id WHERE o.clientId=$1`,[id]
        )
        if(!result.rows[0]) return res.sendStatus(404)
    
        const ordersListByClient = result.rows.map(row => row)
        const formateordersByClient = ordersListByClient.map(order =>{
            return {
            "orderId": order.orderid,
            "createdAt": order.createdat,
            "quantity": order.quantity,
            "totalPrice": Number(order.totalprice),
            "cakeName": order.cakeName
            }
            
        }) 
        
        res.status(200).send(formateordersByClient)
    } catch (error) {
        res.sendStatus(500)
    }
}