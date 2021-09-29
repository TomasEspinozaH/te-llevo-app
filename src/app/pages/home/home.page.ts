import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { STUDENTS } from '../../data/students.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  students = STUDENTS;
  username: string;


  constructor(route: ActivatedRoute, private alertController: AlertController) {
    route.params.subscribe(({ username, login }) => {
      this.username = username || 'Usuario temporal'
      this.welcomeAlert(login);
    });
  }

  ngOnInit() { }

  private async welcomeAlert(isLogin: boolean) {
    if (isLogin) {
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        message: this.username,
        buttons: ['Cerrrar']
      })
      alert.present();
    }
  }
}
