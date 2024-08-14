import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AccordionModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class FeaturesModule { }
