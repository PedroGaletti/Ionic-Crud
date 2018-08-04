import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductProvider } from '../../providers/product/product';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-create-products',
  templateUrl: 'create-products.html',
})
export class CreateProductsPage {

  public formProduct: FormGroup;
  public loading: any;
  public createRes: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public productService: ProductProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
      this.formProduct = formBuilder.group({
        nome: [null, [Validators.required]],
        quantidade: [null, [Validators.required]],
        valor: [null, [Validators.required]],
        marca: [null, [Validators.required]],
        cover: [null, [Validators.required]]
      })
  }

  create() {
    this.showLoader();
    this.productService.add(this.formProduct.value)
    .then((res) => {
      this.createRes = res;
      this.loading.dismiss();
      this.showMensage(this.createRes.message, 2500);
      this.navCtrl.setRoot(ProductPage);
    })
    .catch((err) => {
      let data = err.json();
      this.loading.dismiss();
      this.showMensage(data.message, 2500);
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
