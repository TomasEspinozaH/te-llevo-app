import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PupilPagePageRoutingModule } from './pupil-page-routing.module';

import { PupilPagePage } from './pupil-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PupilPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PupilPagePage]
})
export class PupilPagePageModule { }
