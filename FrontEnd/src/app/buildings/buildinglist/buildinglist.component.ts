import { Component, OnInit } from '@angular/core';

import {ApiService} from 'src/app/api.service';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styles: [
  ]
})
export class BuildinglistComponent implements OnInit {

  constructor(public buildingservice : BuildingsService) { }

  ngOnInit(){
      this.buildingservice.getBuilding();
    }
  }


