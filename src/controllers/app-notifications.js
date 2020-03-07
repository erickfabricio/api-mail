const Notification = require('../models/app-notifications');

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
        const updateNotification = req.body;
        const oldNotification = await Notification.findByIdAndUpdate(notificationId, updateNotification, { useFindAndModify: false });
        const newNotification = await Notification.findById(oldNotification.id);
        res.status(200).json(newNotification);
    },

    remove: async (req, res, next) => {
        const { notificationId } = req.params;
        const notification = await Notification.findByIdAndRemove(notificationId);
        res.status(200).json(notification);
    }
            
}