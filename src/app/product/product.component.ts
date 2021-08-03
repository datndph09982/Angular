import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]=[];
  
  status = false;
  constructor(
    private productService : ProductService
  ) { 
    
  }

  ngOnInit(): void {
    this.getProducts();
  }
  // onHandleClick(){
  //   console.log('clicked!');
  //   this.product.status = false;
  // }
  // onHandleKeyPress(e: any){
  //   console.log(e.target.value);
  //   this.product.name=e.target.value;
  // }

  onHandleRemove(id: any){
    this.productService.RemoveProduct(id).subscribe(response =>{
      this.products =this.products.filter(items => items.id != response.id);
    })
  }
  changeStatus(){
    this.status = !this.status
  }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
      console.log(data);
      
    })
  }
}
