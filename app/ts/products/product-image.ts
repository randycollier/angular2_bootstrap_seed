import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
	selector: 'product-image',
	host: {class: 'product-thumb'},
	inputs: ['product'],
	template: `
	<img [src]='product.imageUrl'>
	`
})
export class ProductImage {
	product: Product;
	constructor(){

		console.log('yep')
	}
}