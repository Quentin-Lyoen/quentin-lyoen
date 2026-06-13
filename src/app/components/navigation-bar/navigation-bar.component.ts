import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss',
    imports: [],
})
export class NavigationBarComponent {
    private router = inject(Router);

    public toHome(): void {
        this.router.navigateByUrl('');
    }

    public openCV(): void {
        window.open('https://drive.google.com/drive/folders/1PDGnXR3ES0e_Zm8LQcidAw9oCWyOr2hK?usp=sharing', '_blank');
    }

    public toSkills(): void {
        this.router.navigateByUrl('skills');
    }
}