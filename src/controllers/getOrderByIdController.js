import { db } from "../config/database.js";

export async function getOrderByIdController(req, res) {
    const {id} = req.params
    try {
        const result = await db.query(`SELECT cl.id AS clientId, cl.name AS clientName, cl.address, cl.phone, ck.*, o.id AS orderId, o.createdAt, o.quantity, o.totalPrice FROM orders AS o JOIN clients AS cl ON o.clientId=cl.id JOIN cakes AS ck ON o.cakeId=ck.id WHERE o.id=$1;`,[id]
        )
        if(!result.rows[0]) return res.sendStatus(404)
        
        const order = result.rows[0]
        const formatedOrder = {
                "client": {
                    "id": order.clientid,
                    "name": order.clientname,
                    "address": order.address,
                    "phone": order.phone
                },
                "cake": {
					"id": order.id,
	                "name": order.name,
	                "price": order.price,
					"description": order.description,
					"image": order.image
	            },
                "orderId": order.orderid,
	            "createdAt": order.createdat,
	            "quantity": order.quantity,
	            "totalPrice": Number(order.totalprice)
            }
        
        res.status(200).send(formatedOrder)
    } catch (error) {
        res.sendStatus(500)
    }
}