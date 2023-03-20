import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {MatSnackBar} from "@angular/material/snack-bar";




@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.css']
})
export class ViewSchoolComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'active'];

  constructor(private schoolService: SchoolService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }




}
