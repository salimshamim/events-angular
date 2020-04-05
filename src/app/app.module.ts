import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details.component';
import {EventThumbNailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component';
import {EventsService} from './events/shared/events.service';
import {RouterModule} from '@angular/router';
import {routes} from './appRoutes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    EventDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventsService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
