import { Component ,AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeNavigationComponent } from '../home-navigation/home-navigation.component';
import { Banner1Component } from '../banner1/banner1.component';
import { MostSellingItemCatagoryComponent } from '../most-selling-item-catagory/most-selling-item-catagory.component';
import { ItemTableComponent } from '../item-table/item-table.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { SidebarCategryComponent } from '../sidebar-categry/sidebar-categry.component';
import { CircleRounderComponent } from '../circle-rounder/circle-rounder.component';
import { CardSetComponent } from '../card-set/card-set.component';
import { BottomNavigationComponent } from '../bottom-navigation/bottom-navigation.component';
import { NewItemsComponent } from '../new-items/new-items.component';
import { HomeCaroselComponent } from '../home-carosel/home-carosel.component';
import { HomeVideoComponent } from '../home-video/home-video.component';

@Component({
  selector: 'app-home',
  imports: [
     IonicModule ,
     HomeNavigationComponent,
     Banner1Component,
     MostSellingItemCatagoryComponent,
     ItemTableComponent,
     HomeSliderComponent,
     AddToCartComponent ,
     SidebarCategryComponent,
     CircleRounderComponent,
     CardSetComponent,
    BottomNavigationComponent,
    NewItemsComponent,
    HomeCaroselComponent,
    HomeVideoComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}

