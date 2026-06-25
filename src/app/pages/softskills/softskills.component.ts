import { Component } from "@angular/core";
import { SoftskillsCardComponent } from "./pages/softskills-card/softskills-card.component";

@Component({
    selector: 'app-softskills',
    templateUrl: './softskills.component.html',
    styleUrls: ['./softskills.component.scss'],
    imports: [SoftskillsCardComponent],
})
export class SoftskillsComponent {
    // Data list can be defined inline in template or as component fields if required.
    // Defining here makes the template clean and dynamic.
    public softSkills = [
        {
            title: 'Autonome',
            img: 'img/autonome.png',
            desc: 'Je sais travailler seul sur un projet et rechercher une solution à un problème par moi-même.'
        },
        {
            title: 'Rigoureux',
            img: 'img/rigoureux.png',
            desc: 'Je sais travailler sur un projet en respectant à la lettre les indications données.'
        },
        {
            title: 'Organisé',
            img: 'img/organise.png',
            desc: 'Je sais structurer un programme pour le rendre propre et lisible, car je déteste le désordre.'
        },
        {
            title: 'Persévérant',
            img: 'img/perseverant.png',
            desc: 'Je sais travailler sur un projet sans m\'arrêter jusqu\'à trouver la solution au problème.'
        }
    ];

    public passions = [
        {
            title: 'Informatique',
            img: 'img/informatique.png',
            desc: 'J\'aime me tenir informé des dernières technologies et réfléchir à leur impact sur notre société et notre planète.'
        },
        {
            title: 'Jeux vidéo',
            img: 'img/jeux_video.png',
            desc: 'J\'aime jouer à des jeux d\'aventure et de réflexion, ce qui m\'aide à développer ma logique et ma persévérance.'
        },
        {
            title: 'Danse',
            img: 'img/danse.jpg',
            desc: 'La danse est une passion qui occupe une place aussi importante que l\'informatique. Cette activité m\'aide à renforcer ma cohésion au sein d\'une équipe.'
        }
    ];
}
