import { Component,ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams, Item, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-lunes-viernes',
  templateUrl: 'lunes-viernes.html',
})
export class LunesViernesPage {
  
  fecha = new Date();
  salida:any;
  ida:any;
  hora:any;
  regresos:any;
  public items: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public services : ServicesProvider,
    public alertCtrl :AlertController
    ) {
      
  }

  ionViewDidLoad() {
  }
  help(){
    console.log("help");
    this.alertCtrl.create({
      title: 'AYUDA',
      buttons: ["OK"]
   }).present();
  }

  onChange(){

    switch(this.ida){
      case 'celaya':
      this.services.celaya().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      });      
      break;

      case 'cortazar':
        this.services.cortazar().subscribe((data)=>{

          this.salida = JSON.stringify(data);
          this.items = data;
        });      
      break;

      case 'villagran':
      this.services.villagran().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      }); 
      break;
        
    }
  }

  onRegresos(){
    switch(this.regresos){
      case 'rcelaya':
      this.services.celayar().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      });      
      break;

      case 'rcortazar':
        this.services.cortazarr().subscribe((data)=>{

          this.salida = JSON.stringify(data);
          this.items = data;
        });      
      break;

      case 'rvillagran':
      this.services.villagranr().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      }); 
      break;
    

  }
}

}
