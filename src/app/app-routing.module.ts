import { RekenmachineComponent } from './rekenmachine/rekenmachine.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
{path: 'rekenmachine', component: RekenmachineComponent},

];
@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}