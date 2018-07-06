import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaddleComponent } from './caddle.component';
import { CaddleEditComponent } from './caddle-edit/caddle-edit.component';
import { CaddleDetailComponent } from './caddle-detail/caddle-detail.component';
import { CaddleMilkProductionComponent } from './caddle-milk-production/caddle-milk-production.component';

const caddleRoutes: Routes = [
    { path: '', component: CaddleComponent },
    {
        path: 'gado', component: CaddleComponent, children: [
            { path: 'novo', component: CaddleEditComponent },
            { path: ':id', component: CaddleDetailComponent },
            { path: ':id/editar', component: CaddleEditComponent},
            { path: ':id/producao-leite', component: CaddleMilkProductionComponent}
            ]
    }
  ];

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forChild(caddleRoutes)
    ],
    exports: [RouterModule],
    providers: [],
})

export class CaddleRoutingModule{

}