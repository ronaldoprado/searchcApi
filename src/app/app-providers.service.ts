import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Md5 } from 'ts-md5/dist/md5';
  

@Injectable({
  providedIn: 'root'
})
export class AppProvidersService {
  private apiKey = '7555d375533430dc142c95c3fa3d83aa'
  private baseMarvelApi = 'https://gateway.marvel.com/v1/public'

  constructor(private http: HttpClient )  {}

  buscarHerois(){
    const md5 = new Md5()
    const timestamp = Number(new Date());
    const hash = Md5.hashStr(timestamp + 'ebd407c102ea3f1262b8dd370cfa04d4a132a867d8b23f3429d72898aaffd1a321761b4a');
    return this.http.get(`${this.baseMarvelApi}/characters?ts=${timestamp}&orderBy=name&limit=11&apikey=d8b23f3429d72898aaffd1a321761b4a&hash=${hash}`)
  }
  
}
