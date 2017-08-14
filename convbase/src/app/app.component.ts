import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  b = 0;
  o = 0;
  h = 0;
  form;
  ngOnInit() {
    this.form = new FormGroup({
      bin: new FormControl(''),
      oct: new FormControl(''),
      dec: new FormControl(''),
      hex: new FormControl('')
    });
  }
  decimalChanged = function (oldValue, newValue) {
    if (newValue != '') {
      this.form.patchValue({bin: parseInt(newValue, 10).toString(2)});
      this.form.patchValue({oct: parseInt(newValue, 10).toString(8)});
      this.form.patchValue({hex: parseInt(newValue, 10).toString(16).toUpperCase()});
    } else {
      this.form.patchValue({bin: ''});
      this.form.patchValue({oct: ''});
      this.form.patchValue({hex: ''});
    }
  };
  binaryChanged = function (oldValue, newValue) {
    this.b = this.b + 1;
    if (this.b == 1) {
      if (newValue != '') {
        this.form.patchValue({dec: parseInt(newValue, 2).toString(10)});
      } else {
        this.form.patchValue({dec: ''});
      }
      this.b = 0;
    }
  };
  octalChanged = function (oldValue, newValue) {
    this.o = this.o + 1;
    if (this.o == 1) {
      if (newValue != '') {
        this.form.patchValue({dec: parseInt(newValue, 8).toString(10)});
      } else {
        this.form.patchValue({dec: ''});
      }
      this.o = 0;
    }
  };
  hexaChanged = function (oldValue, newValue) {
    this.h = this.h + 1;
    if (this.h == 1) {
      if (newValue != '') {
        this.form.patchValue({dec: parseInt(newValue, 16).toString(10)});
      } else {
        this.form.patchValue({dec: ''});
      }
      this.h = 0;
    }
  };
}
