import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { ApiService } from "src/app/service/api.service";

@Component({
    selector: 'app-repo-commits',
    templateUrl: 'commits.component.html',
    styleUrls: ['commits.component.scss']
})
export class CommitsComponent implements OnInit, OnDestroy {

    private OWNER: string | null;
    private REPO: string | null;
    private _unsubscribeAll: Subject<any>;
    private page = 1;
    private per_page = 20;

    public commits: any = [];
    public isLoadAble = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private readonly apiService: ApiService,
        private snackBar: MatSnackBar
    ) {
        // Init parameters to null and wait to the component inits
        this.OWNER = null;
        this.REPO = null;
        // Init unsubscribe variable
        this._unsubscribeAll = new Subject<void>();
    }

    ngOnInit() {
        this.OWNER = this.activatedRoute.snapshot.paramMap.get('owner');
        this.REPO = this.activatedRoute.snapshot.paramMap.get('repo');
        if (this.OWNER && this.REPO)
            this.listCommits(this.page, this.per_page);
        else
            this.snackBar.open('Something went wrong trying to get commits, please specify a valid repo and owner');
    }

    ngOnDestroy() {
        this._unsubscribeAll.next(true);
        this._unsubscribeAll.complete();
    }

    listCommits(page: number, per_page: number) {
        this.apiService.ListCommits(this.REPO, this.OWNER, page, per_page)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(response => {
                const data: any = response;

                // If data coming from backend dont exist then we just end the method
                if (!data || data.length === 0) {
                    this.isLoadAble = false;
                    return this.commits;
                }

                // If the current array has results then we will concat the new page results
                if (this.commits.length > 0 && data.length > 0)
                    this.commits = this.commits.concat(data);

                // Assing response to repos array
                this.commits = data;
            }, error => {
                this.snackBar.open(error);
            });
    }

    loadMore() {
        this.page += 1;
        this.listCommits(this.page, this.per_page);
    }
}