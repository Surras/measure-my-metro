import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrackingTabPage } from './tracking-tab.page';

import { TrackingTabPageRoutingModule } from './tracking-tab-routing.module';
import { StopwatchComponent } from '../../components/stopwatch/stopwatch.component';
import { MetroChooserComponent } from 'src/app/components/metro-chooser/metro-chooser.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TrackingTabPageRoutingModule
  ],
  declarations: [TrackingTabPage, StopwatchComponent, MetroChooserComponent]
})
export class TrackingTabPageModule {}
