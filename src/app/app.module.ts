import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {SchoolDashboardComponent} from "../school/school-dashboard/school-dashboard.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SchoolModule} from "../school/school.module";
import {AppInterceptor} from "./shared/interceptor/app.interceptor";
import { MessageSnackbarComponent } from './message-snackbar/message-snackbar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {CreateSchoolComponent} from "../school/create-school/create-school.component";
import {ViewSchoolComponent} from "../school/view-school/view-school.component";
import {UpdateSchoolComponent} from "../school/update-school/update-school.component";

const appRoutes: Routes = [
  {
    path: 'school',
    component: SchoolDashboardComponent
  },
  { path: 'create',
    component: CreateSchoolComponent
  },
  { path: 'update',
    component: UpdateSchoolComponent
  },
  { path: 'view-school',
    component: ViewSchoolComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MessageSnackbarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    SchoolModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
