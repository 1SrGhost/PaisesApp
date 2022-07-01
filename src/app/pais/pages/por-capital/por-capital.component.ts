import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  capitales : Country[] = [];

  constructor(private CapitalService: CapitalService) { }

  buscar( termino:string){
    this.hayError = false;
    console.log(this.termino);

    this.CapitalService.buscarCapital(termino)
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
