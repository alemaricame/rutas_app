import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { AlertController } from "ionic-angular";
import "rxjs/add/operator/map";

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  municipio:any;
  hora:any;
  horario_salida:any;
  constructor(
    public http: Http,
    public alertCtrl: AlertController
    ) {
  }


  celaya() {
    console.log("salida celaya");

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_celaya')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })
    
  }
  villagran(){
    console.log("salida villagran");
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_villagran')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  cortazar(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_cortazar')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  celayar() {
    console.log("regreso celaya");

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_celayar')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })
    
  }
  villagranr(){
    console.log("regreso villagran");
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_villagranr')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  cortazarr(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_cortazarr')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  ////////////////////////////////////////////////Sabatinas
  celayas() {
    console.log("salida celaya");

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_celayas')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })
    
  }
  villagrans(){
    console.log("salida villagran");
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_villagrans')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  cortazars(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_cortazars')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  celayasr() {
    console.log("regreso celaya");

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_celayasr')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })
    
  }
  villagransr(){
    console.log("regreso villagran");
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_villagransr')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }
  cortazarsr(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
       return this.http.get('https://limitless-dawn-37873.herokuapp.com/index.php/expediente/salida_cortazarsr')
        .map(resp=>{
            let data_resp = resp.json();

            if(data_resp.error){
             this.alertCtrl.create({
                title: 'ERROR',
                subTitle: data_resp.mensaje,
                buttons: ["OK"]
             }).present();
            }else{
              console.log("Consulta exitosa",JSON.stringify(data_resp.horario));
              this.horario_salida = data_resp.horario; 
                return data_resp.horario;
            }
        })

  }

}
