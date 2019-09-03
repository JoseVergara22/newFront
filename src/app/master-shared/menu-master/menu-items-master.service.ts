import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Modulos',
    main: [
      {
        state: 'erp',
        short_label: 'E',
        name: 'ERP',
        type: 'sub',
        icon: 'ti-direction',
        children: [
          {
            state: 'administrarcliente',
            name: 'Administración de clientes'
          },
          {
            state: 'cotización',
            name: 'Cotización'
          },
          {
            state: 'liquidaciondervicios',
            name: 'liquidación de servicios'
          },
          {
            state: 'listarliquidaciones',
            name: 'Listar liquidaciones'
          },
          {
            state: 'reportarcostos',
            name: 'Reportar costos'
          },
          {
            state: 'administrarlistas',
            name: 'Administrar lista de precios'
          }
        ]
      }
    ],
  },
  {
    label: 'master',
    main: [
      {
        state: 'master',
        short_label: 'N',
        name: 'Mantenimiento',
        type: 'sub',
        icon: 'ti-pulse',
        children: [
          {
            state: 'register',
            name: 'Administrar usuarios'
          },
          {
            state: 'task',
            name: 'Administrar tareas'
          },
          {
            state: 'createSlider',
            name: 'Administrar noticia'
          },
          {
            state: 'changePassword',
            name: 'Cambio de contraseña'
          },
          {
            state: 'customers',
            name: 'Administrar clientes'
          },
          {
            state: 'forkliftShow',
            name: 'Administrar montacargas'
          },
          {
            state: 'registerBrand',
            name: 'Administrar Marcas'
          },
          {
            state: 'registerModel',
            name: 'Administrar modelos'
          },
          {
            state: 'registerTyre',
            name: 'Administrar tipo de llantas'
          },
          {
            state: 'registerFuel',
            name: 'Administrar combustibles'
          },
          {
            state: 'registerMachine',
            name: 'Administrar maquinas'
          },
          {
            state: 'registerTypeDocument',
            name: 'Administrar tipo documento'
          },
          {
            state: 'registerPaymentCondition',
            name:  'Administrar condiciones de pago'
          }
        ]
      }
    ]
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'configuracion',
        short_label: 'N',
        name: 'Configuración',
        type: 'sub',
        icon: 'ti-panel',
        children: [
          {
            state: 'administrarclientes',
            name: 'Administrar clientes'
          },
          {
            state: 'administrarinactivos',
            name: 'Administrar Inactivos'
          },
          {
            state: 'asignarperfiles',
            name: 'Asignar perfiles'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItemsMasterService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
