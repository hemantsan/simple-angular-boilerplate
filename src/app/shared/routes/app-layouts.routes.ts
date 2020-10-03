import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'create',
    loadChildren: () => import('../../modules/create/create.module').then(m => m.CreateModule)
  },
];
