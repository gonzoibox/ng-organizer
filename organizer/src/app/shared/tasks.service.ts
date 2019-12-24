import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Task {
    title: string
    id?: string
    date?: string
}

@Injectable({providedIn:'root'})
export class TaskService {
    public static url = 'https://ng-organizer-cd610.firebaseio.com/tasks'

    constructor(private http: HttpClient) {
    }

    create(task: Task): Observable<Task> {
        return this.http
        .post<any>(`${TaskService.url}/${task.date}.json`, task)
        .pipe(map(res => {
            console.log('response', res)
            return res
        }))
    }
}