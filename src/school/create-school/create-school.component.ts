import {Component, OnInit} from '@angular/core';
import {SchoolService} from "../../app/shared/services/school.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  constructor(private http: HttpClient, private schoolService: SchoolService) { }

  onSubmit() {

  }

  ngOnInit(): void {

  }
}
