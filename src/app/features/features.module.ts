import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from '../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    DashboardComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TableModule,
    AccordionModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    ToastModule
  ],
  exports: [
    DashboardComponent,
    ItemListComponent
  ],
  providers: [
    MessageService
  ]
})
export class FeaturesModule { }
