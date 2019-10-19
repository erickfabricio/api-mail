const Product = require('../models/products');

module.exports = {
        
    find: async (req, res, next) => {
        const products = await Product.find(req.body.query, req.body.parms);
        res.status(200).json(products);        
    },

    findById: async (req, res, next) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    },

    save: async (req, res, next) => {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(200).json(product);
    },
    
    update: async (req, res, next) => {
        const { productId } = req.params;
        const updateProduct = req.body;        
        const oldProduct = await Product.findByIdAndUpdate(productId, updateProduct, {useFindAndModify: false});
        const newProduct = await Product.findById(oldProduct.id);
        res.status(200).json(newProduct);
    },

    remove: async (req, res, next) => {
        const { productId } = req.params;
        const product = await Product.findByIdAndRemove(productId);
        res.status(200).json(product);
    }
    
}