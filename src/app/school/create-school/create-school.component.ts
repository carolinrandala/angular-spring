import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit{
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','name', 'address', 'phone', 'isActive'];
}
