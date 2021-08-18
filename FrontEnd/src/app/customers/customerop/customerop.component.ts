import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Customers } from 'src/app/models/Customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customerop',
  templateUrl: './customerop.component.html',
  styles: [
  ]
})
export class CustomeropComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerservice : CustomersService)
   { this.form = this.formBuilder.group({

    customer: "",
    prefix: "",
    building: "",
    available: ""

   }

   ) }

  ngOnInit(): void {
  }

  addCustomer(){
    const customer : Customers = {
      customer: this.form.get("customer")?.value,
      prefix: this.form.get("prefix")?.value,
      building: this.form.get("building")?.value,
      available: this.form.get("available")?.value


    }
    this.customerservice.addCustomers(customer).subscribe(data => {
      console.log("Guardado exitosamente!");
      this.form.reset();
    })
  
}
}

