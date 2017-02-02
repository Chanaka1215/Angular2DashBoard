/**
 * Created by Chanaka Fernando on 1/30/2017.
 */
import {Component} from '@angular/core';


@Component({
  moduleId :module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent{
  private adminPropic : string;
  private adminName : string;

  constructor(){
    this.adminPropic ="/app/img/propic.jpg";
    this.adminName="Chanaka"
  }

}
