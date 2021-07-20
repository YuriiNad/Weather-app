import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})

export class DateTimeComponent implements OnInit {
  public date: any = new Date()
  
  constructor() {}

  ngOnInit(): void {}
}
