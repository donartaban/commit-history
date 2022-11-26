import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommitsComponent } from "./commits/commits.component";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'repos', component: HomeComponent },
      { path: 'repo/commits', component: CommitsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
