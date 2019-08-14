import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CommonServiceService} from '../common-service.service';
import {CustomRequest} from '../custom-request';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  cityList:any;
  constructor(private _GetCityService:CommonServiceService,private fb: FormBuilder,location:Location) { }
 
  healthQuotesForm= this.fb.group({
    userCity:['',Validators.required],
    userMobile:['',Validators.required],
    noofAdult:['1',Validators.required],
    noofChild:['0',Validators.required],
    dateofBirth:[new Date('06/10/1990'),Validators.required]
    });
  ngOnInit() {
    this.getCities();
   
  }
  getCities() {
    this._GetCityService.getCities().subscribe(
    data => { 
      this.cityList = data;
      console.log(this.cityList);
     
    }
      );
      
     }
     displayCity(value: any): string {
      return value && typeof value === 'object' ? value.City+", "+value.State : value;
     
    }
    getHealthQuotes(){
      
      var data=new CustomRequest();
      var getAge=data.GetAge(this.healthQuotesForm.controls.dateofBirth.value);
      var healthRequestData=data.HealthRequestData();
      healthRequestData.Requests[0].CityId=this.healthQuotesForm.controls.userCity.value.CityCode;
      healthRequestData.Requests[0].NumberOfAdults=this.healthQuotesForm.controls.noofAdult.value;
      healthRequestData.Requests[0].NumberOfChildren=this.healthQuotesForm.controls.noofChild.value;
      healthRequestData.MobileNo=this.healthQuotesForm.controls.userMobile.value;
      healthRequestData.Requests[0].Gender='M';
    
      console.log(this.healthQuotesForm.controls);
      window.location.href="http://uat2.easypolicy.com:8989";
      //location.href='www.google.com';
      //localStorage.setItem()
      
    }
}
