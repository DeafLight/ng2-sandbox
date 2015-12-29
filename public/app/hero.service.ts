/// <reference path="../../typings/custom/iHero.d.ts" />

import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeroService {
  constructor(public http: Http) { }
  getHeroes(): Observable<IHero[]> {
    return this.http.get('http://localhost:3000/api/hero').map(r => r.json())
      .map((heroes: Array<any>) => {
      let result: Array<IHero> = [];

      if (heroes) {
        heroes.forEach((hero) => {
          result.push({
            uid: hero.uid,
            name: hero.name
          });
        });
      }

      return result;
    });
  }
}
