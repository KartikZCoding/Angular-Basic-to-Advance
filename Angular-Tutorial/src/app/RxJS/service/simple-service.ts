import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {

  $courseDuration = new BehaviorSubject<string>("2 months");

  $roleBehaviour = new BehaviorSubject<string>("");
  $roleSub = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();

  constructor(private http: HttpClient) { }

  getJsonUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap((userListData: any) => {
        // debugger
        console.log(userListData);
      }),
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      }))
    )
  }

  getSingleUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData: any) => userData.address)
    )
  }

  // getUserById(id:number){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  // }
  getUserById(id: number): any | undefined {
    if (!this.userDetails.has(id)) {
      const userDataObs = this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
        shareReplay(1)
      );
      this.userDetails.set(id, userDataObs);
    }
    return this.userDetails.get(id);
  }
}
