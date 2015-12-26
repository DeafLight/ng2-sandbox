import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(<Hero[]>HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve =>
      setTimeout(() => resolve(<Hero[]>HEROES), 2000) // 2 seconds
      );
  }
}
