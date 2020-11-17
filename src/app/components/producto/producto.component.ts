import { Component, Input, OnInit } from '@angular/core';

import { IProducto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @Input() productos: Array<IProducto> = [];

  constructor() {}

  ngOnInit(): void {}
}
