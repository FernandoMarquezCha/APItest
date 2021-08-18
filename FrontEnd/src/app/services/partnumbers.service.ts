import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Partnumbers} from 'src/app/models/Partnumbers'


@Injectable({
  providedIn: 'root'
})
export class PartnumbersService {
  localurl = 'https://localhost:44318/api/PartNumbers/';
  list?: Partnumbers[];



  constructor(private http:HttpClient) { }

  addPartNumber(partnumber:Partnumbers): Observable<Partnumbers>{
    return this.http.post<Partnumbers>(this.localurl, partnumber)
  }
  
  
  getPartNumber(){
    this.http.get(this.localurl).toPromise()
    .then(data =>{
      this.list = data as Partnumbers[]
    });
  }
}
