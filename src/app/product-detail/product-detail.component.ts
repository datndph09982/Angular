import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:Product[] = [] ;
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit()  {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
        this.productService.getProduct(param.id).subscribe(data=>{
        let newProduct = {...data};
        this.products.push(newProduct);
      });
    })
  }
}
