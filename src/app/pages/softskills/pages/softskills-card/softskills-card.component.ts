import { Component, input } from "@angular/core";

@Component({
    selector: 'app-softskills-card',
    templateUrl: './softskills-card.component.html',
    styleUrls: ['./softskills-card.component.scss'],
})
export class SoftskillsCardComponent {
    public img = input.required<string>();
    public title = input.required<string>();
    public desc = input.required<string>();
}
