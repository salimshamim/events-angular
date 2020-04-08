import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventsService} from './events.service';

@Injectable()
export class EventDetailsActivatorService implements CanActivate{

    constructor(private eventsService: EventsService, private router: Router){
        
    }

    canActivate(route:ActivatedRouteSnapshot): boolean {
        console.log(route.params['id'])
        let exists = !!this.eventsService.getEvent(+ route.params['id'])
        if(!exists){
            this.router.navigate(['/404']);
        }
        return exists;
      }
    
    
}