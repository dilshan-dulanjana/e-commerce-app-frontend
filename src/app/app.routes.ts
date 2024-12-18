import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { SigINComponent } from './app/sig-in/sig-in.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { CustomerPageComponent } from './app/customer-page/customer-page.component';
import { ProductWindowComponent } from './app/product-window/product-window.component';
import { AddCustomerComponent } from './app/add-customer/add-customer.component';
import { AddProductComponent } from './app/add-product/add-product.component';
import { ProductPageComponent } from './app/product-page/product-page.component';
import { BarcodeGeneratorComponent } from './app/barcode-generator/barcode-generator.component';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"signIN",
        component:SigINComponent
    },
    {
        path:"",
        component:SigINComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        children:[
            {
                path:"customer-page",
                component:CustomerPageComponent
            },
            {
                path:"add-customer",
                component:AddCustomerComponent
            },
            {
                path:"add-product",
                component:AddProductComponent,

            },
            {
                path:"product-page",
                component:ProductPageComponent
            }

        ]
    },
    {
        path:"home",
        component:HomeComponent
    }
];
