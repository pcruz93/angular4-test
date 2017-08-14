import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import {AngularProfiler} from "@angular/platform-browser/src/browser/tools/common_tools";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<p>{{title}}</p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newService: MyDataService){}

  ngOnInit() {
    // this.newService.obj.name = "JOHN";
    // console.log(this.newService.obj.name)
    this.newService.fetchData();
  }

  /*form;
  ngOnInit(){
    this.form = new FormGroup({
      firstname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname: new FormControl("", this.textValidator),
      languages: new FormControl(""),
    });
  }

  textValidator(control) {
    if(control.value.length < 3) {
      return {'lastname': true};
    }
  }

  onSubmit = function(user) {
    console.log(user);
  }*/


  /*arr = [3, 7, 8, 2, 1];*/

   /*name = "Pedro";
   day = new Date(1992, 3, 15);*/


  /*items = ["Angular 4", "React", "Underscore"];
  newItem = "";
  pushItem = function() {
    if(this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index) {
    this.items.splice(index, 1);
  }*/


  //title = 'app works!';


  /*obj = {
    id: "1",
    name: "umair"
  }

  arr = ["abc", "def", "ghi"];
  isTrue = true;
  myName = "umair";*/
}
