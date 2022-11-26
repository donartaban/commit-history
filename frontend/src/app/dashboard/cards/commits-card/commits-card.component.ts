import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-commits-card',
    templateUrl: 'commits-card.component.html',
    styleUrls: ['commits-card.component.scss']
})
export class CommitsCardComponent{

    @Input() CommitsCardData: any;
}