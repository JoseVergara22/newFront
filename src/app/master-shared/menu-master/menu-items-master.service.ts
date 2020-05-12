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
    label: 'Inicio',
    main: [
      {
        state: 'master',
        short_label: 'I',
        name: 'Inicio',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'master',
            name: 'Inicio'
          }
        ]
      }
    ]
  },
  {
    label: 'erp',
    main: [
      {
        state: 'master',
        short_label: 'E',
        name: 'ERP',
        type: 'sub',
        icon: 'ti-direction',
        children: [
          
        ]
      }
    ],
  },
  {
    label: 'master',
    main: [
      {
        state: 'maintenance',
        short_label: 'N',
        name: 'Mantenimiento',
        type: 'sub',
        icon: 'ti-pulse',
        children: [
          {
            state:'work_dashboard',
            name:'Administrar rutinas'
          },
          {
            state: 'register',
            name: 'Administrar usuarios'
          },/*
          {
            state: 'costCenter',
            name: 'Administrar Centros de Costo'
          },
          {
              state: 'subCostCenter',
              name: 'Administrar Sub Centros de Costo'
          },
          {
            state: 'warehouses',
            name: 'Administrar Bodegas'
          },
          /*
         {
            state: 'task',
            name: 'Administrar tareas'
          },*/
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
            state:'horometro',
            name:'Administrar Horometro'
          },/*
          {
            state: 'regionalsAll',
            name: 'Administrar Sucursales'
          },
         {
            state: 'techniciansAll',
            name: 'Administrar Tecnicos'
          },*/
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
          },
          {
            state: 'estimateAll',
            name:  'Cotizaciones'
          },
          {
            state: 'estimateCustomer',
            name:  'Crear Cotizacion'
          },
         /* {
            state: 'settlementAll',
            name:  'Liquidaciones'
          },
          {
            state: 'settlementCustomer',
            name:  'Crear Liquidación'
          },*/
          {
            state: 'estimateCountries',
            name:  'Administrar paises cotización'
          },
          {
            state: 'priceCountriesDhl',
            name:  'Administrar tabla DHL'
          },
          {
            state: 'estimateConfiguration',
            name:  'Configuración de cotizaciones'
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


const MENUCREATOR = [
  {
    label: 'Inicio',
    main: [
      {
        state: 'master',
        short_label: 'I',
        name: 'Inicio',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'master',
            name: 'Inicio'
          }
        ]
      }
    ]
  },
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
         
        ]
      }
    ],
  },
  {
    label: 'master',
    main: [
      {
        state: 'maintenance',
        short_label: 'N',
        name: 'Mantenimiento',
        type: 'sub',
        icon: 'ti-pulse',
        children: [
  
          {
            state: 'estimateAll',
            name:  'Cotizaciones'
          },
          {
            state: 'estimateCustomer',
            name:  'Crear Cotizacion'
          },
          {
            state:'work_dashboard',
            name:'Administrar rutinas'
          },
       /*     {
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
          },*/
          {
            state: 'customers',
            name: 'Administrar clientes'
          },
          {
            state: 'forkliftShow',
            name: 'Administrar montacargas'
          },
          {
            state:'horometro',
            name:'Administrar Horometro'
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
        /*  {
            state: 'estimateCountries',
            name:  'Administrar paises cotización'
          },
          {
            state: 'priceCountriesDhl',
            name:  'Administrar tabla DHL'
          },*/
       
         /* {
            state: 'estimateConfiguration',
            name:  'Configuración de cotizaciones'
          }*/
        ]
      }
    ]
  }
];

const MENUSELLER = [
  {
    label: 'Inicio',
    main: [
      {
        state: 'master',
        short_label: 'I',
        name: 'Inicio',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'master',
            name: 'Inicio'
          }
        ]
      }
    ]
  },
  {
    label: 'master',
    main: [
      {
        state: 'master',
        short_label: 'E',
        name: 'ERP',
        type: 'sub',
        icon: 'ti-direction',
        children: [
          {
            state: 'estimateAll',
            name:  'Cotizaciones'
          },
          {
            state: 'estimateCustomer',
            name:  'Crear Cotizacion'
          },
        ]
      }
    ],
  }
];



@Injectable()
export class MenuItemsMasterService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getCreator(): Menu[] {
    return MENUCREATOR;
  }

  getSeller(): Menu[] {
    return MENUSELLER;
  }

}
