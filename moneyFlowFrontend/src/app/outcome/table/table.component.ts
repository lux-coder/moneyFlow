import { Component, OnInit } from '@angular/core';

export interface Liability{
  partner: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['partner', 'jan', 'feb', 'mar', 'apr', 'may', 'jun'];
  liabilites: Liability[] = [
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 },
    { partner: 'PromMat d.o.o.', jan: 123, feb: 456, mar: 789, apr: 963, may: 852, jun: 741 }
  ];

  getTotalCost() {
    return this.liabilites.map(t => t.jan).reduce((acc, value) => acc + value);
  }

}
