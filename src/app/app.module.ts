import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { MainComponent } from './main/main.component';
import { Section2Component } from './section2/section2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    FooterComponent,
    Section1Component,
    MainComponent,
    Section2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
