/**
 * Created by Chanaka Fernando on 1/22/2017.
 */
import { Component } from '@angular/core';
import {Logging} from './logging.model';
import { ServiceCalls} from "../../services/serviceCalls.service";

@Component({
  moduleId   :  module.id,
  selector   : 'logging',
  templateUrl:'logging.component.html'
})

export class LoggingComponent  {
 model =new Logging('User Name','Password');
 public getResponse: string;
 private unFilld :boolean;
 private formValid : boolean;


 constructor(private _serviceCalls:ServiceCalls){

 }

 onSubmit(){
  var model = this.model;
  var url ='http://localhost:8000/post'
  this._serviceCalls.postData(model,url)
    .subscribe(
      data => this.getResponse = JSON.stringify(data),
      err  => alert(err),
      ()   => console.log('loging detais submission compleated')
    );
  console.log(this.getResponse);
 }


 isValid(){
   if((this.model.user_name =='User Name'|| this.model.user_name == '') || (this.model.password == 'Password' || this.model.password=='')){
     console.log('false');
     return false;
   }
   console.log('true');
   return true;
 }

}
