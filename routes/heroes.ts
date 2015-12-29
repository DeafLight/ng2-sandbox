import {HeroModel} from '../models/heroModel';

export function routeHeroes(router) {

  router.route('/hero').get((req, res) => {
    HeroModel.find((err, heroes) => {
      if (err)
        res.send(err);

      res.json(heroes);
    });
  }).post((req, res) => {
    var hero = new HeroModel();
    hero.uid = req.body.uid;
    hero.name = req.body.name;

    hero.save(err => {
      if (err)
        res.send(err);

      res.json({ message: 'Hero created!' });
    });
  });

  router.route('/hero/:id').get((req, res) => {
    HeroModel.findById(req.params.id, (err, hero) => {
      if (err)
        res.send(err);
      res.json(hero);
    });
  }).put((req, res) => {
    HeroModel.findById(req.params.id, (err, hero) => {
      if (err)
        res.send(err);
      hero.uid = req.body.uid || hero.uid;
      hero.name = req.body.name || hero.name;
      hero.save(err => {
        if (err)
          res.send(err);

        res.json({ message: 'Hero ' + hero.id + ' updated!' });
      })
    });
  }).delete((req, res) => {
    HeroModel.findById(req.params.id).remove(err => {
      if (err)
        res.send(err);

      res.json({ message: 'Hero ' + req.params.id + ' removed!' });
    });
  });
}
