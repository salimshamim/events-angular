import {Component, OnInit} from '@angular/core';
import {EventsService} from '../shared/events.service';
import {ActivatedRoute} from '@angular/router'

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right: 20px;}
        .event-image {height:100px}    
    `]
})

export class EventDetailsComponent implements OnInit{

    event: any;

    ngOnInit(){
        let eventId = this.activatedRoute.snapshot.params['id'];
        console.log(eventId)
        this.event = this.eventService.getEvent(+eventId);
    }

    constructor(private eventService:EventsService,private activatedRoute:ActivatedRoute){

    }
    
}