import { Component,ViewChild } from '@angular/core';
import { Nav,Platform, App } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestePage } from '../pages/menu-teste/menu-teste';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav) nav: Nav;
  rootPage = HomePage;
  pages: Array<{component: any,title: string,icon: string }>;

  constructor(platform: Platform, public myApp : App) {

    this.pages = [
    {component : HomePage, title : "Home", icon : "home"},
    {component : MenuTestePage, title : "menu-teste", icon : "paper"}
  ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(page){
  
  this.rootPage = page.component;
  //this.nav.setRoot(page.component);


  }
}
