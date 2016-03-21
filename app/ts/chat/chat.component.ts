
import {Component} from 'angular2/core';

/*
 * Components
 */
 import {ChatNavBar} from './components/chat-nav-bar.component';
 import {ChatThreads} from './components/chat-threads.component';
 import {ChatWindow} from './components/chat-window.component';

/*
 * Injectables
 */
import {servicesInjectables } from '../services/services';
import {utilInjectables} from '../util/util';


import {servicesInjectables } from './services/services';
import {utilInjectables} from './util/util';

/*
 * Services
 */
import {
  MessagesService,
  ThreadsService,
  UserService
} from '../services/services';

import {ChatDataService} from '../services/chat_data.service';



@Component({
  selector: 'chat-app',
   directives: [ChatNavBar,
                 ChatThreads,
                 ChatWindow
               ],
  template: `
  <div class='col-lg-12'><nav-bar></nav-bar></div>

    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  `
})
export class ChatComponent {
  constructor(
               public messagesService: MessagesService,
               public threadsService: ThreadsService,
               public userService: UserService
              ) {
     ChatDataService.init(messagesService, threadsService, userService);
  }
}



}

