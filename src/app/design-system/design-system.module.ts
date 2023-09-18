import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    ButtonComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    SwitchComponent,
  ]
})
export class DesignSystemModule { }
