const { createGuid } = require('../util/generators');
const items = require('../dbschema');

exports.getListOfProducts = (req, res) => {
    res.status(200).json({
        items: items.items,
        status: 200,
    });
};

exports.createNewProduct = (req, res) => {

    if (req.body.name.trim() === '' || req.body.image.trim() === '' || req.body.price == 0) {
        return res.status(403).json({ status: 403 });
    }

    const item = {
        "image": req.body.image,
        "updatedAt": Date.now(),
        "description": {},
        "id": createGuid(),
        "price": req.body.price,
        "name": req.body.name,
    };

    items.items.push(item);

    res.status(200).json({
        id: item.id,
        status: 200
    });
};

exports.updateProduct = (req, res) => {

    if (req.body.name.trim() === '' || req.body.image.trim() === '' || req.body.price == 0
        || req.body.id.trim() === '') {
        return res.status(403).json({ status: 403 });
    }

    const item = items.items.find(c => c.id === req.body.id);

    if (!item) {
        res.status(404).json({
            status: 404
        });
    }

    item.image = req.body.image;
    item.price = req.body.price;
    item.id = req.body.id;
    item.name = req.body.name;

    res.status(200).json({
        status: 200
    });
};

exports.deleteProduct = (req, res) => {
    const item = items.items.find(c => c.id === req.body.id);

    items.items.splice(items.items.indexOf(item), 1);

    res.status(200).json({
        status: 200
    });
};