import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the SabadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sabado',
  templateUrl: 'sabado.html',
})
export class SabadoPage {
  public items: any = [];
  salida:any;
  ida:any;
  regresos:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public services : ServicesProvider,
    public alertCtrl :AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SabadoPage');
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
      this.services.celayas().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      });      
      break;

      case 'cortazar':
        this.services.cortazars().subscribe((data)=>{

          this.salida = JSON.stringify(data);
          this.items = data;
        });      
      break;

      case 'villagran':
      this.services.villagrans().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      }); 
      break;
        
    }
  }

  onRegresos(){
    switch(this.regresos){
      case 'rcelaya':
      this.services.celayasr().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      });      
      break;

      case 'rcortazar':
        this.services.cortazarsr().subscribe((data)=>{

          this.salida = JSON.stringify(data);
          this.items = data;
        });      
      break;

      case 'rvillagran':
      this.services.villagransr().subscribe((data)=>{

        this.salida = JSON.stringify(data);
        this.items = data;
      }); 
      break;
    

  }
}
}
