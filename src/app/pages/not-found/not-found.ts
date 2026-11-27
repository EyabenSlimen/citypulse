import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="min-h-[70vh] grid place-items-center px-4 text-center">
      <div>
        <p class="font-title text-8xl sm:text-9xl font-bold bg-gradient-to-r from-turquoise to-sunset bg-clip-text text-transparent">404</p>
        <h1 class="mt-4 font-title text-2xl text-night dark:text-cream">Page introuvable</h1>
        <p class="mt-2 text-night/60 dark:text-cream/60">Cette rue n'existe pas dans CityPulse.</p>
        <a routerLink="/" class="inline-block mt-8 rounded-full bg-turquoise px-6 py-3 font-semibold text-night hover:brightness-110 transition">Retour à l'accueil</a>
      </div>
    </section>
  `,
})
export class NotFound {}