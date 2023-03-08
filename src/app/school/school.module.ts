import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    CreateSchoolComponent,
    UpdateSchoolComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class SchoolModule { }
