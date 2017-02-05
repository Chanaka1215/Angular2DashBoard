import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ChartsModule} from "ng2-charts";


import { AppComponent }  from './app.component';
import { CarouselComponent} from "./components/carousel/carousel.component";
import {LoggingComponent } from "./components/logging_s/logging.component";
import {SponsorRegisterComponent} from "./components/forms/sponsorRegister.component";



import {WebRouting} from "./app.routing";

import { ServiceCalls} from "./services/serviceCalls.service";
import {OverViewComponent} from "./components/dashBoard/overview/overview.component";
import {LineChartComponent} from "./components/dashBoard/lineChart/lineChart.component";
import {BusFormComponent} from "./components/dashBoard/busForm/busForm.component";
import {newDriverComponent} from "./components/dashBoard/driverForm/newDriver.component";
import {newConductorComponent} from "./components/dashBoard/conductor/newConductor.component";
import {newTrainComponent} from "./components/dashBoard/newTrain/newTrain.component";




@NgModule({
  imports:      [ BrowserModule ,WebRouting,HttpModule,FormsModule,ChartsModule],
  declarations: [  AppComponent,
                   CarouselComponent,
                   LoggingComponent,
                   SponsorRegisterComponent,
                   OverViewComponent,
                   LineChartComponent,
                   BusFormComponent,
                   newDriverComponent,
                    newConductorComponent,
                    newTrainComponent
  ],



  bootstrap:    [ AppComponent ],
  providers :   [ ServiceCalls ]
})
export class AppModule { }
