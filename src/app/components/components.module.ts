import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriversComponent } from './drivers/drivers.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DriversComponent,

  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DriversComponent
  ]
})
export class ComponentsModule { }
