import { Component, Input, OnInit } from '@angular/core';
import { STUDENTS } from '../../data/students.data';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {

  students = STUDENTS;
  public onClick = () => { }

  constructor() { }

  ngOnInit() { }

}
