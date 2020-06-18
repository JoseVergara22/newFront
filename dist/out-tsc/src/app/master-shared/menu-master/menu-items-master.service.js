"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MENUITEMS = [
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
                children: []
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
                        state: 'work_dashboard',
                        name: 'Administrar Rutinas'
                    },
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
                        state: 'changePassword',
                        name: 'Cambio de Contraseña'
                    },
                    {
                        state: 'customers',
                        name: 'Administrar Clientes'
                    },
                    {
                        state: 'forkliftShow',
                        name: 'Administrar Montacargas'
                    },
                    {
                        state: 'horometro',
                        name: 'Administrar Horometro'
                    },
                    {
                        state: 'regionalsAll',
                        name: 'Administrar Sucursales'
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
                    },
                    {
                        state: 'registerTypeDocument',
                        name: 'Administrar Tipo Documento'
                    },
                    {
                        state: 'registerPaymentCondition',
                        name: 'Administrar Condiciones de Pago'
                    },
                    {
                        state: 'estimateAll',
                        name: 'Cotizaciones'
                    },
                    {
                        state: 'estimateCustomer',
                        name: 'Crear Cotización'
                    },
                    {
                        state: 'settlementAll',
                        name: 'Liquidaciones'
                    },
                    {
                        state: 'settlementCustomer',
                        name: 'Crear Liquidación'
                    },
                    {
                        state: 'estimateCountries',
                        name: 'Administrar Paises Cotización'
                    },
                    {
                        state: 'priceCountriesDhl',
                        name: 'Administrar tabla DHL'
                    },
                    {
                        state: 'estimateConfiguration',
                        name: 'Configuración de cotizaciones'
                    },
                    {
                        state: 'LogTrm',
                        name: 'Histórico TRM'
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
var MENUFINANCIAL = [
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
                        name: 'Administrar Condiciones de Pago'
                    },
                    {
                        state: 'estimateCountries',
                        name: 'Administrar Paises Cotización'
                    },
                    {
                        state: 'priceCountriesDhl',
                        name: 'Administrar tabla DHL'
                    },
                    {
                        state: 'estimateConfiguration',
                        name: 'Configuración de cotizaciones'
                    },
                    {
                        state: 'LogTrm',
                        name: 'Histórico TRM'
                    },
                ]
            }
        ],
    }
];
var MENUCREATOR = [
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
                children: []
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
                        name: 'Cotizaciones'
                    },
                    {
                        state: 'estimateCustomer',
                        name: 'Crear Cotización'
                    },
                    {
                        state: 'settlementAll',
                        name: 'Liquidaciones'
                    },
                    {
                        state: 'settlementCustomer',
                        name: 'Crear Liquidación'
                    },
                    {
                        state: 'work_dashboard',
                        name: 'Administrar rutinas'
                    },
                    {
                        state: 'forkliftShow',
                        name: 'Administrar Montacargas'
                    },
                    {
                        state: 'horometro',
                        name: 'Administrar Horometro'
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
var MENUSELLER = [
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
                        name: 'Cotizaciones'
                    },
                    {
                        state: 'estimateCustomer',
                        name: 'Crear Cotización'
                    },
                    {
                        state: 'settlementAll',
                        name: 'Liquidaciones'
                    },
                    {
                        state: 'settlementCustomer',
                        name: 'Crear Liquidación'
                    }
                ]
            }
        ],
    }
];
var MenuItemsMasterService = /** @class */ (function () {
    function MenuItemsMasterService() {
    }
    MenuItemsMasterService.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItemsMasterService.prototype.getCreator = function () {
        return MENUCREATOR;
    };
    MenuItemsMasterService.prototype.getSeller = function () {
        return MENUSELLER;
    };
    MenuItemsMasterService.prototype.getFinancial = function () {
        return MENUFINANCIAL;
    };
    MenuItemsMasterService = __decorate([
        core_1.Injectable()
    ], MenuItemsMasterService);
    return MenuItemsMasterService;
}());
exports.MenuItemsMasterService = MenuItemsMasterService;
//# sourceMappingURL=menu-items-master.service.js.map