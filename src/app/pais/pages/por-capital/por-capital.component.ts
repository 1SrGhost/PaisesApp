import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  capitales : Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;  
    console.log(this.termino);

    this.PaisService.buscarCapital(termino)
    .subscribe( (capitales) => {
      console.log(capitales);
      this.capitales = capitales;

    }, (err) => {
      this.hayError = true;
      this.capitales = []; 
    });
 

  }
  
  sugerencias(termino:string){

    this.hayError = false;
    
}

}
