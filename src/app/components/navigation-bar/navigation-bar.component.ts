import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss',
    imports: [RouterLink],
})
export class NavigationBarComponent {
    public openCV(): void {
        window.open('https://drive.google.com/drive/folders/1PDGnXR3ES0e_Zm8LQcidAw9oCWyOr2hK?usp=sharing', '_blank');
    }
}