/// <reference path="../../typings/custom/iHero.d.ts" />

import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
  getHeroes(): Promise<IHero[]> {
    return Promise.resolve(<IHero[]>HEROES);
  }

  getHeroesSlowly(): Promise<IHero[]> {
    return new Promise(resolve =>
      setTimeout(() => resolve(<IHero[]>HEROES), 2000) // 2 seconds
      );
  }
}
