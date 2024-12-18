import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SnowDownComponent } from './app/snow-down/snow-down.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SnowDownComponent,
    IonicModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

  @NgModule({
    imports: [IonicModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  })
  title = 'e-commerce-app';
}
