import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegardsRoutingModule } from './regards-routing.module';
import { RegardsComponent } from './regards.component';


@NgModule({
  declarations: [
    RegardsComponent
  ],
  imports: [
    CommonModule,
    RegardsRoutingModule
  ]
})
export class RegardsModule { }
