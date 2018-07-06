import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, PreloadAllModules, RouterModule } from '@angular/router';
import { CaddleComponent } from './caddle/caddle.component';
import { HomeComponent } from './core/home/home.component';
import { MilkProductionComponent } from './milk-production/milk-production.component';
import { CaddleModule } from './caddle/caddle.module';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gado', component: CaddleComponent},
    { path: 'producao-leite', component: MilkProductionComponent}
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