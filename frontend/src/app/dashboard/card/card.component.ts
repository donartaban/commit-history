import { Component, Input } from "@angular/core";
import { ICustomCard } from "./card.component.interface";

@Component({
    selector: 'app-custom-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class CardComponent {

    @Input() CardData: any;

    /*public CardData: any = {
        title: 'Project name',
        subtitle: 'Project subtitle',
        description: 'Some project description',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    };*/

    constructor(){}
}