import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { iproduct } from '../../interface/iproducts';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products !: iproduct[] 
  selctedProd !: number

  constructor(private productService : ProductsService , private _route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.products = this.productService.getallProd()
    console.log(this.products);
    this.selctedProd = this.products[0].id    
  }

  

  





}
