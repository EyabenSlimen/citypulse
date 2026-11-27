import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="min-h-[70vh] grid place-items-center px-4">
      <div class="max-w-md text-center rounded-3xl p-10 shadow-xl border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl">
        <div class="text-6xl animate-bounce">🚧</div>
        <h1 class="font-title text-8xl font-bold bg-gradient-to-r from-turquoise to-sunset bg-clip-text text-transparent">404</h1>
        <p class="font-title text-xl mt-2 text-night dark:text-cream">Rue barrée !</p>
        <p class="mt-2 text-night/70 dark:text-cream/70">Cette page n'existe pas dans CityPulse.</p>
        <a routerLink="/" class="inline-block mt-6 px-6 py-3 rounded-full bg-turquoise text-night font-semibold hover:scale-105 transition">
          Retour au centre-ville
        </a>
      </div>
    </section>
  `,
})
export class NotFound {}