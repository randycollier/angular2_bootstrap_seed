import { Component } from 'angular2/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators
} from 'angular2/common';

@Component({
  selector: 'demo-form-ng-model',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class='panel-heading'>Demo Form: with ng-model
  </div>
  <div class='panel-body'>
    <div class="ui info message">
      The product name is: {{productName}}
    </div>
    <form [ngFormModel]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field">
        <label for="productNameInput">Product Name</label>
        <input type="text"
               id="productNameInput"
               placeholder="Product Name"
               [ngFormControl]="myForm.find('productName')"
               [(ngModel)]="productName">
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>
      <button type="submit" class="ui button">Submit</button>
    </form>
    </div>
  </div>
  `
})
export class DemoFormNgModel {
  myForm: ControlGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName':  ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
