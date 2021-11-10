const { createGuid } = require('../util/generators');
const orders = require('../dbschema');

exports.createOrder = (req, res) => {

    if (req.body.user.trim() === '') {
        return res.status(403).json({ status: 403 });
    }

    const order = {
        "updatedAt": null,
        "createdAt": Date.now(),
        "user": req.body.user,
        "id": createGuid(),
        "items": req.body.items,
        "state": "Working",
    };

    orders.orders.push(order);

    res.json({
        id: order.id,
        status: 200
    });
};

exports.getListOfOrders = (req, res) => {
    res.json({
        items: orders.orders,
        status: 200
    });
};

exports.updateOrderStatus = (req, res) => {

    if (req.body.id.trim() === '' || req.body.state.trim() === '') {
        return res.status(403).json({ status: 403 });
    }

    const order = orders.orders.find(c => c.id === req.body.id);

    if (!order) {
        res.status(404).json({
            status: 404
        });
    }

    order.id = req.body.id;
    order.state = req.body.state;
    order.updatedAt = Date.now();

    res.status(200).json({
        status: 200
    });
};