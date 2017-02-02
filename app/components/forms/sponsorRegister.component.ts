/**
 * Created by Chanaka Fernando on 1/25/2017.
 */
import { Component } from '@angular/core';
import {Sponsor} from "./sponsorRegister.model";
import {ServiceCalls} from "../../services/serviceCalls.service";

@Component({
  moduleId   :  module.id,
  selector   : 'spo',
  templateUrl: 'sponsorRegister.component.html'
})

export class SponsorRegisterComponent  {
  states=['Colombo','Galle','Matara','Kandy','Hatton','Jaffna'];
  //model =new Sponsor('Company Name','Display Name','Password','Email','Teliphone Number','Fax Number','Address','State','Zip Code','Description');
  model = new Sponsor('','','','','','','','','','');
  private response: string;

  constructor(private _serviceCalls:ServiceCalls){

  }

  onSubmit(){
    var object = this.model;
    var url ='http://localhost:8000/register-sponsor';
    this._serviceCalls.postData(object,url)
      .subscribe(
        data => this.response =JSON.stringify(data),
        error => alert(error),
        () => console.log('Sponsor registration data submissin compleate')
      );
    console.log(this.response);
  }



}

