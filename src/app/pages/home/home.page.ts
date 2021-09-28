import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../../data/students.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  students = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
