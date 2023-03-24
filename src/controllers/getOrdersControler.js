import { db } from "../config/database.js";

export async function getOrdersController(req, res) {
    try {
        const result = await db.query(`SELECT cl.id AS clientId, cl.name AS clientName, cl.address, cl.phone, ck.*, o.id AS orderId, o.createdAt, o.quantity, o.totalPrice FROM orders AS o JOIN clients AS cl ON o.clientId=cl.id JOIN cakes AS ck ON o.cakeId=ck.id;`
        )
        const ordersList = result.rows.map(row => row)
        const formatedOrdersList = ordersList.map(order => {
            return {
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
        })
        res.send(formatedOrdersList)
    } catch (error) {
        res.sendStatus(500)
    }
}
