/* tslint:disable:no-string-literal */
import { Component } from 'angular2/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl,
  Control
} from 'angular2/common';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function skuValidator(control: Control): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

function nameValidator(control: Control): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidName: true};
  }
}

@Component({
  selector: 'demo-form-with-custom-validations',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">Demo Form: with custom validations</div>
    <div class='panel-body'>
      <form [ngFormModel]="myForm"
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field"
            [class.error]="!sku.valid && sku.touched">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 [ngFormControl]="sku">
           <div *ngIf="!sku.valid"
             class="ui error message">SKU is invalid</div>
           <div *ngIf="sku.hasError('required')"
             class="ui error message">SKU is required</div>
           <div *ngIf="sku.hasError('invalidSku')"
             class="ui error message">SKU must begin with <tt>123</tt></div>
        </div>

        <div class="field"
            [class.error]="!name.valid && name.touched">
          <label for="nameInput">NAME</label>
          <input type="text"
                 id="nameInput"
                 placeholder="NAME"
                 [ngFormControl]="name">
           <div *ngIf="!name.valid"
             class="ui error message">NAME is invalid</div>
           <div *ngIf="name.hasError('required')"
             class="ui error message">NAME is required</div>
           <div *ngIf="name.hasError('invalidName')"
             class="ui error message">NAME must begin with <tt>123</tt></div>
        </div>

        <div *ngIf="!myForm.valid"
          class="ui error message">Form is invalid</div>
        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  </div>
  `
})
export class DemoFormWithCustomValidations {
  myForm: ControlGroup;
  sku: AbstractControl;
  name: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':   ['', Validators.compose([ Validators.required, skuValidator])],
      'name':  ['', Validators.compose([ Validators.required, nameValidator])],
    });

    this.sku = this.myForm.controls['sku'];
    this.name = this.myForm.controls['name'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
