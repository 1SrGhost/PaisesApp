import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{





 //se crea el evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
   @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //se crea el input para recibir el string placeholder que sera enviado de tipo string 
 /* Crear una entrada para recibir el marcador de posición de cadena que se enviará de tipo cadena */
   @Input() placeholder: string =   "";
   //se crea el debounce para que ejecute sugerencias cuando se deja de escribir
   debouncer: Subject<string> = new Subject();

   termino:string = '';
   
   ngOnInit() {
     this.debouncer
         .pipe(
            debounceTime(300)
         )
            .subscribe(valor =>{
               this.onDebounce.emit(valor);
     });
   }


   buscar()
   {

      this.onEnter.emit(this.termino);

   }

   teclaPresionada(){
     this.debouncer.next(this.termino);
   }
}
