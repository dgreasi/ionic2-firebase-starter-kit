import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NpmPage } from './npm';

@NgModule({
  declarations: [
    NpmPage,
  ],
  imports: [
    IonicPageModule.forChild(NpmPage),
  ],
  exports: [
    NpmPage
  ]
})
export class NpmModule {}
