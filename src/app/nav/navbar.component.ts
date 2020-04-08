import {Component} from '@angular/core'

@Component({
    selector:'nav-bar',
    templateUrl: 'navbar.component.html',
    styles:[`
        .nav .navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px {#searchForm {display:none}})
        a.active {color: #FE5000;}
    `]
})

export class NavBarComponent{

}