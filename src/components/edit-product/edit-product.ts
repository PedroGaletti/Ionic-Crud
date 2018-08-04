import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductProvider } from '../../providers/product/product';
import { ProductPage } from '../../pages/product/product';

@Component({
  selector: 'edit-product',
  templateUrl: 'edit-product.html'
})
export class EditProductComponent {

  public formProduct: FormGroup;
  public loading: any;
  public idItem: any;
  public resultGetOne: any;
  public resEdit: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public view: ViewController,
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
      this.idItem = this.navParams.get('id');
      this.getOne();
  }

  getOne() {
    this.showLoader();
    this.productService.getOne(this.idItem).then((res) => {
      this.resultGetOne = res;
      this.formProduct.setValue({
        nome: this.resultGetOne.nome,
        quantidade: this.resultGetOne.quantidade,
        valor: this.resultGetOne.valor,
        marca: this.resultGetOne.marca,
        cover: this.resultGetOne.cover
      })
      this.loading.dismiss();
    })
  }

  edit() {
    this.showLoader();
    this.productService.edit(this.formProduct.value, this.idItem)
    .then((res) => {
      this.resEdit = res;
      this.loading.dismiss();
      this.showMensage(this.resEdit.message, 2500);
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

  closeModal() {
    this.view.dismiss();
  }

}
