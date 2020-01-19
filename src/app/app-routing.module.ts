import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { InfoComponent } from './Component/info/info.component';
import { NewsComponent } from './Component/news/news.component';
import { ServicesComponent } from './Component/services/services.component';
import { ContactComponent } from './Component/contact/contact.component';


const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'info', component: InfoComponent},
	{path: 'news', component: NewsComponent},
	{path: 'services', component: ServicesComponent},
	{path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
