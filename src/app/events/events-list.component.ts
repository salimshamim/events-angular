import {Component, OnInit} from '@angular/core'
import { EventsService } from './shared/events.service';


declare let toastr: any;

@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent implements OnInit{
    events:any[]
    
    constructor(private eventsService:EventsService){

    }

    ngOnInit(){
        this.events = this.eventsService.getEvents();
    }

    handleEventClick(eventName){
        toastr.success('Clicked '+ eventName);
        console.log("Toaster message here");
    }

}