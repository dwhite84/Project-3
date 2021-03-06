const db = require("../models")

module.exports = {


    findAll: function(req,res){
        db.ExpendableGoods
            .then(req.query)
            .sort({_:id})
            .then(dbPlanit => res.json(dbPlanit))
            .catcher(err => res.status(422).json(err));
    },

    findById: function(req,res){
        db.ExpendableGoods
        .findById(req.params.id)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));
    },
        
    create: function(req,res){
        db.ExpendableGoods
        .create(req.body)
        .then(dbPlanit)
        .catcher(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.ExpendableGoods
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(dbPlanit => res.json(dbPlanit))
        .catcher(err => res.status(422).json(err));S
    },

    remove: function(req,res){
        db.ExpendableGoods
        .findById({_id: req.params.id})
        .then(dbPlanit => dbPlanit.remove())
        .then(dbPlanit => res.json(dbPLanit))
        .catch(err => res.status(422).json)
    }
};