import {Component, OnInit} from '@angular/core'
import { EventsService } from './shared/events.service';
import {ActivatedRoute} from '@angular/router';


declare let toastr: any;

@Component({
    selector:'events-list',
    templateUrl:'./events-list.component.html'
})

export class EventsListComponent implements OnInit{
    events:any[]
    
    constructor(private eventsService:EventsService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events'];
    }

    handleEventClick(eventName){
        toastr.success('Clicked '+ eventName);
        console.log("Toaster message here");
    }

}