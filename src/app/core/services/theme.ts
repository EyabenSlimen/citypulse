import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../../models/shop';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ShopService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/shops`;

  getAll(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }

  getById(id: number): Observable<Shop> {
    return this.http.get<Shop>(`${this.url}/${id}`);
  }

  create(shop: Omit<Shop, 'id'>): Observable<Shop> {
    return this.http.post<Shop>(this.url, shop);
  }

  update(shop: Shop): Observable<Shop> {
    return this.http.put<Shop>(`${this.url}/${shop.id}`, shop);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}