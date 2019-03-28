import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }
  
  horario1(){
    this.navCtrl.push("LunesViernesPage");
  }
  horario2(){
    this.navCtrl.push("SabadoPage");
  }
  help(){
    console.log("help");
    this.alertCtrl.create({
      title: 'AYUDA',
      buttons: ["OK"]
   }).present();
  }
  avisos(){
    this.navCtrl.push("AvisosPage");
  }

}
