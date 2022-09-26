import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataSource = new MatTableDataSource()
  displayedColumns:Array<string> = ['srNo','blogName', 'authorName', 'publishedDate','categories', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
