import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-test4',
  templateUrl: './test4.page.html',
  styleUrls: ['./test4.page.scss'],
})
export class Test4Page implements OnInit {

  constructor(protected navService:NavigationService) { }

  ngOnInit() {
  }
  goBack() 
  { 
    this.navService.pop();

 }
}
