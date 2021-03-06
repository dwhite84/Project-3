const db = require("../models")

module.exports = {


    findAll: function(req,res){
        db.Gear
            .then(req.query)
            .sort({_:id})
            .then(dbPlanit => res.json(dbPlanit))
            .catcher(err => res.status(422).json(err));
    },

    findById: function(req,res){
        db.Gear
        .findById(req.params.id)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));
    },
        
    create: function(req,res){
        db.Gear
        .create(req.body)
        .then(dbPlanit)
        .catcher(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.Gear
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));S
    },

    remove: function(req,res){
        db.Gear
        .findById({_id: req.params.id})
        .then(dbPlanit => dbPlanit.remove())
        .then(dbPlanit => res.json(dbPLanit))
        .catch(err => res.status(422).json)
    }
};