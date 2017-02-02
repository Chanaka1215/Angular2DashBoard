/**
 * Created by Chanaka Fernando on 1/29/2017.
 */
import {Component} from '@angular/core';


@Component({
  moduleId :module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent{
  private adminPropic : string;
  private adminName : string;

  constructor(){
    this.adminPropic ="/app/img/propic.jpg";
    this.adminName="Chanaka"
  }

}
