import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment"

@Injectable()
export class ApiService {

    constructor(
        private httpClient: HttpClient
    ) { }

    private getBackendUrl() {
        return environment.backendUrl && environment.backendUrl !== '' ? environment.backendUrl : 'http://localhost:4200';
    }

    listRepos(page: number = 1, per_page: number = 20) {
        let url = this.getBackendUrl() + '/github/repos?page=' + page + '&per_page=' + per_page;
        return this.httpClient.get(url);
    }

    ListCommits(repo: string | null, owner: string | null, page: number = 1, per_page: number = 20){
        let url = this.getBackendUrl() + '/github/repo/' + repo + '/owner/' + owner + '/commits' +'?page=' + page + '&per_page=' + per_page;
        return this.httpClient.get(url);
    }
}