import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { BhpComponent } from './bhp/bhp.component';
import { PriceComponent } from './price/price.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    RegulationsComponent,
    BhpComponent,
    PriceComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
