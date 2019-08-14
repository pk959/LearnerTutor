import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthComponent } from './health/health.component';
import { TermComponent } from './term/term.component';
import { TravelComponent } from './travel/travel.component';
import { InvestmentComponent } from './investment/investment.component';


const routes: Routes = [
  {
  path: 'insurance/health',
  component: HealthComponent,
  data: { preload: true }
  },
  {
    path:'insurance/term',
    component:TermComponent
  },
  {
    path:'insurance/travel',
    component:TravelComponent
  },
  {
    path:'insurance/investment',
    component:InvestmentComponent
  },
  { path: '',   redirectTo: 'insurance/health', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
