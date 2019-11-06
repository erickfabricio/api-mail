const Application = require('../models/applications');

module.exports = {
        
    find: async (req, res, next) => {               
        const applications = await Application.find(req.body.query, req.body.parms).sort('-creationDate');
        res.status(200).json(applications);        
    },

    findById: async (req, res, next) => {
        const { applicationId } = req.params;
        const application = await Application.findById(applicationId);
        res.status(200).json(application);  
    },

    save: async (req, res, next) => {
        const newApplication = new Application(req.body);
        const application = await newApplication.save();
        res.status(200).json(application);
    },
    
    update: async (req, res, next) => {
        const { applicationId } = req.params;
        const newApplication = req.body;
        const oldapplication = await Application.findByIdAndUpdate(applicationId, newApplication, {useFindAndModify: false});
        res.status(200).json({success: true});
    },

    remove: async (req, res, next) => {
        const { applicationId } = req.params;
        await Application.findByIdAndRemove(applicationId);
        res.status(200).json({success: true});
    }
    
}