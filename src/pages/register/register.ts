import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage { 

  public formUser: FormGroup;
  public loading: any;
  public createRes: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userService: UserProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
      this.formUser = formBuilder.group({
        nome: [null, [Validators.required]],
        password: [null, [Validators.required]],
        passwordAgain: [null, [Validators.required]],
        email: [null, [Validators.required]],
        telefone: [null, [Validators.required]],
        cover: [null, [Validators.required]]
      })
  }

  create() {
    this.showLoader();
    this.userService.register(this.formUser.value)
    .then((res) => {
      this.createRes = res;
      this.loading.dismiss();
      this.showMensage(this.createRes.message, 3500);
      this.navCtrl.setRoot(TabsPage);
    })
    .catch((err) => {
      let validatePassword = (this.formUser.value.password != this.formUser.value.passwordAgain) ? 'Senhas não se batem !' : '';
      let data = err.json();
      this.loading.dismiss();
      this.showMensage((validatePassword) ? validatePassword : data.message, 3500);
    })
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    })
  }

  showMensage(message: string, duration?: number) {
    let menssage = this.toastCtrl.create({
      message: message,
      duration: duration,
      showCloseButton: true,
      closeButtonText: 'OK',
    })
    menssage.present();
  }

}
