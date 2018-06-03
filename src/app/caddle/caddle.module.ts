import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaddleComponent } from './caddle.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaddleEditComponent } from './caddle-edit/caddle-edit.component';
import { CaddleDetailComponent } from './caddle-detail/caddle-detail.component';
import { CaddleRoutingModule } from './caddle-routing.module';
import { CaddleListComponent } from './caddle-list/caddle-list.component';

@NgModule({
  imports: [
    CommonModule,
    CaddleRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  declarations: [CaddleComponent, CaddleEditComponent, CaddleDetailComponent, CaddleListComponent],
  exports: []
})
export class CaddleModule { }
