import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./components/components.module').then(x => x.ComponentsModule) }
];
