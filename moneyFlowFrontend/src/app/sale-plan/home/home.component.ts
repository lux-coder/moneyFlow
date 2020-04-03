import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navLinks = [
    { path: './', label:'Partners'},
    { path: 'home', label: 'Home sales' },
    { path: 'foregin', label: 'Foregin sales' }
  ];

}
