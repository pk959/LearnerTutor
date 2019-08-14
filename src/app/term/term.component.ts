import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CommonServiceService} from '../common-service.service';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {
  constructor(
    private _GetCityService:CommonServiceService,private fb: FormBuilder
  ) {}

termQuotesForm= this.fb.group({
Gender:[150],
isTobacco:[false,Validators.required],
userIncome:['',Validators.required],
userCity:['',Validators.required],
userMobile:['',Validators.required],
dateofBirth:[new Date('06/10/1990'),Validators.required]
});

genderList=[{Id:150,Text:"Male"},{Id:151,Text:"Female"}];
TobaccoList=[{Id:false,Text:"No"},{Id:true,Text:"Yes"}];
annualIncomeList=[];
cityList:any;

  ngOnInit() {
    this.getCities();
    this.AnnualIncomeFn();
  }
 
  AnnualIncomeFn(){
    const start=100000;
    var counter=1;
    for(var i=start;i<=10000000;){
     this.annualIncomeList.push({Text:counter.toString()+" Lacs",Value:i});
     i=i+start;
     counter++;
    }
    console.log(this.annualIncomeList);
  }
  getCities() {
    this._GetCityService.getCities().subscribe(
    data => { 
      this.cityList = data;
      console.log(this.cityList);
     
    }
      );
      
     }
  displayAnnualIncome(value: any): string {
    return value && typeof value === 'object' ? value.Text : value;
  }
  displayCity(value: any): string {
    return value && typeof value === 'object' ? value.City+", "+value.State : value;
   
  }
  getTermQuotes(){
    console.log(this.termQuotesForm.controls);
  }
}
