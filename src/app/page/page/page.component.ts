import { Component, OnInit } from '@angular/core';

import { IProducto, Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  fecha = new Date();
  anio: number = this.fecha.getFullYear();

  frutosSecos: Array<IProducto> = [
    {
      nombre: Producto.MIX1,
      descripcion:
        'Contiene pasas de uvas, almendras, nueces, chips de bananas y maní tostado.',
      precio: [
        { nombre: '100 gr.', valor: 58 },
        { nombre: '250 gr.', valor: 138 },
      ],
      imagen: '../../../assets/mix-1.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMENDRAS,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 140 },
        { nombre: '250 gr.', valor: 330 },
      ],
      imagen: '../../../assets/almendras.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.MANI_SALADO,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 18 },
        { nombre: '250 gr.', valor: 40 },
      ],
      imagen: '../../../assets/mani.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.NUECES,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 98 },
        { nombre: '250 gr.', valor: 238 },
      ],
      imagen: '../../../assets/nueces.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.CHIP_BANANAS,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 79 },
        { nombre: '250 gr.', valor: 185 },
      ],
      imagen: '../../../assets/chip-bananas.jpg',
      sinStock: false,
    },
  ];

  cereales: Array<IProducto> = [
    {
      nombre: Producto.ALMOHADITAS_FRUTILLA,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 45 },
        { nombre: '250 gr.', valor: 110 },
      ],
      imagen: '../../../assets/almohaditas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMOHADITAS_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 50 },
        { nombre: '250 gr.', valor: 130 },
      ],
      imagen: '../../../assets/almohaditas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.COPOS,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 35 },
        { nombre: '250 gr.', valor: 75 },
      ],
      imagen: '../../../assets/no-img.png',
      sinStock: false,
    },
    {
      nombre: Producto.ARITOS_MIEL,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 36 },
        { nombre: '250 gr.', valor: 80 },
      ],
      imagen: '../../../assets/aritos.jpg',
      sinStock: false,
    },
  ];

  dulces: Array<IProducto> = [
    {
      nombre: Producto.MANI_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 80 },
        { nombre: '250 gr.', valor: 187 },
      ],
      imagen: '../../../assets/mani-chocolate.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMENDRAS_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 140 },
        { nombre: '250 gr.', valor: 330 },
      ],
      imagen: '../../../assets/no-img.png',
      sinStock: false,
    },
  ];

  semillas: Array<IProducto> = [
    {
      nombre: Producto.CHIA,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 27 },
        { nombre: '250 gr.', valor: 62 },
      ],
      imagen: '../../../assets/chia.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.LINO,
      descripcion: '',
      precio: [
        { nombre: '100 gr.', valor: 24 },
        { nombre: '250 gr.', valor: 55 },
      ],
      imagen: '../../../assets/lino.jpg',
      sinStock: false,
    },
  ];

  promociones: Array<any> = [
    {
      titulo: 'Promo 1',
      contenido: [
        `100 gr. de ${Producto.MIX1}`,
        `100 gr. de ${Producto.ARITOS_MIEL}`,
        `100 gr. de ${Producto.ALMOHADITAS_FRUTILLA}`,
      ],
      precio: 210,
      class: {
        titulo: 'font-bold text-xl mb-2 text-orange-500',
        precio:
          'inline-block bg-orange-200 rounded-full px-3 py-1 font-semibold text-orange-700 mr-2 mb-2',
      },
    },
    {
      titulo: 'Promo 2',
      contenido: [
        `250 gr. de ${Producto.ALMOHADITAS_CHOCOLATE}`,
        `250 gr. de ${Producto.ALMOHADITAS_FRUTILLA}`,
        `100 gr. de ${Producto.COPOS}`,
      ],
      precio: 245,
      class: {
        titulo: 'font-bold text-xl mb-2 text-blue-500',
        precio:
          'inline-block bg-blue-200 rounded-full px-3 py-1 font-semibold text-blue-700 mr-2 mb-2',
      },
    },
    {
      titulo: 'Promo 3',
      contenido: [
        `100 gr. de ${Producto.MIX1}`,
        `100 gr. de ${Producto.CHIP_BANANAS}`,
        `100 gr. de ${Producto.ALMOHADITAS_FRUTILLA}`,
      ],
      precio: 150,
      class: {
        titulo: 'font-bold text-xl mb-2 text-green-500',
        precio:
          'inline-block bg-green-200 rounded-full px-3 py-1 font-semibold text-green-700 mr-2 mb-2',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const mensaje: any = document.querySelector('#mensaje');
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 10000);
  }
}
