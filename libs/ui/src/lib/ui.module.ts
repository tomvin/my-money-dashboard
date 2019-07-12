import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './modules/input/input.module';
import { ButtonModule } from './modules/button/button.module';

@NgModule({
  imports: [CommonModule],
  exports: [InputModule, ButtonModule]
})
export class UiModule {}
