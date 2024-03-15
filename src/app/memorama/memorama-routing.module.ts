import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoramaPage } from './memorama.page';

const routes: Routes = [
  {
    path: '',
    component: MemoramaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoramaPageRoutingModule {}
