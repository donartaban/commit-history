import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-repo-card',
    templateUrl: 'repo-card.component.html',
    styleUrls: ['repo-card.component.scss']
})
export class RepoCardComponent {

    @Input() RepoCardData: any;

    constructor(
        private router: Router
    ){}

    viewCommits(){
        this.router.navigate(['/dashboard/repo/commits', {repo: this.RepoCardData?.name, owner: this.RepoCardData?.owner?.login}]);
    }
}