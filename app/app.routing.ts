/**
 * Created by Chanaka Fernando on 1/24/2017.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {CarouselComponent} from "./components/carousel/carousel.component";
import {LoggingComponent} from "./components/logging_s/logging.component";
import {SponsorRegisterComponent} from "./components/forms/sponsorRegister.component";
import {DashBoardComponent} from "./components/dashBoard/dashboard.component";

// Route Configuration
const appRoutes: Routes = [
  {
    path : '' ,
    component : CarouselComponent
  },
  {
    path : 'logging' ,
    component : LoggingComponent
  },
  {
    path : 'register-s',
    component : SponsorRegisterComponent
  },
  {
    path : 'dashboard',
    component : DashBoardComponent
  }

];


export const WebRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
