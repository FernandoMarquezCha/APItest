import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { PartnumbersService } from 'src/app/services/partnumbers.service';

@Component({
  selector: 'app-partnumberslist',
  templateUrl: './partnumberslist.component.html',
  styles: [
  ]
})
export class PartnumberslistComponent implements OnInit {

  constructor(public partnumberservice: PartnumbersService) { }

  ngOnInit(){
    this.partnumberservice.getPartNumber();
  }

}
