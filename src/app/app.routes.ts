import { Routes, RouterModule } from '@angular/router';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { HomeComponent } from './home/home.component';


export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'manifesto',
    component: ManifestoComponent,
    loadChildren: () => import('./manifesto/manifesto.module').then(m => m.ManifestoModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

