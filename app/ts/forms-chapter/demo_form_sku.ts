import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">Demo Form: Sku</div>
    <div class='panel-body'>
      <form #f="ngForm"
            (ngSubmit)="onSubmit(f.value)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 ngControl="sku">
        </div>

        <button type="submit" class="ui button">Submit</button>
      </form>
    </div>
  </div>
  `
})
export class DemoFormSku {
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
