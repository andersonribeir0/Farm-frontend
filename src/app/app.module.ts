import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaddleModule } from './caddle/caddle.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MilkProductionModule } from './milk-production/milk-production.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CaddleModule,
    CoreModule,
    MilkProductionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
