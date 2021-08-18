import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Partnumbers } from 'src/app/models/Partnumbers';
import { CustomersService } from 'src/app/services/customers.service';
import { PartnumbersService } from 'src/app/services/partnumbers.service';

@Component({
  selector: 'app-partnumbersop',
  templateUrl: './partnumbersop.component.html',
  styles: [
  ]
})
export class PartnumbersopComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private partnumberservice: PartnumbersService) {
    this.form = this.formBuilder.group({
      partnumber: '',
      prefix: '',
      customer: '',
      available: ''

    })
   }

  ngOnInit(): void {
  }

  addPartnumbers(){
    const partnumber : Partnumbers ={
      partNumber: this.form.get("partnumber")?.value,
      fkCustomer: this.form.get("customer")?.value,
      avaliable: this.form.get("available")?.value
    }
  }

}
