import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { apiKey } from 'src/app/config';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  constructor(private http: HttpClient) {}

  public get<T>(path: string, query: Record<string, string> = {}) {
    return this.http.get<T>(path, {
      params: query,
    });
  }

  public post<T, K>(path: string, body: K, query: Record<string, string> = {}) {
    return this.http.post<T>(path, body, {
      params: query,
      headers: this.headers,
    });
  }

  public put<T, K>(path: string, body: K, query: Record<string, string> = {}) {
    return this.http.put<T>(path, body, {
      params: query,
      headers: this.headers,
    });
  }

  public patch<T, K>(
    path: string,
    body: K,
    query: Record<string, string> = {}
  ) {
    return this.http.patch<T>(path, body, {
      params: query,
      headers: this.headers,
    });
  }

  public delete<T, K>(path: string, query: Record<string, string> = {}) {
    return this.http.delete<T>(path, {
      params: query,
      headers: this.headers,
    });
  }
}
