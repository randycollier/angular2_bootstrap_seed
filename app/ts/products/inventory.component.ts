import {Component} from 'angular2/core';
import {Product} from './product';
import {ProductList} from './product-list';
import  'underscore';

@Component({
	selector:'inventory',
	host:{
		class:'row'
	},
	template:`<h1>products</h1>
		<product-list 
			[productList]='products'
			(onProductSelected)="productWasSelected($event)"
			></product-list>

	`,
	directives:[ProductList]
})
export class InventoryComponent {
	products: Array<Product>;
	
	constructor(
		
		){
		this.products = [
						new Product(
							'MYSHOES', 'Black Running Shoes',
							'/resources/images/products/black-shoes.jpg',
							['Men', 'Shoes', 'Running Shoes'],
							109.99),
						new Product(
							'NEATOJACKET', 'Blue Jacket',
							'/resources/images/products/blue-jacket.jpg',
							['Women', 'Apparel', 'Jackets & Vests'],
							238.99),
						new Product(
							'NICEHAT', 'A Nice Black Hat',
							'/resources/images/products/black-hat.jpg',
							['Men', 'Accessories', 'Hats'],
							29.99)
							];



	}

		productWasSelected(product: Product): void {
			console.log('Product clicked: ', product);
		}

}