import { Component, Output, EventEmitter } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss',
    imports: [RouterLink],
})
export class NavigationBarComponent {
    @Output() public contactClick = new EventEmitter<void>();

    public isMenuOpen = false;

    public toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    public closeMenu(): void {
        this.isMenuOpen = false;
    }

    public openCV(): void {
        this.isMenuOpen = false;
        window.open('https://drive.google.com/drive/folders/1PDGnXR3ES0e_Zm8LQcidAw9oCWyOr2hK?usp=sharing', '_blank');
    }
}