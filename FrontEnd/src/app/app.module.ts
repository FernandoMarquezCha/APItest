import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildinglistComponent } from './buildings/buildinglist/buildinglist.component';
import { BuildingopComponent } from './buildings/buildingop/buildingop.component';
import { BuildingfooterComponent } from './buildings/buildingfooter/buildingfooter.component';
import { MenuComponent } from './menu/menu.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnumbersComponent } from './partnumbers/partnumbers.component';
import { CustomerlistComponent } from './customers/customerlist/customerlist.component';
import { CustomeropComponent } from './customers/customerop/customerop.component';
import { PartnumberslistComponent } from './partnumbers/partnumberslist/partnumberslist.component';
import { PartnumbersopComponent } from './partnumbers/partnumbersop/partnumbersop.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    BuildinglistComponent,
    BuildingopComponent,
    BuildingfooterComponent,
    MenuComponent,
    CustomersComponent,
    PartnumbersComponent,
    CustomerlistComponent,
    CustomeropComponent,
    PartnumberslistComponent,
    PartnumbersopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
