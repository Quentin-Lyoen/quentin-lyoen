import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    public mail: string = 'quentinlyoen@gmail.com';
    public phone: string = '06 26 33 70 84';

    public openLinkedin(): void {
        window.open('https://www.linkedin.com/in/quentin-lyoen/')
    }
}