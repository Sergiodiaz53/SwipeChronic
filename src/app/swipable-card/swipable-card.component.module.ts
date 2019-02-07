import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwipableCardComponent } from './swipable-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SwipableCardComponent }])
  ],
  declarations: [SwipableCardComponent],
  exports: [SwipableCardComponent]
})
export class SwipableCardComponentModule { }
