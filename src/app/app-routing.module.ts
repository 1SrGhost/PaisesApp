import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';


const routes: Routes = [


/* Enrutamiento a los componentes. */
    {
        path: '',
        component:  PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component:  PorRegionComponent
     },
     {
        path: 'capital',
        component:  PorCapitalComponent
     },
     {
        path: 'pais/:codigoPais',
        component: PorPaisComponent
     },

     {
        path: '**',
        redirectTo: ''
     }


]

@NgModule({
    imports: [

        RouterModule.forRoot(routes)

    ],
    exports: [
        RouterModule
    ],
    })



export class AppRoutingModule {}