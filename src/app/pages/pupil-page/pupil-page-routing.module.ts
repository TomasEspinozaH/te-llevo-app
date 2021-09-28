import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PupilPagePage } from './pupil-page.page';

const routes: Routes = [
  {
    path: '',
    component: PupilPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PupilPagePageRoutingModule {}
