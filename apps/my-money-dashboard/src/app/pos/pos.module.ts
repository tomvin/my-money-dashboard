import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosMainPageComponent } from './pages/pos-main-page/pos-main-page.component';
import { PosLeftNavbarComponent } from './components/pos-left-navbar/pos-left-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PosSelectItemsComponent } from './components/pos-select-items/pos-select-items.component';

@NgModule({
  declarations: [PosMainPageComponent, PosLeftNavbarComponent, PosSelectItemsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PosModule { }
