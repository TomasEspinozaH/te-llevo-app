import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  flag = false;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public alertController: AlertController) { }

  ngOnInit() {
    this.buildForm();
  }

  changeFlag() {
    this.flag = !this.flag;
  };

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando'
    });
    await loading.present();

    setTimeout(async () => {
      if (this.form.invalid) {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error al iniciar sesion',
          message: 'Nombre de usuario o contraseña incorrecta',
          buttons: ['Cerrar']
        });
        return await alert.present();
      }

      loading.dismiss();
      this.router.navigate(['/home', { username: this.form.controls.username.value, login: true }])
    }, 2000);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: [{ value: '', disabled: false }, [Validators.required]]
    });
  }
}
