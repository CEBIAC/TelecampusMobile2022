import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getUrl } from '@ionic/angular/directives/navigation/stack-utils';

@Injectable({
  providedIn: 'root'
})
export class CunsiteService {

  constructor(private httpClient: HttpClient) { }



 async getUrlCun(){

   var cunURl:string = ''
  const cunUrlRequest = await this.httpClient.get('https://telecampusapi.herokuapp.com/moodle').toPromise();

  cunURl = cunUrlRequest.valueOf().toString();
  return cunURl

}

}
