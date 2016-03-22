import {Component, EventEmitter} from 'angular2/core';
import {Product} from './product';
import {ProductImage} from './product-image';

@Component({
	selector:'product-item',
	template:`

	

<div class="panel panel-default">
  <div class="panel-body">
   <div class='row'>
   <div class='col-lg-3'><product-image [product]='product'></product-image></div>
   <div class='col-lg-9'>
	<div class="content">
		<div class="header">{{ product.name }}</div>
			<div class="meta">
			<div class="product-sku">SKU #{{ product.sku }}</div>
		</div>
		<div class="description">
			<product-department [product]="product"></product-department>
			</div>
		</div>
   </div>
   </div>
  </div>
</div>


	`,
	inputs:['product'],
	directives:[ProductImage]
})

export class ProductItem {
	name:string;
	age:number
	enabled:boolean;

	constructor(){
		let ee = new EventEmitter();
		ee.subscribe((name:string) => console.log(`hello ${name}`);
		ee.emit('nate');
		console.log(this.name)
	}


}