import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [ProductoComponent],
  exports: [ProductoComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
