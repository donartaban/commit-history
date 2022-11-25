import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ApiService } from "src/app/service/api.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any>;
  private page = 1;
  private per_page = 20;

  public repos: any = [];
  public isLoadAble = true;

  constructor(
    private snackBar: MatSnackBar,
    private readonly apiService: ApiService
  ) {
    this._unsubscribeAll = new Subject<void>();
  }

  ngOnInit(): void {
    this.listRepos(this.page, this.per_page);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  listRepos(page: number, per_page: number) {
    this.apiService.listRepos(page, per_page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        const data: any = response;
        // If data coming from backend dont exist then we just end the method
        if (!data || data.length === 0) {
          this.isLoadAble = false;
          return this.repos;
        }

        // If the current array has results then we will concat the new page results
        if (this.repos.length > 0 && data.length > 0)
          this.repos = this.repos.concat(data);

        // Assing response to repos array
        this.repos = data;
      }, error => {
        this.snackBar.open(error);
      });
  }

  loadMore() {
    this.page += 1;
    this.listRepos(this.page, this.per_page);
  }
}
