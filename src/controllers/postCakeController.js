async function postCakeController(req, res) {
    const {name, price, image, description} = res.locals.data;
    try {
        await db.query()
    } catch (error) {
        
    }
}