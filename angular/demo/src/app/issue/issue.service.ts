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

  save(entity: Issue): Observable<Issue> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity._id) {
      url = `http://www.angular.at/api/issue/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Issue>(url, entity, { headers, params });
    } else {
      url = `http://www.angular.at/api/issue`;
      return this.http.post<Issue>(url, entity, { headers, params });
    }
  }

  delete(entity: Issue): Observable<Issue> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity._id) {
      url = `http://www.angular.at/api/issue/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Issue>(url, { headers, params });
    }
    return EMPTY;
  }
}

