import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegardsComponent } from './regards.component';

const routes: Routes = [{ path: '', component: RegardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegardsRoutingModule { }
