import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/shared/interface/iproducts';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-edite-product',
  templateUrl: './edite-product.component.html',
  styleUrls: ['./edite-product.component.scss']
})
export class EditeProductComponent implements OnInit {
  canEdit !: number;
  prodObj !: iproduct;
  prodUpdate !: iproduct;
  prodId !: number

  constructor(private productServices: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.prodId = +this.route.snapshot.params['id'];

    this.prodObj = this.productServices.getproduct(this.prodId)!

    this.route.queryParams.subscribe(( param : Params ) => {

      this.canEdit = +param['canEdit']
  
    })
    
  }

  onUpdate() {
    const updatedValues: iproduct = {
      id: this.prodObj.id,
      name: this.prodObj.name,
      brand: this.prodObj.brand,
      price: this.prodObj.price,
      spec: {
        camera: this.prodObj.spec.camera,
        frontCamera: this.prodObj.spec.frontCamera,
        backCamera: this.prodObj.spec.backCamera,
        processor: this.prodObj.spec.processor,
        battery: this.prodObj.spec.battery,
        display: this.prodObj.spec.display,
        ram: this.prodObj.spec.ram,
        rom: this.prodObj.spec.rom,
      },
      imageUrl: this.prodObj.imageUrl,
      isAvailable: this.prodObj.isAvailable,
      canReturn: this.prodObj.canReturn,
    };

    this.productServices.updateProdInfo(updatedValues) ; 
    this.router.navigate(['/products',this.prodId])

  }
}
