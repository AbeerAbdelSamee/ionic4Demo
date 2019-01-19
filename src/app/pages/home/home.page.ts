import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ItemsModalPage} from './../items-modal/items-modal.page';
import { ItemInteface } from '../../models/itemInterface';
import { myEnterAnimation } from '../../services/animations/enter';
import { myLeaveAnimation } from '../../services/animations/leave';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  protected numberOfItems:number;
  protected items:Array<ItemInteface>=[];
 
constructor(protected modalCtrl:ModalController){
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
}
