import { Injectable } from '@angular/core';
import { Data } from './data';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  api = 'http://localhost:3000/products'
  // products = Data;
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api)
    // return this.products;
  }
  getProduct(id:String): Observable<Product>{ //detail product
    // let a =  this.products.find(product => product.id == id);
    // return a
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  Addproduct(product : Product):Observable<Product>{
    // let newProduct = {...product};
    // this.products.push(newProduct);
    return this.http.post<Product>(`${this.api}`,product);  
  }
  // Addproduct(fileToUpload: File):Observable<Product>{
  //   // let newProduct = {...product};
  //   // this.products.push(newProduct);
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.http.post<File>(`${this.api}`,fileToUpload);  
  // }
  EditProduct(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
  RemoveProduct(id:String):Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
