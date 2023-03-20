import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup} from "@angular/forms";




@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private schoolService: SchoolService) {
  }

  newSchool: FormGroup;


  ngOnInit(): void {
    this.newSchool = this.formBuilder.group({
      name: '',
      address: '',
      phone: ''
    });
  }

  onSubmit() {
    this.schoolService.createSchool(this.newSchool.value).subscribe(
      result => {

        this.snackBar.open('New school created successfully', 'OK', {
          duration: 3000
        });

        this.newSchool.reset();
      },
      error => {

        this.snackBar.open('Error creating new school', 'OK', {
          duration: 3000
        });
        console.log(this.newSchool.value);
      }
    );
  }
}

