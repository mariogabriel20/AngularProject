import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { InfoComponent } from './Component/info/info.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ServicesComponent } from './Component/services/services.component';
import { NewsComponent } from './Component/news/news.component';
import { ContactComponent } from './Component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    FooterComponent,
    ServicesComponent,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
