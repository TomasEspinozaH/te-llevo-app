import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PupilPagePageRoutingModule } from './pupil-page-routing.module';

import { PupilPagePage } from './pupil-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PupilPagePageRoutingModule
  ],
  declarations: [PupilPagePage]
})
export class PupilPagePageModule {}
