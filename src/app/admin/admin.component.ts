import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[]=[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  onHandleRemove(id: any){
    this.productService.RemoveProduct(id).subscribe(response =>{
      this.products =this.products.filter(items => items.id != response.id);
    })
  }
 
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
      console.log(data);
      
    })
  }
}
