import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {CommonServiceService} from './common-service.service';

import { HealthComponent } from './health/health.component';
import { TermComponent } from './term/term.component';
import { TravelComponent } from './travel/travel.component';
import { InvestmentComponent } from './investment/investment.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CityFilterPipe } from './city-filter.pipe';
import { OnlynumberDirective } from './onlynumber.directive';


@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    TermComponent,
    TravelComponent,
    InvestmentComponent,
    AppHeaderComponent,
    CityFilterPipe,
    OnlynumberDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [CommonServiceService,{provide: MAT_DATE_LOCALE, useValue: 'en-in'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private dateAdapter:DateAdapter<Date>) {
		dateAdapter.setLocale('en-in'); // DD/MM/YYYY
	}
}
