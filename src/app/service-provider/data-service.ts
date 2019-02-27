import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected static ___instance: DataService;
  protected _data: any={};
  get data(): any { return this._data; }

  constructor() {
    if(DataService.___instance){
      return DataService.___instance;
    }
    DataService.___instance = this;
   }

  public set(key: string, value: any){
    this._data[key] = value;
  }
  
  public get(key: string, defaultValue?: any){
    return this.data.hasOwnProperty(key)?this.data[key]:defaultValue;
  }

  public delete(key){
    if( this.data.hasOwnProperty(key)){ delete this.data[key];}
  }
  
  getNavigationData(object: any, defaultValue?: any): any{
    debugger;
    return this.get(object.key, defaultValue);
  }
  
  setNavigationData(object: any, keyName?: string): any{
   // @TODO: replace with string generator @Abeer
    keyName = keyName || (Math.random()*1000000).toString();
    this.set(keyName, object);
    return {key: keyName};
  }

}