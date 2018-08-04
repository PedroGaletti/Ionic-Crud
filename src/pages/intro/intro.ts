import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Welcome to the App Product!",
      description: "The <b>App Product </b>",
      image: "../../assets/icons/product_one.gif",
    },
    {
      title: "What is App Product?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/icons/product_two.png",
    },
    {
      title: "App Product it is on Ionic Cloud",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/icons/ionic_cloud.png",
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  goApp(){
    this.navCtrl.setRoot(RegisterPage);
  }

}
