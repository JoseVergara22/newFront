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
            name:'Administrar Rutinas'
          },
          {
            state: 'register',
            name: 'Administrar Usuarios'
          }, 
         /* {
            state:'question',
            name: 'Administrar Encuesta de mantenimiento'
          },
          {
            state:'toilet',
            name: 'Registro aseo '
          },
          {
            state:'checklists',
            name: 'Administrar Checklist'
          },*/
          /*
         {
            state: 'modules',
            name:  'Administrar Modules'
          }, */
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
            name: 'Administrar Noticias'
          },
          {
            state: 'changePassword',
            name: 'Cambio de Contraseña'
          },
          {
            state: 'customers',
            name: 'Administrar Clientes'
          },
          {
            state: 'registerOffice',
            name: 'Administrar Sedes'
          },
          {
            state: 'forkliftShow',
            name: 'Administrar Montacargas'
          },
          {
            state:'horometro',
            name:'Administrar Horometro'
          },
          {
            state: 'regionalsAll',
            name: 'Administrar Sucursales'
          },/*
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
            name: 'Administrar Modelos'
          },
          {
            state: 'registerTyre',
            name: 'Administrar Tipo de Llantas'
          },
          {
            state: 'registerFuel',
            name: 'Administrar Combustibles'
          },
          {
            state: 'registerMachine',
            name: 'Administrar Maquinas'
          },
          {
            state: 'registerTypeDocument',
            name: 'Administrar Tipo Documento'
          },
          {
            state: 'registerPaymentCondition',
            name:  'Administrar Condiciones de Pago'
          },
          {
            state: 'estimateAll',
            name:  'Cotizaciones'
          },
          {
            state: 'estimateCustomer',
            name:  'Crear Cotización'
          },
          {
            state: 'settlementAll',
            name:  'Liquidaciones'
          },//   {
          //   state: 'settlementList',
          //   name:  'Liquidaciones Lista'
          // },          
          {
            state: 'settlementCustomer',
            name:  'Crear Liquidación'
          },
          {
            state: 'estimateCountries',
            name:  'Administrar Paises Cotización'
          },
          {
            state: 'priceCountriesDhl',
            name:  'Administrar tabla DHL'
          },
          {
            state: 'estimateConfiguration',
            name:  'Configuración de cotizaciones'
          },
          {
            state: 'LogTrm',
            name:  'Histórico TRM'
          },
          
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

const MENUFINANCIAL = [
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
            state: 'register',
            name: 'Administrar Usuarios'
          },
         /* {
            state: 'modules',
            name:  'Administrar Modules'
          }, */
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
            name: 'Administrar Noticias'
          },
          {
            state: 'customers',
            name: 'Administrar Clientes'
          },
          {
            state: 'regionalsAll',
            name: 'Administrar Sucursales'
          },
          {
            state: 'registerTypeDocument',
            name: 'Administrar Tipo Documento'
          },
          {
            state: 'registerPaymentCondition',
            name:  'Administrar Condiciones de Pago'
          },
          {
            state: 'estimateCountries',
            name:  'Administrar Paises Cotización'
          },
          {
            state: 'priceCountriesDhl',
            name:  'Administrar tabla DHL'
          },
          {
            state: 'estimateConfiguration',
            name:  'Configuración de cotizaciones'
          },
          {
            state: 'LogTrm',
            name:  'Histórico TRM'
          },
        ]
      }
    ],
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
            state: 'registerOffice',
            name: 'Administrar Sedes'
          },
          {
            state: 'estimateAll',
            name:  'Cotizaciones'
          },
          {
            state: 'estimateCustomer',
            name:  'Crear Cotización'
          },
          {
            state: 'settlementAll',
            name:  'Liquidaciones'
          },
          {
            state: 'settlementCustomer',
            name:  'Crear Liquidación'
          },
         /* {
            state:'work_dashboard',
            name:'Administrar rutinas'
          },*/
          {
            state: 'forkliftShow',
            name: 'Administrar Montacargas'
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
            name: 'Administrar Modelos'
          },
          {
            state: 'registerTyre',
            name: 'Administrar Tipo de Llantas'
          },
          {
            state: 'registerFuel',
            name: 'Administrar Combustibles'
          },
          {
            state: 'registerMachine',
            name: 'Administrar Maquinas'
          }
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
            name:  'Crear Cotización'
          },
          {
            state: 'settlementAll',
            name:  'Liquidaciones'
          },
          {
            state: 'settlementCustomer',
            name:  'Crear Liquidación'
          }
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

  getFinancial(): Menu[] {
    return MENUFINANCIAL;
  }

}
