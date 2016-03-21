import { Component, OnInit } from 'angular2/core';
import {   
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl} from 'angular2/common';

import {BtnClickService} from '../services/btn_click_service';
import {Click} from '../models/models';


import {appInjector} from '../services/app_injector.service';



@Component({
  selector: 'forms-test',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  host:{
    class:'row'
  },
  template: `
  <div class="panel panel-default">
    <div class="panel-heading ">Form Test</div>
    <div class='panel-body' [class.alert-success]='isSuccess()' [class.alert-warning]='isWarning()'>
      <form [ngFormModel]='myForm'
            (ngSubmit)="onSubmit(myForm)"
            class="ui form">

        <div class="field">
          <label for="skuInput">SKU</label>
          <input type="text"
                 id="skuInput"
                 placeholder="SKU"
                 ngControl="sku"
                 required>
        </div>
        <div *ngIf="sku.hasError('invalidSku')"
 class="ui error message">SKU must begin with <tt>123</tt></div>
        <div *ngIf="!sku.valid">sku isn't valid</div>
        <div *ngIf="sku.hasError('required')">sku is required</div>
        <div class="field">
          <label for="nameInput">SKU</label>
          <input type="text"
                 id="nameInput"
                 placeholder="NAME"
                 ngControl="name"
                 required >
        </div>
        <input type='text' placeholder='observer' #myObserver (keydown.tab)="onTab($event)" >
       
         <div *ngIf="!myForm.valid"
          class="ui error message">Form is invalid</div>
<h3>valid: {{myForm.valid}}</h3>

        <button type="submit" class="btn ui button"  >Submit</button>
      </form>
    </div>
  </div>
  `

})
export class FormsTest implements OnInit {
	skuValidator(control: Control): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }



  myForm: ControlGroup;
	sku: AbstractControl;
  constructor(fb:FormBuilder, public btnClickService: BtnClickService){

    this.myForm = fb.group({
      'sku': ['', Validators.compose([
                                      Validators.required, this.skuValidator])],
      'name':['my name']
    })

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

  ngOnInit(): void {
    this.btnClickService.currentClick
      .subscribe(
        (msg: Click) => {
          //this.something = msg.msg;
  if(msg !== null) {
    alert(msg.msg)
  }          
        });
  }


  onTab(event) {
    let val = event.target.value;
    console.log('myObserver')
    console.log(val)
    let click:Click = new Click(val);
    this.btnClickService.setCurrentClick(click);
  }
	onSubmit(form: any): void {

		console.log('you submitted value:',form.value);
	}

 

	isSuccess(){

  //return this.myForm.controls.name.valid;
	//return this.myForm.valid;
  return true;
	}
  isWarning(){
    
    return this.myForm.touched;
  }
}
