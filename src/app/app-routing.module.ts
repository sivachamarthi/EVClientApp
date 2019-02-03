import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingComponent } from './funding/funding.component';

const routes: Routes = [
  { path: '', component: FundingComponent },
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
