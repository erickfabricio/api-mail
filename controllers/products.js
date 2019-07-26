const Products = require('../models/products');

module.exports = {
    
    index: async (req, res, next) => {
        const products = await Products.find({});        
        res.status(200).json(products);
    },

    newProduct: async (req, res, next) => {
        const newProduct = new Products(req.body);
        const product = await newProduct.save();
        res.status(200).json(product);
    }
    
}