import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {MatSnackBar} from "@angular/material/snack-bar";





@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {


  constructor(private schoolService: SchoolService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const school: {address: string; phone: string; name: string } = {
      address: '',
      phone: '',
      name: ''
    };

    this.schoolService.createSchool(school)
      .subscribe(
        response => {
          console.log('School created:', response);
        },
        error => {
          console.log(school);

        }
      );
  }
}

