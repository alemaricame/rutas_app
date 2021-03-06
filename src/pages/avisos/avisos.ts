import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AvisosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
})
export class AvisosPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl : AlertController
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvisosPage');
  }
  help(){
    console.log("help");
    this.alertCtrl.create({
      title: 'AYUDA',
      buttons: ["OK"]
   }).present();
  }
}
