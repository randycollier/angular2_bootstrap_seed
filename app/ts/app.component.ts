import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {RedditComponent} from './reddit/reddit.component';

import {InventoryComponent} from './products/inventory.component';
import {FormsComponent} from './forms-chapter/forms.componet';

/*chat*/
import {ChatComponent} from './chat/chat.component';

@Component({
  selector: 'my-app',
  templateUrl:'app/templates/app.component.html',
  
  directives: [
                ROUTER_DIRECTIVES, RedditComponent,HomeComponent,InventoryComponent,FormsComponent, ChatComponent]
     // providers:  [DialogService]

})


@RouteConfig([
  {path: '/', name:'Home', component: HomeComponent},
  {path: '/reddit', name:'Reddit', component: RedditComponent},
  {path: '/inventory', name:'Inventory', component: InventoryComponent},
  {path: '/forms-chapter', name:'FormsChapter', component: FormsComponent},
  {path: '/chat-chapter', name:'ChatChapter', component: ChatComponent},
}
])

 


export class AppComponent  {

  constructor(
    private _router:Router
  ){

    console.log(_router)
  }
  
  public title = 'Tour of Heroes';

  getLinkStyle(path) {
        return this._router.isRouteActive(this._router.generate([path]));
    }

}

