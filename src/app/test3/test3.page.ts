import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {

  constructor(protected router:Router,
              protected location:Location,
              protected navService:NavigationService) { }

  ngOnInit() {
    
  }
  goToTestPage() 
  { 
    // this.navCtrl.navigateForward('/test/123');
    var arr=[1,2,3,4,5,6];
    // this.router.navigate(['/test/123'],{queryParams:{dummy:4,arr:arr}});
    this.navService.push('/test4',{dummy:4,arr:arr})

    // this.router.navigate("/test/123", { queryParams: { dummy: 4 }});
  }
  goBack() 
  { 
    this.location.back();

 }
}
