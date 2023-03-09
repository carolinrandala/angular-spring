import {Component, OnInit} from '@angular/core';
import {School} from "../../app/shared/models/school";
import {SchoolService} from "../../app/shared/services/school.service";

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  data: School[] = [];

  constructor(private schoolService: SchoolService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.schoolService.getAllSchools().subscribe(value => this.data = value);
  }
}
