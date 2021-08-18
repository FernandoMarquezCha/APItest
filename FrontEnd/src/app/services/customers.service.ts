
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers} from '../models/Customers'


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  localurl = 'https://localhost:44318/api/Customers/';
  list?: Customers[];

  constructor(private http:HttpClient) { }

  addCustomers(customer : Customers): Observable<Customers>{
  return this.http.post<Customers>(this.localurl , customer);

  }

  getCustomers(){
    this.http.get(this.localurl).toPromise()
    .then(data => {
      this.list = data as Customers[];

    });
}

}
