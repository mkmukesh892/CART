import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Jsonp } from '@angular/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products:any;
  cartProducts=[];
  constructor(private router:Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data!==null){
      this.cartProducts=JSON.parse(data);
    }else{
      this.cartProducts=[];
    }
    this.products=[
      {
        id:1,
        title:"Pepsi",
        description:"Pepsi",
        img:"assets/pepsi (2).jpg",
        price:5
      },
      {
        id:2,
        title:"Earphone",
        description:"Earphone",
        img:"assets/earphone (2).jpg",
        price:4
      },
      {
        id:3,
        title:"Godrej",
        description:"Godrej",
        img:"assets/godrej (2).png",
        price:10
      },
      {
        id:4,
        title:"Liker",
        description:"Liker",
        img:"assets/liker (2).jpg",
        price:3
      },
      {
        id:5,
        title:"Makeup",
        description:"Makeup",
        img:"assets/makeup (2).png",
        price:2
      },
      {
        id:6,
        title:"Quicrey",
        description:"Quicrey",
        img:"assets/quickry (2).jpg",
        price:1
      },
      {
        id:7,
        title:"set-wet",
        description:"set-wet",
        img:"assets/set-wet (2).png",
        price:0.5
      },
      {
        id:8,
        title:"tsi",
        description:"tsi",
        img:"assets/tsi (2).png",
        price:5
      },
      {
        id:9,
        title:"Computer",
        description:"Desktop Computer",
        img:"assets/laptop (2).jpg",
        price:1.5
      }
    ];
  }
addToCart(index){
  let product=this.products[index];
  let cartData=[];
  let data=localStorage.getItem('cart');
  //console.log("data: "+data);
  if(data!==null){
    cartData=JSON.parse(data);
  }
  cartData.push(product);
  this.updateCartData(cartData);
  localStorage.setItem('cart',JSON.stringify(cartData));
  data=localStorage.getItem('cart');
  this.products[index].isAdded=true;
}
updateCartData(cartData){
  this.cartProducts=cartData;
}
goToCart(){
  this.router.navigate(['/cart']);
}
}
