import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class CommonServiceService {
  url:string="https://uatapi.easypolicy.com:8989";
  constructor(private http:HttpClient) {}

  getCities() {
    return this.http.post(this.url+"/MasterService.svc/web/GetCityList",{TopLocation:true});
}

}
