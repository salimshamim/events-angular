import {
EventsListResolver,
EventsListComponent,
EventDetailsComponent,
EventDetailsActivatorService,
CreateEventComponent,
} from './events/index'

import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';

export const routes:Routes =[
    {path:'events', component:EventsListComponent, resolve :{events: EventsListResolver}},
    {path:'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorService]},
    {path:'404',component: Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'user', loadChildren:'./user/user.module#UserModule'}
]