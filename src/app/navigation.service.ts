import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    protected router:Router,
    protected location: Location ) { }
    async push(url:string,params:any) {
      await this.router.navigate([url],{queryParams:params});
    }
    async pop(){
      await this.location.back();
    }
}
