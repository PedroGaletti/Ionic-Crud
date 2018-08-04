import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor() {  }

  homePage = HomePage;
  productPage = ProductPage;

}
