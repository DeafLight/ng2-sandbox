"use strict";
var heroModel_1 = require('../models/heroModel');
function routeHeroes(router) {
    router.route('/hero').get(function (req, res) {
        heroModel_1.HeroModel.find(function (err, heroes) {
            if (err)
                res.send(err);
            res.json(heroes);
        });
    }).post(function (req, res) {
        var hero = new heroModel_1.HeroModel();
        hero.uid = req.body.uid;
        hero.name = req.body.name;
        hero.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Hero created!' });
        });
    });
    router.route('/hero/:id').get(function (req, res) {
        heroModel_1.HeroModel.findById(req.params.id, function (err, hero) {
            if (err)
                res.send(err);
            res.json(hero);
        });
    }).put(function (req, res) {
        heroModel_1.HeroModel.findById(req.params.id, function (err, hero) {
            if (err)
                res.send(err);
            hero.uid = req.body.uid || hero.uid;
            hero.name = req.body.name || hero.name;
            hero.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Hero ' + hero.id + ' updated!' });
            });
        });
    }).delete(function (req, res) {
        heroModel_1.HeroModel.findById(req.params.id).remove(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Hero ' + req.params.id + ' removed!' });
        });
    });
}
exports.routeHeroes = routeHeroes;
//# sourceMappingURL=heroes.js.map