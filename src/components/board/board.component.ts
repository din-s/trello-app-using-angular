import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public swimlanes: string[] = ['Todo', 'Inprogress', 'Complete']

  constructor() { }

  ngOnInit() {
  }

}