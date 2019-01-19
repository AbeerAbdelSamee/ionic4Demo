import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
import {ItemInteface} from './../../models/itemInterface';

@Component({
  selector: 'app-items-modal',
  templateUrl: './items-modal.page.html',
  styleUrls: ['./items-modal.page.scss'],
})
export class ItemsModalPage implements OnInit {
  protected numberOfItems;
  protected items:Array<ItemInteface>=[];
  constructor(protected modalCtrl:ModalController,
    protected navParams:NavParams) {

      this.numberOfItems=this.navParams.get('value');
      for(var i=0;i<this.numberOfItems;i++){
        var obj:ItemInteface={text:"Dummy text for item "+(i+1),selected:false}
        this.items.push(obj);
      }
      
   }

  ngOnInit() {

  }
  protected toggleStatus(item) {
    if (item.selected==true) {
      this.deselect(item);
    } else {
      this.select(item);
    }
  }
  select(item){
    item.selected=true;
  }
  deselect(item){
    item.selected=false;

  }
  isSelected(item):boolean{
    return item.selected ;
  }
  save(){
    var selectedItems=[];
    if(this.items.length>0){
      this.items.map((item,index)=>{
        if(item.selected==true){
          selectedItems.push(item);
          
        }
        if(index==this.items.length-1){
          //dismiss modal
          this.modalCtrl.dismiss({
            'result': selectedItems
          })
        }
      })
    }
    else{
      this.modalCtrl.dismiss({
        'result': []
      })
    }
  }
}
