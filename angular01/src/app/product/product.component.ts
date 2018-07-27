import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/index";
import "rxjs/Rx";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// 控制器
export class ProductComponent implements OnInit {

  public products: Product[];

  public imgUrl = 'http://placehold.it/320x150';

  public keyword: string;

  public titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) { 
    this.titleFilter.valueChanges
    .debounceTime(500)
    .subscribe(
      value => this.keyword = value
    );
  }

  // 组件生命周期钩子中的一个,会在组件实例化的过程中调用一次
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


