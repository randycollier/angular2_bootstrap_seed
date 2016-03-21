import {Component} from 'angular2/core';

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  properties: ['article'],
  templateUrl:'app/templates/reddit-article.component.html'
})

export class RedditArticle {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
}