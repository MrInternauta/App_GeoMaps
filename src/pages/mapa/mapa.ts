import { Component } from '@angular/core';
import { NavController,ToastController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';



@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

 lat: number;
 lng: number;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public geolocation: Geolocation,
    private navParams: NavParams

  ) {


  this.lat = this.navParams.get("lat");
  this.lng = this.navParams.get("lng");
  this.obtenerPosicion();

  }



    obtenerPosicion():any{

const subscription = this.geolocation.watchPosition()
  .subscribe(position => {
  this.lat = position.coords.latitude;
  this.lng = position.coords.longitude;
  console.log(position.coords.longitude + ' ' + position.coords.latitude);
});


}


toast(txt: string){
  this.toastCtrl.create({
   message: txt,
   duration:2500
  }).present();
}


  }
