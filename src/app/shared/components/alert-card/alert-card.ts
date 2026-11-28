import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Alert } from '../../../models/alert.model';
import { SeverityBadge } from '../severity-badge/severity-badge';

@Component({
  selector: 'app-alert-card',
  imports: [DatePipe, SeverityBadge],
  templateUrl: './alert-card.html',
  styleUrl: './alert-card.css',
})
export class AlertCard {
  alert = input.required<Alert>();
  remove = output<Alert>();

  typeIcon(): string {
    switch (this.alert().type) {
      case 'route':
        return '🚧';
      case 'travaux':
        return '🛠️';
      case 'accident':
        return '💥';
      default:
        return '💧';
    }
  }
}
