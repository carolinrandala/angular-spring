import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit{
  ngOnInit(): void {

  }

  displayedColumns: string[] = ['id','name', 'address', 'phone', 'isActive'];
}
