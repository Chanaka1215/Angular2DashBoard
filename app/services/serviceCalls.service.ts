/**
 * Created by Chanaka Fernando on 1/27/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServicesFromBackendAPI{
  constructor(private  _http: Http){
    console.log('bus Api service started');
  }


  postLoggingData(object : any){
    console.log('access postLoggingData...');
    var obj =JSON.stringify(object);
    var body = obj;
    var header = new Headers();
    header.append('Content-Type','application/json')
    return this._http.post('http://localost:8000/post',body,{headers:header}).map(res => res.json());
  }

  postNewSponsor(object : any){
  console.log('access postNewSponsor...');
  var obj =JSON.stringify(object);
  var body = obj;
  var header = new Headers();
  header.append('Content-Type','application/json')
  return this._http.post('http://localost:8000/register',body,{headers:header}).map(res => res.json());
 }

}
