/**
 * Created by xcsong on 2016/11/25.
 */
import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

