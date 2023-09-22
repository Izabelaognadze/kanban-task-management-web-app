import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SwitchComponent } from './switch/switch.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SwitchComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    SwitchComponent,
    SidebarComponent,
  ]
})
export class DesignSystemModule { }
