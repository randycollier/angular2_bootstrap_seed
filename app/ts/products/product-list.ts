import {Component, EventEmitter} from 'angular2/core';
import {Product} from './product';
import {ProductItem} from './product-item';


@Component({
	selector: 'product-list',
	host:{class:''},
	template:`<div>{{productList.length}} </div>
	<product-item *ngFor="#prod of productList" class='row'
		(click)='clicked(prod)'
		[product]='prod'
		[class.selected]='isSelected(prod)'
		
	></product-item>
	`,
	directives:[ProductItem],
	inputs:['productList'],
	outputs:['onProductSelected']
})

export class ProductList{
	/**
	 * @input products - this Product[] passed to
	*/
	products:Product[];

	/**
	 * @output onProductSelected - outputs the current 
	 *			Product wheneve a new Product is selected
	 */
	 onProductSelected: EventEmitter<Product>
	
	/**
	 * @property currentProduct - local state containing
	 *							the currently selected `Product`
	 */
	currentProduct: Product;

	constructor(){
		this.onProductSelected = new EventEmitter();
	}


	clicked(product: Product): void {
		this.currentProduct = product;
		this.onProductSelected.emit(product);
		
	}

	isSelected(product: Product): boolean{
		if(!product || !this.currentProduct) {
			return false;
		}
		return product.sku === this.currentProduct.sku;
	}
}