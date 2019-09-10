import { Component } from '@angular/core';
import { User } from './interfaces/user';
import {AppProvidersService} from '../app-providers.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public titulo: string
  public herois: Array<User>

  constructor(private AppProvidersService: AppProvidersService ) {
    this.titulo = 'Lista de Herois'
    this.buscarHerois()
  }

  buscarHerois(){
    this.AppProvidersService.buscarHerois().subscribe((resposta: any) => {
    this.herois = resposta.data.results
    console.log(this.herois)
    })

  }
}
