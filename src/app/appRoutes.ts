import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventDetailsActivatorService} from './events/shared/route-activator-events-detail.service';
import {Routes} from '@angular/router';

export const routes:Routes =[
    {path:'events', component:EventsListComponent},
    {path:'events/new', component: CreateEventComponent},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventDetailsActivatorService]},
    {path:'404',component: Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'full'}
]