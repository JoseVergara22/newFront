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
            state: 'customers',
            name: 'Administrar Clientes'
          },   
          {
            state: 'forkliftReport',
            name: 'Administrar Reporte Técnico'
          },   
          {
            state: 'regionalsAll',
            name: 'Administrar Sucursales'
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
          {
            state: 'registerOffice',
            name: 'Administrar Sedes'
          },
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
          {
            state: 'estimateCountries',
            name:  'Administrar Paises Cotización'
          },
          {
            state: 'priceCountriesDhl',
            name:  'Administrar Tabla DHL'
          },
          {
            state: 'estimateConfiguration',
            name:  'Configuración de Cotizaciones'
          },
          {
            state: 'LogTrm',
            name:  'Histórico TRM'
          }
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
            state: 'forkliftShow',
            name: 'Administrar Montacargas'
          },
          {
            state: 'forkliftReport',
            name: 'Reporte de Técnico'
          },
          {
            state:'horometro',
            name:'Administrar Horometro'
          },
          {
            state: 'resumenes',
            name:  'Administrar Hojas de Vida'
           },
           {
            state: 'controlTechnician',
            name: 'Gestión de Mantenimientos'
           },
           {
            state: 'prevetiveMaintenance',
            name:  'Asignar Mantenimiento Preventivo'
          },  
          {
            state: 'correctiveMaintenance',
            name:  'Asignar Mantenimiento Correctivo'
          },  
          {
            state: 'checklistMaintenance',
            name:  ' Asignación Checklist'
          },
          {
          state:'platformTechinician',
          name:'Asignar Mantenimieto Plataforma'
          },  
          {
          state:'stevedoreTechinician',
          name:'Asignar Mantenimieto Estibadores'
          },  
          {
            state:'work_dashboard',
            name:'Administrar Rutinas Preventivas'
          },  
          {
            state:'platforms',
            name: 'Administrar Mantenimiento Plataformas'
          },
          {
            state:'stevedores',
            name: 'Administrar Mantenimiento Estibadores'
          },
          {
            state:'checklists',
            name: 'Administrar Mantenimiento Checklist'
          },
          {
            state:'question',
            name: 'Administrar Encuesta de Mantenimiento'
          },
          {
            state:'toilet',
            name: 'Administrar Registro Aseo'
          },

         /*    {
            state: 'modules',
            name:  'Administrar Modulos'
          },*/
         
        
         
        
          /*
         {
            state: 'task',
            name: 'Administrar tareas'
          },*/
        
        
         
         
         /*
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
          }
         //   {
          //   state: 'settlementList',
          //   name:  'Liquidaciones Lista'
          // },          
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
            state: 'register',
            name: 'Administrar Usuarios'
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
            state: 'createSlider',
            name: 'Administrar Noticias'
          },
          {
            state: 'changePassword',
            name: 'Cambio de Contraseña'
          },
          {
            state: 'personalActivities',
            name: 'Administrar Actividades del Personal'
          },
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
            name:  'Administrar Tabla DHL'
          },
          {
            state: 'estimateConfiguration',
            name:  'Configuración de Cotizaciones'
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
          },
          {
            state: 'registerOffice',
            name: 'Administrar Sedes'
          }
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
            state: 'forkliftShow',
            name: 'Administrar Montacargas'
          },
          {
            state:'horometro',
            name:'Administrar Horometro'
          },
          {
            state: 'resumenes',
            name:  'Administrar Hojas de Vida'
           },          
           {
            state: 'controlTechnician',
            name: 'Gestión de Mantenimientos'
          },
          {
            state: 'prevetiveMaintenance',
            name:  'Asignar Mantenimiento Preventivo'
          },  
          {
            state: 'correctiveMaintenance',
            name:  'Asignar Mantenimiento Correctivo'
          },  
          {
            state: 'checklistMaintenance',
            name:  'Asignar Asignación Checklist'
          },
          {
            state:'work_dashboard',
            name:'Administrar Rutinas Preventivas'
          },  
          {
            state:'platforms',
            name: 'Administrar Mantenimientos Plataformas'
          },
          {
            state:'stevedores',
            name: 'Administrar Mantenimientos Estibadores'
          },
          {
            state:'checklists',
            name: 'Administrar Mantenimientos Checklist'
          },
          {
            state:'question',
            name: 'Administrar Encuesta de Mantenimiento'
          },
          {
            state:'toilet',
            name: 'Administrar Registro Aseo'
          },
         
         
         /* {
            state:'work_dashboard',
            name:'Administrar rutinas'
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
