import { Component } from '@angular/core';




@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.css']
})
export class ViewSchoolComponent {

  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'active'];

}
