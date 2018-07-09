const db = require("../models")

module.exports = {


    findAll: function(req,res){
        db.Admin
            .then(req.query)
            .sort({id:_id})
            .then(dbPlanit => res.json(dbPlanit))
            .catcher(err => res.status(422).json(err));
    },

    findById: function(req,res){
        db.Admin
        .findById(req.params.id)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));
    },
        
    create: function(req,res){
        db.Admin
        .create(req.body)
        .then(dbPlanit)
        .catcher(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.Admin
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));S
    },

    remove: function(req,res){
        db.Admin
        .findById({_id: req.params.id})
        .then(dbPlanit => dbPlanit.remove())
        .then(dbPlanit => res.json(dbPLanit))
        .catch(err => res.status(422).json)
    }
};