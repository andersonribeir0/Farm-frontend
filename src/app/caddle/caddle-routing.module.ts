import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CaddleComponent } from './caddle.component';
import { CaddleEditComponent } from './caddle-edit/caddle-edit.component';
import { CaddleDetailComponent } from './caddle-detail/caddle-detail.component';
import { CaddleMilkProductionComponent } from './caddle-milk-production/caddle-milk-production.component';

const caddleRoutes: Routes = [
    { path: 'caddle', component: CaddleComponent, children: [
      { path: 'new', component: CaddleEditComponent },
      { path: ':id', component: CaddleDetailComponent },
      { path: ':id/edit', component: CaddleEditComponent},
      { path: ':id/milkProduction', component: CaddleMilkProductionComponent}
    ] },
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