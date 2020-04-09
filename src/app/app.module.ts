import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { routes } from './appRoutes';

import { Error404Component } from './errors/404.component';
import {AuthService} from './user/auth.service';

import {
  CreateEventComponent,
  EventDetailsActivatorService,
  EventDetailsComponent,
  EventThumbNailComponent,
  EventsListComponent,
  EventsListResolver,
  EventsService

} from './events/index';

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
    AuthService,
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
