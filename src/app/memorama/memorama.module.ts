import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MemoramaPage } from './memorama.page';

import { MemoramaPageRoutingModule } from './memorama-routing.module';
import { CardComponent } from '../card/card.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoramaPageRoutingModule,
  ],
  declarations: [MemoramaPage,CardComponent]
})
export class MemoramaPageModule {}
