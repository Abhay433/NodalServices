import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { WebappComponent } from './subcomponents/webapp/webapp.component';
import { MobileappComponent } from './subcomponents/mobileapp/mobileapp.component';
import { JavaComponent } from './subcomponents/java/java.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent) },

  { path: 'services', component: OurservicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'webapp', component: WebappComponent },
  { path: 'mobileapp', component: MobileappComponent },

  // Standalone component route
  { path: 'java', loadComponent: () => import('./subcomponents/java/java.component').then(c => c.JavaComponent) },
  { path: 'php', loadComponent: () => import('./subcomponents/php/php.component').then(c => c.PhpComponent) },
  { path: 'python', loadComponent: () => import('./subcomponents/python/python.component').then(c => c.PythonComponent) },
  { path: 'dotnet', loadComponent: () => import('./subcomponents/dotnet/dotnet.component').then(c => c.DotnetComponent) },
  { path: 'uiux', loadComponent: () => import('./subcomponents/uiux/uiux.component').then(c => c.UiuxComponent) },
  { path: 'apitesting', loadComponent: () => import('./subcomponents/qaapitesting/qaapitesting.component').then(c => c.QaapitestingComponent) },
  { path: 'automation', loadComponent: () => import('./subcomponents/qaautomation/qaautomation.component').then(c => c.QautomationComponent) },
  { path: 'manual', loadComponent: () => import('./subcomponents/qamanual/qamanual.component').then(c => c.QamanualComponent) },
  { path: 'maintanance', loadComponent: () => import('./helpercomponents/smaintanance/smaintanance.component').then(c => c.SmaintananceComponent) },
  { path: 'thirdparty', loadComponent: () => import('./helpercomponents/sthirdparty/sthirdparty.component').then(c => c.SthirdpartyComponent) },



  { path: 'leadership', loadComponent: () => import('./helpercomponents/aboutusleadership/aboutusleadership.component').then(c => c.AboutusLeadershipComponent) },
  { path: 'serve', loadComponent: () => import('./helpercomponents/aboutusserve/aboutusserve.component').then(c => c.AboutusserveComponent) },
  { path: 'policies', loadComponent: () => import('./helpercomponents/aboutuspolicies/aboutuspolicies.component').then(c => c.AboutuspoliciesComponent) },
  



  { path: 'cloud', loadComponent: () => import('./helpercomponents/techcloud/techcloud.component').then(c => c.TechcloudComponent) },
  { path: 'techaiml', loadComponent: () => import('./helpercomponents/techaiml/techaiml.component').then(c => c.TechaimlComponent) },
  { path: 'datascience', loadComponent: () => import('./helpercomponents/techdatascience/techdatascience.component').then(c => c.TechDataScienceComponent) },
  { path: 'blockchain', loadComponent: () => import('./helpercomponents/techblockchain/techblockchain.component').then(c => c.TechblockchainComponent) },
  { path: 'devops', loadComponent: () => import('./helpercomponents/techdevops/techdevops.component').then(c => c.TechdevOpsComponent) },



  { path: 'education', loadComponent: () => import('./helpercomponents/ieducation/ieducation.component').then(c => c.IeducationComponent) },
  { path: 'fintech', loadComponent: () => import('./helpercomponents/ifintech/ifintech.component').then(c => c.IfintechComponent) },
  { path: 'ecommerce', loadComponent: () => import('./helpercomponents/iecommerce/iecommerce.component').then(c => c.IecommerceComponent) },
  { path: 'healthcare', loadComponent: () => import('./helpercomponents/ihealthcare/ihealthcare.component').then(c => c.IhealthcareComponent) },


  

  

  

  


  








];
