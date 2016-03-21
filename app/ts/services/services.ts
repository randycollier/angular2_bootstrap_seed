import {messagesServiceInjectables} from './MessagesService';
import {threadsServiceInjectables} from './ThreadsService';
import {userServiceInjectables} from './UserService';
import {btnClickServiceInjectable} from './btn_click_service';

export * from './MessagesService';
export * from './ThreadsService';
export * from './UserService';
export * from './btn_click_service';

export var servicesInjectables: Array<any> = [
  messagesServiceInjectables,
  threadsServiceInjectables,
  userServiceInjectables,
  btnClickServiceInjectable
];
