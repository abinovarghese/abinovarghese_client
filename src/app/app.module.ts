import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule,NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
import { CarousalComponent } from './carousal/carousal.component';
import { NguCarouselModule } from '@ngu/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ParticlesModule } from "angular-particle";



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 70,
  "bgsType": "three-strings",
  "blur": 5,
  "delay": 0,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "three-strings",
  "gap": 53,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 5,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": 20,
  "minTime": .5
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    CarousalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgbModule,
    ParticlesModule
  ],
  exports:[
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
