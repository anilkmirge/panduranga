import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routingTable } from './routes';


@NgModule({
  imports: [RouterModule.forRoot(routingTable)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
