import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'phone'];

  constructor(private schoolService: SchoolService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const newSchool: { address: string; phone: string; name: string } = {
      address: '',
      phone: '',
      name: ''
    };

    this.schoolService.createSchool(newSchool)
      .subscribe(
        response => {
          console.log('School created:', response);
        },
        error => {
          console.log(newSchool);

        }
      );
  }
}




