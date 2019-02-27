import { Component } from '@angular/core';
import { ModalController,NavController} from '@ionic/angular';
import {ItemsModalPage} from './../items-modal/items-modal.page';
import { ItemInteface } from '../../models/itemInterface';
import { myEnterAnimation } from '../../services/animations/enter';
import { myLeaveAnimation } from '../../services/animations/leave';
import {Router} from '@angular/router';
import { NavigationService } from '../../navigation.service';
import {DataService} from '../../service-provider/data-service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  protected numberOfItems:number;
  protected items:Array<ItemInteface>=[];
 
constructor(protected modalCtrl:ModalController,
            protected navCtrl:NavController,
            protected router:Router,
            protected navService:NavigationService,
            protected dataService:DataService){
}
ionViewDidEnter(){

}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ItemsModalPage,
      enterAnimation: myEnterAnimation,
       leaveAnimation: myLeaveAnimation,
      componentProps: { value: this.numberOfItems },
      cssClass: "ion-modal-full-screen" 
    });
    
     modal.onDidDismiss().then((data:any)=>{
       if(data.data.role==undefined){
        this.items=data.data.result;
       }
       else{
         this.items=[];
       }
     })
    return await modal.present();
  }
  checkDisabledButton(){
    if(this.numberOfItems==undefined)
    return true;
    else
    return false;
  }
   push(url:string,params:any) {
     alert('before push '+JSON.stringify(params));
    
  //   this.router.navigate([url],{queryParams:params});
  }
  test(){
  //   this.router.navigate(['/test/123'],{queryParams:{key1:"abeer1",key2:"abeer2"}});

  //  this.navCtrl.navigateForward('/test/123');
    // this.navCtrl.navigateRoot('/test/123');
  }
  
  goToTestPage() 
  { 
    // this.navCtrl.navigateForward('/test/123');
    var arr=[1,2,3,4,5,6];
  
    // this.router.navigate(['/test2'],{queryParams:{dummy:4,arr:arr}});
   // this.navService.push('/tabs',{})
   // when we need to navigate:
    this.navService.push(
      '/tabs',
      this.dataService.setNavigationData({
      then: (a)=>{console.log(a); },
      key1: 1,
      key2: 2,
      key3: {key31:1, key32:2},
    }));

    // this.router.navigate("/test/123", { queryParams: { dummy: 4 }});
  }
}
