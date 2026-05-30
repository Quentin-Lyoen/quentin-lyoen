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
}