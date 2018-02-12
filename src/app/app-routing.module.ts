import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhpComponent } from './bhp/bhp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadComponent } from './download/download.component';
import { PriceComponent } from './price/price.component';
import { RegulationsComponent } from './regulations/regulations.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'bhp', component: BhpComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'price', component: PriceComponent},
  {path: 'regulations', component: RegulationsComponent},
  {path: '', component: AboutComponent, pathMatch: 'full'},
  {path: '**', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
