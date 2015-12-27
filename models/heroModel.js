/// <reference path="../typings/custom/iHero.d.ts" />
"use strict";
var mongoose = require('mongoose');
var heroSchema = new mongoose.Schema({
    uid: Number,
    name: String
}, { collection: 'heroes' });
exports.HeroModel = mongoose.model("Hero", heroSchema);
//# sourceMappingURL=heroModel.js.map