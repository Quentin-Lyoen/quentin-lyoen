import { Component } from "@angular/core";
import { PortfolioUniversityComponent } from "./pages/portfolio-university/portfolio-university.component";
import { PortfolioPersoComponent } from "./pages/portfolio-perso/portfolio-perso.component";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [PortfolioUniversityComponent, PortfolioPersoComponent],
})
export class ExperienceComponent {
    public activeTab: 'university' | 'perso' | '' = '';

    public selectTab(tab: 'university' | 'perso'): void {
        this.activeTab = this.activeTab === tab ? '' : tab;
    }
}