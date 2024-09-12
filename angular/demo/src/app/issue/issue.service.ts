import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Issue } from './issues';

@Injectable()
export class IssueService {

  readonly url = 'http://localhost:8082/api/v1/issues'


  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Issue> {
    const url = `http://www.angular.at/api/issue/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Issue>(url, { params, headers });
  }

  find(): Observable<Issue[]> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
    };

    return this.http.get<Issue[]>(this.url, { params, headers });
  }

  save(issue: Issue): Observable<Issue> {
    let params = new HttpParams();
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (issue._id) {
      return this.http.put<Issue>(`${this.url}/${issue._id}`, issue, { headers, params });
    } else {
      return this.http.post<Issue>(this.url, issue, { headers, params });
    }
  }

  delete(id: string): Observable<Issue> {
    let params = new HttpParams();
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Issue>(`${this.url}/${id}`, { headers, params });
  }
}

