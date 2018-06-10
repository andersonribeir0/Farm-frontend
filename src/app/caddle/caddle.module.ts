import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaddleComponent } from './caddle.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CaddleEditComponent } from './caddle-edit/caddle-edit.component';
import { CaddleDetailComponent } from './caddle-detail/caddle-detail.component';
import { CaddleRoutingModule } from './caddle-routing.module';
import { CaddleListComponent } from './caddle-list/caddle-list.component';
import { CaddleItemComponent } from './caddle-list/caddle-item/caddle-item.component';
import { SharedModule } from '../shared/shared.module';
import { CaddleService } from './caddle.service';
import { CaddleMilkProductionComponent } from './caddle-milk-production/caddle-milk-production.component';

@NgModule({
  imports: [
    CommonModule,
    CaddleRoutingModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [CaddleComponent, CaddleEditComponent, CaddleDetailComponent, CaddleListComponent, CaddleItemComponent, CaddleMilkProductionComponent],
  exports: [],
  providers: [CaddleService]
})
export class CaddleModule { }
