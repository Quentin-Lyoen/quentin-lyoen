import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { DegreeComponent } from './pages/degree/degree.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'degree', component: DegreeComponent },
];
