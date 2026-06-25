import { Component, input } from "@angular/core";

@Component({
    selector: 'app-experience-card',
    templateUrl: './experience-card.component.html',
    styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
    public title = input<string>();
    public img = input<string>();
    public desc = input<string>();
    public langages = input<string>();
    public logiciels = input<string>();
    public link = input<string>();

}