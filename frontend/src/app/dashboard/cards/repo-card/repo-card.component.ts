import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-repo-card',
    templateUrl: 'repo-card.component.html',
    styleUrls: ['repo-card.component.scss']
})
export class RepoCardComponent {

    @Input() RepoCardData: any;

    /*public CardData: any = {
        title: 'Project name',
        subtitle: 'Project subtitle',
        description: 'Some project description',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    };*/

    constructor(){}
}