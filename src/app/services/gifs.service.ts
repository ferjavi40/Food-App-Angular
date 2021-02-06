import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchRecipeResponse, Recipes } from '../interfaces/busqueda.interface';
//services


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey: string = 'G866JKtmxHimC7MO2ZVfkh8ReCjaLn4p';
  private _historial: string [] = [];
  public resultados: Recipes [] = [];

  get historial(){
    return [...this._historial];//los 3 puntos se hacen para romper la relacion y no haya problemas, asi se puede modificar el getter
  }

  constructor(private http:HttpClient){
    this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];
    this._historial= JSON.parse(localStorage.getItem('historial')!) || [];

  }



  buscarGifs(query:string){//este es if es para valorar que no se repitan datos dentro del historial
    query = query.trim().toLocaleLowerCase();//este para pasar valor busqueda a minuscula y no se repitan
    if(!this._historial.includes(query)){
      this._historial.unshift( query );
      this._historial= this._historial.splice(0,6);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    console.log(query);
    

    this.http.get<SearchRecipeResponse>(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0a11a136b4874625b02868737211e71d&query=${query}`)
              .subscribe(resp=>{
                this.resultados= resp.results;
                localStorage.setItem('resultados',JSON.stringify(this.resultados));
                
              });
  }
  
}
  