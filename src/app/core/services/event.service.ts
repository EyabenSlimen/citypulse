import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Event } from '../../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/events`;

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  getById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.url}/${id}`);
  }

  create(event: Omit<Event, 'id'>): Observable<Event> {
    return this.http.post<Event>(this.url, event);
  }

  update(id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.url}/${id}`, event);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
