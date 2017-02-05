/**
 * Created by Chanaka Fernando on 1/24/2017.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {CarouselComponent} from "./components/carousel/carousel.component";
import {LoggingComponent} from "./components/logging_s/logging.component";
import {SponsorRegisterComponent} from "./components/forms/sponsorRegister.component";
import {OverViewComponent} from "./components/dashBoard/overview/overview.component";
import {BusFormComponent} from "./components/dashBoard/busForm/busForm.component";
import {newDriverComponent} from "./components/dashBoard/driverForm/newDriver.component";
import {newConductorComponent} from "./components/dashBoard/conductor/newConductor.component";
import {newTrainComponent} from "./components/dashBoard/newTrain/newTrain.component";

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
    component : OverViewComponent
  },
  {
    path: 'new-bus',
    component : BusFormComponent
  },
  {
    path:'new-driver',
    component:  newDriverComponent
  },
  {
    path :'new-conductor',
    component: newConductorComponent
  },
  {
    path : 'new-train',
    component:newTrainComponent
  }

];


export const WebRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
