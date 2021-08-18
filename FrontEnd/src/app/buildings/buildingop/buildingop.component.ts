
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms'
import { Buildings } from 'src/app/models/Buildings';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-buildingop',
  templateUrl: './buildingop.component.html',
  styles: [
  ]
})
export class BuildingopComponent implements OnInit {
  form: FormGroup;



  constructor(  public formBuilder: FormBuilder,
                public buildingservice : BuildingsService){ 
                
                this.form = this.formBuilder.group({

                  
    
    building: '',
    avaliable: ''


   });
  }

  ngOnInit() : void{

  }


  
    addBuilding(){
      const building: Buildings = {
       
       building: this.form.get('building')!.value,
       avaliable: this.form.get('avaliable')!.value
      }
    
     this.buildingservice.addBuildings(building).subscribe(data => {
       console.log("Guardado exitosamente!");
       this.form.reset();
     })
    }

}
