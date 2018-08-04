import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { LocalStorageConfigProvider } from '../providers/local-storage/local-storage-config';

import { EditProductComponent } from '../components/edit-product/edit-product';
import { CreateProductsPage } from '../pages/create-products/create-products';
import { ProductPage } from '../pages/product/product';
import { ProductProvider } from '../providers/product/product';

import { UserProvider } from '../providers/user/user';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditProductComponent,
    CreateProductsPage,
    ProductPage,
    IntroPage,
    TabsPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EditProductComponent,
    CreateProductsPage,
    ProductPage,
    IntroPage,
    TabsPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider,
    LocalStorageConfigProvider,
    UserProvider
  ]
})
export class AppModule {}
