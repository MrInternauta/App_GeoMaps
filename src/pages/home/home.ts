import { Component } from '@angular/core';
import { NavController,ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { MapaPage } from '../mapa/mapa';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 lat: number;
 lng: number;
   estado: boolean = false;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController

  ) {
    this.obtenerPosicion();
  }

obtenerPosicion():any{
  this.presentLoading("Detectando ubicación...");

  this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude

this.lat = resp.coords.latitude;
this.lng = resp.coords.longitude;
if(this.lat != 0 || this.lng != 0){
  this.navCtrl.push(MapaPage, {"lat": this.lat, "lng": this.lng });
}
else{
  this.showAlert("¡Para detectar su ubicación debe activar el GPS!");
}


}).catch((error) => {
  this.showAlert("¡Probablemente tengas que activar el GPS!");
  console.log('Error catch: ', error);
});

}

showAlert(txt: string) {
 let alert = this.alertCtrl.create({
   title: '¡Alerta!',
   subTitle: txt,
   buttons: [
      {
        text: 'Reiniciar SINEA RUTAS',
        handler: data => {
          location.reload();
        }
      }

    ]
 });
 alert.present();
}

presentLoading(txt:string) {
  let loader = this.loadingCtrl.create({
    content: txt,
    duration: 2000
  });
  loader.present();
}

desactivado()
{
  this.showAlert("¡Vamos a Reiniciar SINEA RUTAS para detectar tu ubicación!");
}

ubicar(lat: number, lng: number){


    if(lat == 0 || lng == 0){
      this.showAlert("¡Para detectar su ubicación debe activar el GPS!");


    }
    else{

      this.navCtrl.push(MapaPage, {"lat": this.lat, "lng": this.lng });
    }
}

  }
