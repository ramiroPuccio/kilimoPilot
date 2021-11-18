import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LotesComponent } from './lotes.component';

const routes: Routes = [
  {
    path: '',
    component: LotesComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class LotesModule { }
