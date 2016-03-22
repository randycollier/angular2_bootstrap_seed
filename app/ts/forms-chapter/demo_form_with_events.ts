/* tslint:disable:no-string-literal */
import { Component } from 'angular2/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl
} from 'angular2/common';

@Component({
  selector: 'demo-form-with-events',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">Demo Form: with events</div>
    <div class='panel-body'>
    <form [ngFormModel]="myForm"
          (ngSubmit)="onSubmit(myForm.value)"
          class="ui form">

      <div class="field"
          [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text"
               class="form-control"
               id="skuInput"
               placeholder="SKU"
               [ngFormControl]="sku">
         <div *ngIf="!sku.valid"
           class="ui error message">SKU is invalid</div>
         <div *ngIf="sku.hasError('required')"
           class="ui error message">SKU is required</div>
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>

      <button type="submit" class="ui button">Submit</button>
    </form>
    </div>
  </div>
  `
})
export class DemoFormWithEvents {
  myForm: ControlGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );

  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form.sku);
  }
}
