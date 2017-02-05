/**
 * Created by Chanaka Fernando on 1/30/2017.
 */

import {Component} from '@angular/core';
import  {Overview} from './overview.model';
import {ServiceCalls} from "../../../services/serviceCalls.service";



@Component({
  moduleId :module.id,
  selector: 'overview',
  templateUrl: 'overview.component.html',
})
export class OverViewComponent{
  model = new Overview(100,200,300,50,10,'','','','','');
  dataObject = Array();
  private adminPropic: string;
  private adminName : string;
  private adminRole :string;


 constructor(private _serviceCalls:ServiceCalls){
   this.onInit();
   console.log(this.dataObject);
   this.adminName="Chanaka";
   this.adminPropic="/app/img/propic.jpg";
   this.adminRole="Web Developer/Designer"
 }

  onInit(){
    var url ='http://localhost:8000/overview';
    this._serviceCalls.getData(url)
      .subscribe(
        data => this.dataObject = data,
        error => alert(error),
        () => {console.log('data retreving part successfilly compleated'),
                console.log(this.dataObject)}
      );
  }

}
