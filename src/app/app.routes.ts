import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: OurservicesComponent },
  { path: 'contact', component: ContactComponent },
];
