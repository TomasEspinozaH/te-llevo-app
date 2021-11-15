import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { STUDENTS } from '../../data/students.data';
import { DriversComponent } from '../../components/drivers/drivers.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  students = STUDENTS;
  username: string;
  formDriver: FormGroup;

  constructor(route: ActivatedRoute,
    private alertController: AlertController,
    public popoverController: PopoverController,
    private formBuilder: FormBuilder,) {
    route.params.subscribe(({ username, login }) => {
      this.username = username || 'Usuario temporal'
      this.welcomeAlert(login);
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  async send() {
    if (this.formDriver.invalid) {
      const alert = await this.alertController.create({
        header: 'Error al solicitar al conductor',
        message: 'Por favor llenar todos los campos requeridos',
        buttons: ['Cerrar']
      });
      return await alert.present();
    }
    else {
      const dt = this.formDriver.controls.meetingTime.value.split('T')[1];
      const h = dt.split(':')[0];
      const m = dt.split(':')[1];
      const time = `${h}:${m}`;

      const alert = await this.alertController.create({
        header: 'Solicitud exitosa',
        message: `Hora del encuentro: ${time}. Valor: ${this.formDriver.controls.careerValue.value}`,
        buttons: ['Aceptar']
      });
      return await alert.present();
    }
  }

  private async buildForm() {
    this.formDriver = this.formBuilder.group({
      drivers: ['', [Validators.required]],
      commune: ['', [Validators.required]],
      destiny: ['', [Validators.required]],
      meeting: ['', [Validators.required]],
      meetingDate: ['', [Validators.required]],
      meetingTime: ['', [Validators.required]],
      careerValue: ['', [Validators.required]],
      observations: [''],
    });
  }

  private async welcomeAlert(isLogin: boolean) {
    if (isLogin) {
      const alert = await this.alertController.create({
        header: 'Bienvenido',
        message: this.username,
        buttons: ['Cerrrar'],
      });
      alert.present();
    }
  }

  async presentModal() {
    const popover = await this.popoverController.create({
      componentProps: {
        onClick: () => popover.dismiss()
      },
      component: DriversComponent,
    });
    await popover.present();
  }
}
