import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/interface/iproducts';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  selectedId !: number
  prodObj !: iproduct
  btndisabled !: number;


  constructor(private _route: ActivatedRoute, private productService: ProductsService, private router: Router
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((param: Params) => {
        this.selectedId = +param['id'];
        this.prodObj = this.productService.getsingleProduct(this.selectedId)!
      })
  }



  canEdit() {
    this.router.navigate(['/products', this.selectedId, 'edit'],
      { queryParamsHandling: 'preserve' })
  }
}
