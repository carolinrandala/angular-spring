import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import {MatTableModule} from "@angular/material/table";
import { CreateSchoolComponent } from './create-school/create-school.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ViewSchoolComponent } from './view-school/view-school.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SchoolDashboardComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent,
    ViewSchoolComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatInputModule,
        FormsModule
    ]
})
export class SchoolModule { }
