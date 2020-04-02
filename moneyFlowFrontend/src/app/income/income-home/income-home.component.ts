import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-home',
  templateUrl: './income-home.component.html',
  styleUrls: ['./income-home.component.css']
})
export class IncomeHomeComponent implements OnInit {

  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false  },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true  }
  ];
  headers = [ 
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  dataSource = this.data;

  constructor() { }

  ngOnInit() {
  }

}
