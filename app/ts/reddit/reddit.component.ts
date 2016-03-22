import {Component} from 'angular2/core';
import {RedditArticleComponent} from './reddit-article.component';
import {RedditArticle} from './reddit-article';

@Component({
	selector: 'reddit',
	host: {
  	  class: 'container'
  	},
	templateUrl: 'app/templates/reddit.component.html',
	directives: [RedditArticleComponent],


})

export class RedditComponent {
	title: string;
	articles: RedditArticle[];
	sortedArticles(): Article[] {
		return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
	}
	constructor(){
		this.title='Reddit';
		this.articles = [
	      new RedditArticle('Angular 2', 'http://angular.io', 3),
	      new RedditArticle('Fullstack', 'http://fullstack.io', 2),
	      new RedditArticle('Angular Homepage', 'http://angular.io', 1),
	    ];
	    console.log(this.articles)
	}


	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
	
	    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
	    this.articles.push(new RedditArticle(title.value, link.value, 0));
	    title.value = '';
	    link.value = '';
	}
	updateVote(#event){
		alert("yes");
		return false;
	}
}

