import { Component, OnInit } from '@angular/core';

import {ApiService} from 'src/app/api.service';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styles: [
  ]
})
export class CustomerlistComponent implements OnInit {

  constructor(public customerservice : CustomersService) { }

  ngOnInit(){
    this.customerservice.getCustomers();
  }

}
