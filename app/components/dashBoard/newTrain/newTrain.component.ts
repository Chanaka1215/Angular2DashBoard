
/**
 * Created by Chanaka Fernando on 2/4/2017.
 */
import {Component} from '@angular/core';

import {ServiceCalls} from "../../../services/serviceCalls.service";



@Component({
  moduleId :module.id,
  selector: 'bus',
  templateUrl: 'newTrain.component.html',
})
export class newTrainComponent{
  profileObject =Array();



  constructor(private _serviceCalls:ServiceCalls){
    this.onInit();
    console.log(this.profileObject);
  }

  onInit(){
    var url ='http://localhost:8000/profile';
    this._serviceCalls.getData(url)
      .subscribe(
        data => this.profileObject = data,
        error => alert(error),
        () => {console.log('data retreving part successfilly compleated'),
          console.log(this.profileObject)}
      );
  }

}


