import * as mongoose from 'mongoose';

interface IHeroModel extends IHero, mongoose.Document { }

var heroSchema = new mongoose.Schema({
  uid: Number,
  name: String
}, { collection: 'heroes' });

export var HeroModel = mongoose.model<IHeroModel>("Hero", heroSchema);
