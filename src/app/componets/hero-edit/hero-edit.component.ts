import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  @Input() hero?:SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  constructor(private superHeroServic: SuperHeroService){}

  ngOnInit(): void {}

  updateHero(hero:SuperHero){
    this.superHeroServic
    .updateSuperHero(hero)
    .subscribe((heroes:SuperHero[])=> this.heroesUpdated.emit(heroes))
  }

  deleteHero(hero:SuperHero){
    this.superHeroServic
    .deleteSuperHero(hero)
    .subscribe((heroes:SuperHero[])=> this.heroesUpdated.emit(heroes))
  }
  createHero(hero:SuperHero){
    this.superHeroServic
    .createSuperHero(hero)
    .subscribe((heroes:SuperHero[])=> this.heroesUpdated.emit(heroes))
  }
}
