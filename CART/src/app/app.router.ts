import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const router: Routes=[
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'cart',component:CartComponent},
    {path:'products',component:ProductsComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'home',component:HomeComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);