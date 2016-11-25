import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import {Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})


export class HeroesComponent   implements OnInit{
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private heroService: HeroService,
    private router: Router,) { }
  heroes : Hero[];
  selectedHero: Hero;
  getHeroes():void{
    //noinspection TypeScriptUnresolvedFunction
    this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
