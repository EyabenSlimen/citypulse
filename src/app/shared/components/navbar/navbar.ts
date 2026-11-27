import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 border-b border-night/10 dark:border-white/10 bg-cream/80 dark:bg-night/80 backdrop-blur-lg">
      <nav class="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <a routerLink="/" class="flex items-center gap-2 font-title text-xl font-semibold text-night dark:text-cream">
          <span class="h-2.5 w-2.5 rounded-full bg-turquoise animate-pulse"></span>CityPulse
        </a>

        <ul class="hidden md:flex gap-8 text-sm font-medium text-night/70 dark:text-cream/70">
          @for (l of links; track l.path) {
            <li>
              <a [routerLink]="l.path" routerLinkActive="!text-turquoise"
                 [routerLinkActiveOptions]="{ exact: l.path === '/' }"
                 class="hover:text-turquoise transition-colors">{{ l.label }}</a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2">
          <button (click)="theme.toggle()" aria-label="Changer le thème"
                  class="p-2 rounded-full text-night dark:text-cream hover:bg-night/5 dark:hover:bg-white/10 transition">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              @if (theme.isDark()) {
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              } @else {
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              }
            </svg>
          </button>
          <a routerLink="/login" class="hidden sm:block rounded-full bg-turquoise px-4 py-2 text-sm font-semibold text-night hover:brightness-110 transition">Connexion</a>
          <button (click)="open.set(!open())" aria-label="Menu" class="md:hidden p-2 text-night dark:text-cream">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      @if (open()) {
        <ul class="md:hidden px-4 pb-4 space-y-3 text-night dark:text-cream">
          @for (l of links; track l.path) {
            <li><a [routerLink]="l.path" (click)="open.set(false)" class="block">{{ l.label }}</a></li>
          }
          <li><a routerLink="/login" (click)="open.set(false)" class="block text-turquoise font-semibold">Connexion</a></li>
        </ul>
      }
    </header>
  `,
})
export class Navbar {
  theme = inject(ThemeService);
  open = signal(false);
  links = [
    { path: '/', label: 'Accueil' },
    { path: '/shops', label: 'Commerces' },
    { path: '/events', label: 'Événements' },
    { path: '/alerts', label: 'Signalements' },
  ];
}