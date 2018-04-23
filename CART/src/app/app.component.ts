import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  url='';
  listItems:any;
  constructor(){
    this.listItems=[{
      name:"Home",
      link:"#/home"
    },
    {
      name:"Products",
      link:"#/products"
    },
    {
      name:"About",
      link:"#/about"
    },
    {
      name:"Cart",
      link:"#/cart"
    },
    {
      name:"Sidebar",
      link:"#/sidebar"
    }
  
  ]
  }
  add(title,url){
    if(title!==""&&url!==""){
      url="http://" +url;
      this.listItems.push({
        name:title,
        link:url,
        isNew:true
      });
      this.title="";
      this.url="";
    }
  }
}
