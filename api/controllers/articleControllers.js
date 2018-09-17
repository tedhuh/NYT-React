const db = require("../models");

module.exports = {
    selectAll : function (req,res){
        db.Articles
        .find(req.query)
        .sort({date: -1})
        .catch(err => res.status(422).json(err))
    },
    selectById: function (req,res){
        db.Articles
        .find(req.param.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    
    update: function(req, res){
        db.Articles
            .update({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    removeById: function(req,res) {
        db.Articles
        .delete({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    removeAll: function(req,res) {
        db.Articles
        .deleteMany(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}