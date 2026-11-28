import { Component, OnInit, inject, signal } from '@angular/core';
import { EventService } from '../../../core/services/event.service';
import { EventCard } from '../../../shared/components/event-card/event-card';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList implements OnInit {
  private eventService = inject(EventService);

  events = signal<Event[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Impossible de charger les événements. L'API est-elle lancée ?");
        this.loading.set(false);
      },
    });
  }

  onParticipate(event: Event): void {
    const updated = { ...event, participants: event.participants + 1 };
    this.eventService.update(event.id, updated).subscribe((saved) => {
      this.events.update((list) => list.map((e) => (e.id === saved.id ? saved : e)));
    });
  }
}
