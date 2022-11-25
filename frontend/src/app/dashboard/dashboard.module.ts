import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from "./card/card.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        DashboardComponent,
        HomeComponent,
        CardComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,           
        MatButtonToggleModule,    
        MatSnackBarModule,       
        DashboardRoutingModule
    ]
})
export class DashboardModule { }