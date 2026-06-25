import { Component } from "@angular/core";
import { PortfolioUniversityComponent } from "./pages/portfolio-university/portfolio-university.component";
import { PortfolioPersoComponent } from "./pages/portfolio-perso/portfolio-perso.component";
import { ExperienceCardComponent } from "./pages/experience-card/experience-card.component";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [PortfolioUniversityComponent, PortfolioPersoComponent, ExperienceCardComponent],
})
export class ExperienceComponent {
    public activeTab: 'university' | 'perso' | '' = '';
    public activeStage: 'fichorga' | 'emothep' | '' = '';

    public selectTab(tab: 'university' | 'perso'): void {
        this.activeTab = this.activeTab === tab ? '' : tab;
    }

    public selectStage(stage: 'fichorga' | 'emothep'): void {
        this.activeStage = this.activeStage === stage ? '' : stage;
    }
}