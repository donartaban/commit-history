import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }