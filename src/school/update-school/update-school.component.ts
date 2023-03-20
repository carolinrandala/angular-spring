import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SchoolService} from "../../app/shared/services/school.service";

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit{
  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private schoolService: SchoolService) {
  }

  updateSchool: FormGroup;


  ngOnInit(): void {
    this.updateSchool = this.formBuilder.group({
      name: '',
      address: '',
      phone: ''
    });
  }

  onSubmit() {
    console.log(this.updateSchool.value);

    this.schoolService.updateSchool(this.updateSchool).subscribe(
      result => {

        this.snackBar.open('School has successfully updated', 'OK', {
          duration: 3000
        });
      },
      error => {

        this.snackBar.open('Error updating school', 'OK', {
          duration: 3000
        });
      }
    );
  }
}

