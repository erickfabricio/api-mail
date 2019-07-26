const Product = require('../models/products');

module.exports = {
    
    select: async (req, res, next) => {
        const products = await Product.find({});        
        res.status(200).json(products);
    },

    select2: async (req, res, next) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    },

    insert: async (req, res, next) => {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(200).json(product);
    },

    replace: async (req, res, next) => {
        const { productId } = req.params;
        const newProduct = req.body;
        const oldProduct = await Product.findByIdAndUpdate(productId, newProduct);
        res.status(200).json({success: true});
    },

    update: async (req, res, next) => {
        const { productId } = req.params;
        const newProduct = req.body;
        const oldProduct = await Product.findByIdAndUpdate(productId, newProduct);
        res.status(200).json({success: true});
    },

    delete: async (req, res, next) => {
        const { productId } = req.params;
        await Product.findByIdAndRemove(productId);
        res.status(200).json({success: true});
    }
    
}