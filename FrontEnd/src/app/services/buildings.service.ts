import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buildings } from '../models/Buildings';


@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  localurl = 'https://localhost:44318/api/Buildings';
  list?: Buildings[];
  


  constructor(private http:HttpClient) { }

  addBuildings(building : Buildings): Observable<Buildings>{
  return this.http.post<Buildings>(this.localurl , building);

  }

  getBuilding(){
    this.http.get(this.localurl).toPromise()
    .then(data => {
      this.list = data as Buildings[];

    });
  }

}


