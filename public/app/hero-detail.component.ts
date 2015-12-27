/// <reference path="../../typings/custom/iHero.d.ts" />

import {Component} from 'angular2/core';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.uid}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: IHero;
}
