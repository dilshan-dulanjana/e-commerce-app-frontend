import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { SigINComponent } from './app/sig-in/sig-in.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { CustomerPageComponent } from './app/customer-page/customer-page.component';
import { AddCustomerComponent } from './app/add-customer/add-customer.component';
import { AddProductComponent } from './app/add-product/add-product.component';
import { ProductPageComponent } from './app/product-page/product-page.component';
import { HomeComponent } from './app/home/home.component';
import { PaymentsComponent } from './app/payments/payments.component';
import { AdminRegisterComponent } from './app/admin-register/admin-register.component';

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
            },
            {
                path:"add-admin",
                component:AdminRegisterComponent
            }

        ]
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"payment",
        component:PaymentsComponent
    }
    
];
