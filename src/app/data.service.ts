import { Injectable } from '@angular/core';

import { IHistory, IReal } from 'src/driver';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _URL:string = "assets/history.json"
  private readonly baseUrl = 'http://104.211.60.175/request_API/public/api/login';
  private readonly Rurl = 'http://104.211.60.175/request_API/public/api/register';
  private readonly Qurl = 'http://104.211.60.175/request_API/public/api/request_ride';

  private readonly Fl = 'assets/history.json'

  riderid = localStorage.getItem('id');
  
private readonly _HUl = "http://104.211.60.175/request_API/public/api/trip_history";
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .set('responseType', 'text')
  .set('Access-Control-Allow-Origin', '*');



  constructor(private http: HttpClient) { 
   
  }

  getHistory(): Observable<IHistory[]>{
    return this.http.get<IHistory[]>(this._URL)
  }
  

  login(data: any) {
    return this.http.post(this.baseUrl, JSON.stringify(data),({ headers: this.headers }));
    }


    Registor(data: any){
      // data['appuser_id'] = this.riderid;
      console.log(data);
      return this.http.post(this.Rurl, JSON.stringify(data),({headers: this.headers}));
    }

    Request(data:any){
      console.log(data);
      return this.http.post(this.Qurl, JSON.stringify(data), ({headers: this.headers}));
    }

   getRhistory(): Observable<IReal[]>{
     return this.http.get<IReal[]>(`${this._HUl}/${this.riderid}`);
   }   

}
