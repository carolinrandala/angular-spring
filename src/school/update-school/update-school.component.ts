import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {MatSnackBar} from "@angular/material/snack-bar";







@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit{

  constructor(private schoolService: SchoolService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }



}
