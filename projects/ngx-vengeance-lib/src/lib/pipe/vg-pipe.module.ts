import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgCustomCurrencyPipe } from './vg-currenry.pipe';

@NgModule({
  declarations: [VgCustomCurrencyPipe],
  imports: [CommonModule],
  exports: [VgCustomCurrencyPipe],
})
export class VgPipeModule {}
