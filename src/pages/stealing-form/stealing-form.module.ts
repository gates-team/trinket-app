import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StealingFormPage } from './stealing-form';

@NgModule({
  declarations: [
    StealingFormPage,
  ],
  imports: [
    IonicPageModule.forChild(StealingFormPage),
  ],
})
export class StealingFormPageModule {}
