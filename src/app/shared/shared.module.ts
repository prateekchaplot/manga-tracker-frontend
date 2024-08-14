import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarModule,
    ButtonModule
  ]
})
export class SharedModule { }
