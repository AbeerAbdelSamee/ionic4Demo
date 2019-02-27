import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import { NavigationService } from '../navigation.service';
import { DataService } from '../service-provider/data-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(protected route:ActivatedRoute,
    protected router:Router,
    protected location: Location,
    protected navService:NavigationService,
    protected dataService: DataService) {
      // this.dataService.setExtras(12);
   //    alert("Test page: "+this.dataService.getExtras());
    this.route.queryParams.subscribe(params=>{
      console.log('params',params);
      const data = this.dataService.getNavigationData(params);
      // data.then(3);
      console.log(data);
    });
    // this.route.queryParams.subscribe(params=>{
    // })
   }

  ngOnInit() {
  }
  goBack() 
  { 
    this.navService.pop();
    // this.location.back();
 }
    // this.navCtrl.navigateForward('/test/123');
  //  this.router.navigate(['../']);
    
    // this.router.navigate("/test/123", { queryParams: { dummy: 4 }});
  
}
