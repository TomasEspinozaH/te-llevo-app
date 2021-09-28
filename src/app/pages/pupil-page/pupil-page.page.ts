import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STUDENTS } from '../../data/students.data';

@Component({
  selector: 'app-pupil-page',
  templateUrl: './pupil-page.page.html',
  styleUrls: ['./pupil-page.page.scss'],
})
export class PupilPagePage implements OnInit {

  pupil: any;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(({ id }) =>
      this.pupil = [...STUDENTS].find(pupil => pupil.id === Number(id))
    );
  }

  ngOnInit() {

  }



}
