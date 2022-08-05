import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl2: string = 'https://restcountries.com/v2';
  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flags,population');

  }

  constructor(private http: HttpClient) {}

  buscarPais(termino:string): Observable<Country[]>{

      const url = `${this.apiUrl}/name/${termino}`;
      return this.http.get<Country[]>(url, {params: this.httpParams});
     

    }
  buscarCapital( termino: string ):Observable<Country[]>{
      const url = `${ this.apiUrl }/capital/${ termino }`;
      return this.http.get<Country[]>( url,{params: this.httpParams} );
    
    }
  getPaisPorAlpha(id:string): Observable<Country[]>{

      const url = `${this.apiUrl2}/alpha/${id}`;
      return this.http.get<Country[]>(url);
     

    }  
  
  buscarRegion(region:string): Observable<Country[]>{ 
      
      const url = `https://restcountries.com/v2/regionalbloc/${region}`;
      return this.http.get<Country[]>(url,{params: this.httpParams})    
            .pipe( tap(console.log) )

    }
   
   }



