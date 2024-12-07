import { Routes } from '@angular/router';
import { SignupComponent } from './app/signup/signup.component';
import { SigINComponent } from './app/sig-in/sig-in.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { CustomerPageComponent } from './app/customer-page/customer-page.component';
import { ProductWindowComponent } from './app/product-window/product-window.component';

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
                path:"product-page",
                component:ProductWindowComponent
            }
        ]
    }
];
