import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import {Observable} from "rxjs";

@Injectable()
export class UserListService {
    private baseUrl: string = API_URL;
    constructor(private http:Http) { }

    getUsers(): Observable<Todo[]> {
        let body = this.http.request(this.baseUrl + 'todos').map(res => res.json());
        return body;
    }
}