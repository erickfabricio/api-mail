const Notification = require('../models/notifications');

module.exports = {
        
    find: async (req, res, next) => {               
        const notifications = await Notification.find(req.body.query, req.body.parms).sort('-creationDate');
        res.status(200).json(notifications);        
    },

    findById: async (req, res, next) => {
        const { notificationId } = req.params;
        const notification = await Notification.findById(notificationId);
        res.status(200).json(notification);  
    },

    save: async (req, res, next) => {
        const newNotification = new Notification(req.body);
        const notification = await newNotification.save();
        res.status(200).json(notification);
    },
    
    update: async (req, res, next) => {
        const { notificationId } = req.params;
        const newNotification = req.body;
        const oldnotification = await Notification.findByIdAndUpdate(notificationId, newNotification, {useFindAndModify: false});
        res.status(200).json({success: true});
    },

    remove: async (req, res, next) => {
        const { notificationId } = req.params;
        await Notification.findByIdAndRemove(notificationId);
        res.status(200).json({success: true});
    }
    
}