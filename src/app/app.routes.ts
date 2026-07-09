import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clients',
    loadComponent: () => import('./pages/clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'new-client',
    loadComponent: () => import('./pages/new-client/new-client.page').then( m => m.NewClientPage)
  },
  {
    path: 'edit-client/:id',
    loadComponent: () => import('./pages/edit-client/edit-client.page').then( m => m.EditClientPage)
  },
];
