import { Component, OnInit } from '@angular/core';

import { IProducto, PESO, Producto } from '../../interfaces/interfaces';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  fecha = new Date();
  anio: number = this.fecha.getFullYear();

  // FRUTOS SECOS
  frutosSecos: Array<IProducto> = [
    {
      nombre: Producto.MIX1,
      descripcion:
        'Contiene pasas de uvas, almendras, nueces, chips de bananas y maní tostado.',
      precio: [
        { nombre: PESO.GR100, valor: 60 },
        { nombre: PESO.GR250, valor: 145 },
        { nombre: PESO.K1, valor: this.calcularKilo(145) },
      ],
      imagen: '../../../assets/mix-1.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMENDRAS,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 150 },
        { nombre: PESO.GR250, valor: 340 },
        { nombre: PESO.K1, valor: this.calcularKilo(340) },
      ],
      imagen: '../../../assets/almendras.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.MANI_SALADO,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 20 },
        { nombre: PESO.GR250, valor: 46 },
        { nombre: PESO.K1, valor: this.calcularKilo(46) },
      ],
      imagen: '../../../assets/mani.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.NUECES,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 110 },
        { nombre: PESO.GR250, valor: 250 },
        { nombre: PESO.K1, valor: this.calcularKilo(250) },
      ],
      imagen: '../../../assets/nueces.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.CHIP_BANANAS,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 79 },
        { nombre: PESO.GR250, valor: 185 },
        { nombre: PESO.K1, valor: this.calcularKilo(185) },
      ],
      imagen: '../../../assets/chips-bananas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.PASAS_UVAS,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 30 },
        { nombre: PESO.GR250, valor: 65 },
        { nombre: PESO.K1, valor: this.calcularKilo(65) },
      ],
      imagen: '../../../assets/pasas-uvas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.MANI_SIN_SAL,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 20 },
        { nombre: PESO.GR250, valor: 46 },
        { nombre: PESO.K1, valor: this.calcularKilo(46) },
      ],
      imagen: '../../../assets/mani.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.NUECES_AMBAR,
      descripcion: 'Nueces más oscuritas pero con el mismo sabor.',
      precio: [
        { nombre: PESO.GR100, valor: 94 },
        { nombre: PESO.GR250, valor: 220 },
        { nombre: PESO.K1, valor: this.calcularKilo(220) },
      ],
      imagen: '../../../assets/nueces-ambar.jpg',
      sinStock: false,
    },
  ];

  // CEREALES
  cereales: Array<IProducto> = [
    {
      nombre: Producto.ALMOHADITAS_FRUTILLA,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 50 },
        { nombre: PESO.GR250, valor: 120 },
        { nombre: PESO.K1, valor: this.calcularKilo(120) },
      ],
      imagen: '../../../assets/almohaditas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMOHADITAS_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 55 },
        { nombre: PESO.GR250, valor: 130 },
        { nombre: PESO.K1, valor: this.calcularKilo(130) },
      ],
      imagen: '../../../assets/almohaditas.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.COPOS,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 36 },
        { nombre: PESO.GR250, valor: 75 },
        { nombre: PESO.K1, valor: this.calcularKilo(75) },
      ],
      imagen: '../../../assets/copos-azucarados.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ARITOS_MIEL,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 38 },
        { nombre: PESO.GR250, valor: 80 },
        { nombre: PESO.K1, valor: this.calcularKilo(80) },
      ],
      imagen: '../../../assets/aritos-miel.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.COPOS_NATURALES,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 30 },
        { nombre: PESO.GR250, valor: 68 },
        { nombre: PESO.K1, valor: this.calcularKilo(68) },
      ],
      imagen: '../../../assets/copos-azucarados.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.ALMOHADITAS_SALVADO,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 48 },
        { nombre: PESO.GR250, valor: 110 },
        { nombre: PESO.K1, valor: this.calcularKilo(110) },
      ],
      imagen: '../../../assets/almohaditas.jpg',
      sinStock: false,
    },
  ];

  // DULCES
  dulces: Array<IProducto> = [
    {
      nombre: Producto.MANI_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 80 },
        { nombre: PESO.GR250, valor: 187 },
        { nombre: PESO.K1, valor: this.calcularKilo(187) },
      ],
      imagen: '../../../assets/mani-chocolate.jpg',
      sinStock: true,
    },
    {
      nombre: Producto.ALMENDRAS_CHOCOLATE,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 140 },
        { nombre: PESO.GR250, valor: 330 },
        { nombre: PESO.K1, valor: this.calcularKilo(330) },
      ],
      imagen: '../../../assets/almendras-chocolate.jpg',
      sinStock: true,
    },
  ];

  // SEMILLAS
  semillas: Array<IProducto> = [
    {
      nombre: Producto.CHIA,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 28 },
        { nombre: PESO.GR250, valor: 65 },
        { nombre: PESO.K1, valor: this.calcularKilo(65) },
      ],
      imagen: '../../../assets/chia.jpg',
      sinStock: false,
    },
    {
      nombre: Producto.LINO,
      descripcion: '',
      precio: [
        { nombre: PESO.GR100, valor: 25 },
        { nombre: PESO.GR250, valor: 58 },
        { nombre: PESO.K1, valor: this.calcularKilo(58) },
      ],
      imagen: '../../../assets/lino.jpg',
      sinStock: false,
    },
  ];

  // PROMOCIONES
  promociones: Array<any> = [
    {
      contenido: [
        `${PESO.GR250} de ${Producto.ALMOHADITAS_FRUTILLA}`,
        `${PESO.GR250} de ${Producto.COPOS}`,
      ],
      precio: this.calcularDescuento(195, 0.08),
      descuento: '8%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-orange-500',
        precio:
          'inline-block bg-orange-200 rounded-full px-3 py-1 font-semibold text-orange-700 mr-2 mb-2',
      },
    },
    {
      contenido: [
        `${PESO.GR250} de ${Producto.ALMOHADITAS_CHOCOLATE}`,
        `${PESO.GR250} de ${Producto.COPOS}`,
      ],
      precio: this.calcularDescuento(205, 0.08),
      descuento: '8%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-blue-500',
        precio:
          'inline-block bg-blue-200 rounded-full px-3 py-1 font-semibold text-blue-700 mr-2 mb-2',
      },
    },
    {
      contenido: [
        `${PESO.GR100} de ${Producto.ALMOHADITAS_FRUTILLA}`,
        `${PESO.GR100} de ${Producto.ALMOHADITAS_CHOCOLATE}`,
        `${PESO.GR100} de ${Producto.COPOS}`,
      ],
      precio: this.calcularDescuento(141, 0.08),
      descuento: '8%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-green-500',
        precio:
          'inline-block bg-green-200 rounded-full px-3 py-1 font-semibold text-green-700 mr-2 mb-2',
      },
    },
    {
      contenido: [
        `${PESO.GR250} de ${Producto.ALMOHADITAS_SALVADO}`,
        `${PESO.GR250} de ${Producto.COPOS_NATURALES}`,
      ],
      precio: this.calcularDescuento(178, 0.08),
      descuento: '8%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-pink-500',
        precio:
          'inline-block bg-pink-200 rounded-full px-3 py-1 font-semibold text-pink-700 mr-2 mb-2',
      },
    },
    {
      contenido: [
        `${PESO.GR250} de ${Producto.MIX1}`,
        `${PESO.GR250} de ${Producto.CHIP_BANANAS}`,
      ],
      precio: this.calcularDescuento(330, 0.1),
      descuento: '10%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-teal-500',
        precio:
          'inline-block bg-teal-200 rounded-full px-3 py-1 font-semibold text-teal-700 mr-2 mb-2',
      },
    },
    {
      contenido: [
        `${PESO.GR250} de ${Producto.CHIP_BANANAS}`,
        `${PESO.GR100} de ${Producto.ALMOHADITAS_FRUTILLA}`,
        `${PESO.GR100} de ${Producto.COPOS}`,
      ],
      precio: this.calcularDescuento(271, 0.1),
      descuento: '10%',
      class: {
        titulo: 'font-bold text-xl mb-2 text-purple-500',
        precio:
          'inline-block bg-purple-200 rounded-full px-3 py-1 font-semibold text-purple-700 mr-2 mb-2',
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

  calcularKilo(valor: number): number {
    return valor * 4;
  }

  calcularDescuento(valor: number, descuento: number): number {
    return Math.ceil(valor - valor * descuento);
  }
}
