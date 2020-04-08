import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventDetailsActivatorService} from './events/shared/route-activator-events-detail.service';
import {EventsListResolver} from './events/events-list-resolver.service';
import {Routes} from '@angular/router';

export const routes:Routes =[
    {path:'events', component:EventsListComponent, resolve :{events: EventsListResolver}},
    {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorService]},
    {path:'404',component: Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'user', loadChildren:'./user/user.module#UserModule'}
]