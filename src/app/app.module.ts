import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventThumbNailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';
import { RouterModule } from '@angular/router';
import { routes } from './appRoutes';
import { CreateEventComponent } from './events/create-event.component'
import { EventDetailsActivatorService } from './events/shared/route-activator-events-detail.service';
import { Error404Component } from './errors/404.component';
import {EventsListResolver} from './events/events-list-resolver.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsListResolver,
    EventsService,
    EventDetailsActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  let isDirty = component.isDirty;
  if (isDirty) {
    return window.confirm("Changes are not saved. Do you wish to Cancel?")
  }
  return true;
}
