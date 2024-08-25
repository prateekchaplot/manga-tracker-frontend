import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { LibraryComponent } from './library/library.component';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ComponentRoutesModule } from './component.routes';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutesModule,
    SidebarModule,
    TableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
