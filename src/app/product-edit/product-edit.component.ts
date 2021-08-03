import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product:Product = new Product() ;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data=>{
      this.product= data;
      console.log(data);
    });
  })
  }
  editProduct(){
    this.productService.EditProduct(this.product).subscribe(data=>{
      this.router.navigateByUrl('/admin');      
    })
  }
}
