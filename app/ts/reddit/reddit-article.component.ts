import {Component} from 'angular2/core';
import {RedditArticle} from './reddit-article';

@Component({
	selector:'reddit-article-component',
	templateUrl:'app/templates/reddit-article.component.html',
	inputs: ['article'],
	host:{
		class: 'row'
	}
	derectives:[RedditArticle]
})



export class RedditArticleComponent {
	article: RedditArticle;
	
	voteUp(){
		this.article.votes+=1;
		return false;
	}
	
	voteDown(){

		this.article.votes -=1;
		return false;
	}

	domain(): string {
		try {
			console.log('test')		  const link: string = this.link.split('//')[1];
			return link.split('/')[0];
		} catch (err) {
			return null;
		}
	}
}