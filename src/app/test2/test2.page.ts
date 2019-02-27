import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

  constructor(protected router:Router,
    protected location:Location) { }

  ngOnInit() {
  }
  goToTestPage() 
  { 
    // this.navCtrl.navigateForward('/test/123');
    var arr=[1,2,3,4,5,6];
    this.router.navigate(['/test3'],{queryParams:{dummy:4,arr:arr}});
    
    // this.router.navigate("/test/123", { queryParams: { dummy: 4 }});
  }
  goBack() 
  { 
    this.location.back();

 }
}
