import { Component, computed, input } from '@angular/core';
import { AlertSeverity } from '../../../models/alert.model';

@Component({
  selector: 'app-severity-badge',
  templateUrl: './severity-badge.html',
  styleUrl: './severity-badge.css',
})
export class SeverityBadge {
  severity = input.required<AlertSeverity>();

  icon = computed(() => {
    switch (this.severity()) {
      case 'faible':
        return '🟢';
      case 'moyenne':
        return '🟠';
      default:
        return '🔴';
    }
  });

  classes = computed(() => {
    switch (this.severity()) {
      case 'faible':
        return 'bg-emerald-500/20 text-emerald-300';
      case 'moyenne':
        return 'bg-[#F59E0B]/20 text-[#F59E0B]';
      default:
        return 'bg-red-500/20 text-red-300 animate-pulse';
    }
  });
}
