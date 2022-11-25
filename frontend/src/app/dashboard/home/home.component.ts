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

  constructor(
    private snackBar: MatSnackBar,
    private readonly apiService: ApiService
  ) {
    this._unsubscribeAll = new Subject<void>();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  listRepos() {
    this.apiService.listRepos()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.repos = response;
      }, error => {
        this.snackBar.open(error);
      });
  }
}
