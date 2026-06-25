import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { DegreeComponent } from './pages/degree/degree.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SoftskillsComponent } from './pages/softskills/softskills.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'degree', component: DegreeComponent },
    { path: 'portfolio', component: ExperienceComponent },
    { path: 'softskills', component: SoftskillsComponent },
];
