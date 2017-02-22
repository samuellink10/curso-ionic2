import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuTestePage} from '../pages/menu-teste/menu-teste';
import {ConnectionTeste} from '../providers/connection-teste'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestePage
  ],
  providers: [ConnectionTeste]
})
export class AppModule {}
