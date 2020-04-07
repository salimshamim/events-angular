import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    template:`
        <h1>New Event</h1>
        <hr/>
        <div class="col-md-6">
            <h3>[Create Event Form will go here]</h3>
            <br/>
            <br/>
            <button type = "submit" class="btn btn-primary">Save</button>
            <button type = "button" class="btn btn-default" (click) = "handleCancel()">Cancel</button>
    `
})

export class CreateEventComponent{

    constructor(private router: Router){

    }

    handleCancel(){
        this.router.navigate(['/events']);
    }

}