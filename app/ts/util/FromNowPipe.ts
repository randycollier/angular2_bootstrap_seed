import {Pipe, bind} from 'angular2/core';
import  moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe {
  transform(value: any, args: Array<any>): string {
    return moment(value).fromNow();
  }
}

export var fromNowPipeInjectables: Array<any> = [
  bind(FromNowPipe).toValue(FromNowPipe)
];

