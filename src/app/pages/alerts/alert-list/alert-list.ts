import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertService } from '../../../core/services/alert.service';
import { AlertCard } from '../../../shared/components/alert-card/alert-card';
import { Alert } from '../../../models/alert.model';

@Component({
  selector: 'app-alert-list',
  imports: [AlertCard, RouterLink],
  templateUrl: './alert-list.html',
  styleUrl: './alert-list.css',
})
export class AlertList implements OnInit {
  private alertService = inject(AlertService);

  alerts = signal<Alert[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.alertService.getAll().subscribe({
      next: (data) => {
        this.alerts.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Impossible de charger les alertes. L'API est-elle lancée ?");
        this.loading.set(false);
      },
    });
  }

  onRemove(alert: Alert): void {
    this.alertService.delete(alert.id).subscribe(() => {
      this.alerts.update((list) => list.filter((a) => a.id !== alert.id));
    });
  }
}
