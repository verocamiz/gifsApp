import { formatCurrency } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/searchGifsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  private url:string = 'https://api.giphy.com/v1/gifs';
  private api_key:string='MxyQcMtqYRnq7rpCwI2B4BmUPzx5kSCg';
  private limite:string='10';

  public resultados : Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient){
     
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

    // otra forma
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('gifs')!) || [];
    
  }

  buscarGif(elementoBuscado: string = ''): void {

    elementoBuscado = elementoBuscado.trim().toLowerCase();

    if (!this.historial.includes(elementoBuscado)) {
      this._historial.unshift(elementoBuscado);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    const parametros = new HttpParams()
    .set('api_key',this.api_key)
    .set('q',elementoBuscado)
    .set('limit',this.limite)

    this.http.get<SearchGifsResponse>(`${this.url}/search`,{params:parametros}).
    subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('gifs',JSON.stringify(resp.data));
    })
  }
}
