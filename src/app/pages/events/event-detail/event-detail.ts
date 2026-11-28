import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService } from '../../../core/services/event.service';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-detail',
  imports: [DatePipe, RouterLink],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);

  event = signal<Event | null>(null);
  error = signal('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getById(id).subscribe({
      next: (data) => this.event.set(data),
      error: () => this.error.set('Événement introuvable.'),
    });
  }

  participate(): void {
    const current = this.event();
    if (!current) return;
    const updated = { ...current, participants: current.participants + 1 };
    this.eventService.update(current.id, updated).subscribe((saved) => this.event.set(saved));
  }
}
