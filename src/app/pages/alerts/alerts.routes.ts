import { Routes } from '@angular/router';
import { AlertList } from './alert-list/alert-list';

export const ALERTS_ROUTES: Routes = [
  { path: '', component: AlertList },
  // { path: 'new', component: AlertForm }  → sera ajouté au ticket CP-18
];
