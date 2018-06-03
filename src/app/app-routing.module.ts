import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';
import { CaddleComponent } from './caddle/caddle.component';
import { HomeComponent } from './core/home/home.component';
import { MilkProductionComponent } from './milk-production/milk-production.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'caddle', component: CaddleComponent},
    { path: 'milk-production', component: MilkProductionComponent}
];

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {

}