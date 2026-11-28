import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Alert } from '../../models/alert.model';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/alerts`;

  getAll(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.url);
  }

  getById(id: number): Observable<Alert> {
    return this.http.get<Alert>(`${this.url}/${id}`);
  }

  create(alert: Omit<Alert, 'id'>): Observable<Alert> {
    return this.http.post<Alert>(this.url, alert);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
