import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../core/services/theme';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sticky top-0 z-50 backdrop-blur-lg bg-cream/70 dark:bg-night/70 border-b border-turquoise/20">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a routerLink="/" class="font-title font-bold text-xl text-turquoise">CityPulse 🏙️</a>

        <ul (click)="open.set(false)" [class.hidden]="!open()"
            class="absolute top-16 inset-x-0 flex flex-col gap-4 p-4 bg-cream dark:bg-night
                   md:static md:flex md:flex-row md:p-0 md:bg-transparent md:dark:bg-transparent">
          @for (l of links; track l.path) {
            <li>
              <a [routerLink]="l.path" routerLinkActive="text-turquoise"
                 [routerLinkActiveOptions]="{ exact: l.path === '/' }"
                 class="hover:text-turquoise transition">{{ l.label }}</a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-3">
          <button (click)="theme.toggle()" aria-label="Changer de thème"
                  class="text-xl hover:scale-110 transition">
            {{ theme.isDark() ? '☀️' : '🌙' }}
          </button>
          <button class="md:hidden text-2xl" (click)="open.set(!open())">{{ open() ? '✕' : '☰' }}</button>
        </div>
      </div>
    </nav>`,
})
export class Navbar {
  open = signal(false);
  theme = inject(ThemeService);
  links = [
    { path: '/', label: 'Accueil' },
    { path: '/shops', label: 'Commerces' },
    { path: '/events', label: 'Événements' },
    { path: '/alerts', label: 'Signalements' },
    { path: '/auth/login', label: 'Connexion' },
  ];
}