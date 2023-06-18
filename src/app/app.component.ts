import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroEdit?:SuperHero;
  heroes: SuperHero[] = [];
  constructor(private superHeroServices: SuperHeroService){ }

  ngOnInit():void{
    this.superHeroServices
    .getSuperHero()
    .subscribe((result : SuperHero[]) => this.heroes = result);
  }

  updateHeroList(heroes:SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroEdit = new SuperHero();
  }

  editHero(hero:SuperHero){
    this.heroEdit = hero;
  }
}
