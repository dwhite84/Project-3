const db = require("../models")

module.exports = {

    all: function(req,res){
        db.planItdb
        .find(req.query)
        .sort({})
        .then(ModelData => res.json(ModelData))
        .catch(err => res.status(422).json)
    },
        
    create: function(req,res){
        db.planItdb
        .create(req.body)
        .then(db.planItdb)
        .catcher(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.planItdb
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(ModelData => res.json(ModelData))
        .catcher(err => res.status(422).json(err));
    },

    remove: function(req,res){
        db.planItdb
        .findById({_id: req.params.id})
        .then(ModelData => ModelData.remove())
        .then(ModelData => res.json(ModelData))
        .catch(err => res.status(422).json)
    }
};