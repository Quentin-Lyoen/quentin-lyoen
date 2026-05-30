import { Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavigationBarComponent],
})
export class HomeComponent {

}