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
  MANI_SIN_SAL = 'Maní Tostado (sin sal)',
  NUECES = 'Nueces',
  NUECES_AMBAR = 'Nueces Ambar',
  CHIP_BANANAS = 'Chips de Bananas',
  PASAS_UVAS = 'Pasas de Uvas (sin semilla)',
  ALMOHADITAS_FRUTILLA = 'Almohaditas Rellenas de Frutilla',
  ALMOHADITAS_CHOCOLATE = 'Almohaditas Rellenas de Chocolate',
  ALMOHADITAS_SALVADO = 'Almohaditas de Salvado',
  COPOS = 'Copos Azucarados',
  COPOS_NATURALES = 'Copos Naturales (sin azúcar)',
  ARITOS_MIEL = 'Aritos con Miel',
  MANI_CHOCOLATE = 'Maní con Chocolate',
  ALMENDRAS_CHOCOLATE = 'Almendras con Chocolate',
  CHIA = 'Chia',
  LINO = 'Lino',
}

export enum PESO {
  GR100 = '100 gr.',
  GR250 = '250 gr.',
  K1 = '1 kg.',
}
