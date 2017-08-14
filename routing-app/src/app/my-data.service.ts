import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class MyDataService {

  constructor(private http: Http) {}

  fetchData() {
    return this.http.get('assets/students.json').map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    )
  }

  obj = {
    id: "1",
    name: "pedro",
    rollno: "2342"
  }

  success() {
    return "Successful";
  }

}
