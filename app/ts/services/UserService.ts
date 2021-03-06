import {Injectable, bind} from 'angular2/core';
import {Subject, BehaviorSubject} from 'rxjs/Rx';

import {User} from '../models/models';


/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export var userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];
