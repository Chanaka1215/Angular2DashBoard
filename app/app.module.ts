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
import {DashBoardComponent} from "./components/dashBoard/dashboard.component";
import {NavbarComponent} from "./components/dashBoard/navbar/navbar.component";
import {SidebarComponent} from "./components/dashBoard/sidebar/sidebar.component";
import {OverViewComponent} from "./components/dashBoard/overview/overview.component";
import {LineChartComponent} from "./components/dashBoard/lineChart/lineChart.component";



@NgModule({
  imports:      [ BrowserModule ,WebRouting,HttpModule,FormsModule,ChartsModule],
  declarations: [  AppComponent,
                   CarouselComponent,
                   LoggingComponent,
                   SponsorRegisterComponent,
                   DashBoardComponent,
                   NavbarComponent,
                   SidebarComponent,
                   OverViewComponent,
                   LineChartComponent
  ],



  bootstrap:    [ AppComponent ],
  providers :   [ ServiceCalls ]
})
export class AppModule { }
