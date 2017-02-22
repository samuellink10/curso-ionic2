import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConnectionTeste} from '../../providers/connection-teste'



/*
  Generated class for the MenuTeste page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-teste',
  templateUrl: 'menu-teste.html',

})
export class MenuTestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ct: ConnectionTeste) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTestePage');
  }
  buscarCep():void {

    this.ct.getCep().then((res)=> {let json = res.json(); console.log(json.logradouro)}).catch((err)=>{console.log(err)});}

}
