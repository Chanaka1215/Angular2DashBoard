/**
 * Created by Chanaka Fernando on 1/27/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceCalls{
  constructor(private  _http: Http){
    console.log('bus Api service started');
  }


  postData(object:any,url:string){
    console.log('access postLoggingData...');
    var obj =JSON.stringify(object);
    var body = obj;
    var header = new Headers();
    header.append('Content-Type','application/json')
    return this._http.post(url,body,{headers:header}).map(res => res.json());
  }

  getData(url:string){
    console.log("get request done");
    return this._http.get(url).map(res => res.json());
  }
}
