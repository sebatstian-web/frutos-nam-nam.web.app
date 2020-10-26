export interface IProducto {
  nombre: string;
  descripcion: string;
  precio: Array<IPrecio>;
  imagen: string;
  sinStock: boolean;
}

interface IPrecio {
  nombre: string;
  valor: number;
}

export enum Producto {
  MIX1 = 'Mix 1',
  ALMENDRAS = 'Almendras',
  MANI_SALADO = 'Maní Tostado y Salado',
  NUECES = 'Nueces',
  CHIP_BANANAS = 'Chips de Bananas',
  ALMOHADITAS_FRUTILLA = 'Almohaditas Rellenas de Frutilla',
  ALMOHADITAS_CHOCOLATE = 'Almohaditas Rellenas de Chocolate',
  COPOS = 'Copos Azucarados',
  ARITOS_MIEL = 'Aritos con Miel',
  MANI_CHOCOLATE = 'Maní con Chocolate',
  ALMENDRAS_CHOCOLATE = 'Almendras con Chocolate',
  CHIA = 'Chia',
  LINO = 'Lino',
}
