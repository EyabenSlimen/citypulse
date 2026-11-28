import { Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { EventDetail } from './event-detail/event-detail';

export const EVENTS_ROUTES: Routes = [
  { path: '', component: EventList },
  { path: ':id', component: EventDetail },
];
