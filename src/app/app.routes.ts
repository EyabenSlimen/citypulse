import { Routes } from '@angular/router';
//import { EVENTS_ROUTES } from './pages/events/events.routes';
//import { ALERTS_ROUTES } from './pages/alerts/alerts.routes';

export const routes: Routes = [
  { path: '', title: 'Accueil · CityPulse', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'shops', title: 'Commerces · CityPulse', loadComponent: () => import('./pages/shops/shop-list').then(m => m.ShopList) },
  { path: 'shops/:id', title: 'Commerce · CityPulse', loadComponent: () => import('./pages/shops/shop-detail').then(m => m.ShopDetail) },
  //{ path: 'events', children: EVENTS_ROUTES },
  //{ path: 'alerts', children: ALERTS_ROUTES },
  { path: 'login', title: 'Connexion · CityPulse', loadComponent: () => import('./pages/auth/login').then(m => m.Login) },
  { path: 'register', title: 'Inscription · CityPulse', loadComponent: () => import('./pages/auth/register').then(m => m.Register) },
  { path: '**', title: '404 · CityPulse', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound) },
];