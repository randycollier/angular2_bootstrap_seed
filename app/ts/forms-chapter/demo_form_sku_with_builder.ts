import { Component } from 'angular2/core';
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup
} from 'angular2/common';

@Component({
  selector: 'demo-form-sku-builder',
  directives: [FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">Demo Form: Sku with Builder</div>
    <div class='panel-body'>
      <form [ngFormModel]="myForm" 
            (ngSubmit)="onSubmit(myForm.value)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text" 
                 id="skuInput" 
                 placeholder="SKU"
                 [ngFormControl]="myForm.controls['sku']">
        </div>

      <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  </div>
  `
})
export class DemoFormSkuBuilder {
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
