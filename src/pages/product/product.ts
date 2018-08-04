import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { EditProductComponent } from '../../components/edit-product/edit-product';
import { CreateProductsPage } from '../create-products/create-products';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public items: any = [];
  public loading;
  public deleteRes: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modal: ModalController,
    public productService: ProductProvider,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.getAll();
  }

  getAll(){
    this.productService.getAll()
    .then((res) => {
      console.log(res);
      this.items = res;
    })
  }

  add(){
    this.navCtrl.push(CreateProductsPage);
  }

  delete(id) {
    this.productService.delete(id)
    .then((res) => {
      this.deleteRes = res;
      this.showMensage(this.deleteRes.message, 2500);
      this.getAll();
    })
  }

  edit(_id){
    const editProductModal = this.modal.create(EditProductComponent, { id: _id });
    editProductModal.present();
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
