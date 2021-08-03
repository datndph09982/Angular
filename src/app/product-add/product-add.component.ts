import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
   product:Product = new Product() ;
  constructor(
    private productService : ProductService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    // this.addProduct();
  }
  // fileToUpload: File | null = null;
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  // }
  addProduct(){
    this.productService.Addproduct(this.product).subscribe(data=>{
      this.router.navigateByUrl('/admin');      
      console.log(data);
    })
    
  }
  
}
