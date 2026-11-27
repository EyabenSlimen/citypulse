import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="mt-16 border-t border-night/10 dark:border-white/10">
      <div class="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row justify-between gap-2 text-sm text-night/60 dark:text-cream/60">
        <span class="font-title font-semibold text-night dark:text-cream">CityPulse</span>
        <span>© 2026 · Projet universitaire Angular</span>
      </div>
    </footer>
  `,
})
export class Footer {}