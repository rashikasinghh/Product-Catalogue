import {Component} from '@angular/core';

@Component({
    selector: 'app-edu',
    template: `<div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <a class="navbar-brand">Angular 5</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Products</a></li>
                    <li><a [routerLink]="['/orders']">Orders</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </div>`
})

export class AppComponent {

}
