webpackJsonp([35],{tfCw:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("WT6e"),t=function(){},d=u("EDOZ"),a=u("Xjw4"),o=u("6uCv"),i=u("c7mC"),c=u("6meJ"),s=u("1OF5"),r=u("pucd"),p=u("sQpZ"),m=u("214W"),f=u("/jm2"),v=u("2LVV"),b=u("2tXe"),g=function(){function l(){var l=this;this.rowsTask=[],this.loadingIndicator=!0,this.reorderable=!0,this.fetchTaskData(function(n){l.rowsTask=n,setTimeout(function(){l.loadingIndicator=!1},1500)})}return l.prototype.ngOnInit=function(){},l.prototype.fetchTaskData=function(l){var n=new XMLHttpRequest;n.open("GET","assets/data/task-list.json"),n.onload=function(){l(JSON.parse(n.response))},n.send()},l}(),h=e["\u0275crt"]({encapsulation:0,styles:[[""],d.a],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](0,null,["\n              #","\n            "]))],null,function(l,n){l(n,0,0,n.context.row.id)})}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["href","javascript:"]],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,2,0,n.context.row.task)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](1,0,null,null,0,"input",[["class","form-control"],["type","date"]],[[8,"value",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.row.date,""))})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](1,0,null,null,16,"select",[["class","form-control form-control-sm"],["name","select"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](3,0,null,null,1,"option",[["value","opt1"]],[[8,"selected",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Open"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](6,0,null,null,1,"option",[["value","opt2"]],[[8,"selected",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Resolved"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](9,0,null,null,1,"option",[["value","opt3"]],[[8,"selected",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Invalid"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](12,0,null,null,1,"option",[["value","opt4"]],[[8,"selected",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["On hold"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](15,0,null,null,1,"option",[["value","opt5"]],[[8,"selected",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Close"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,3,0,"opt1"===n.context.row.status),l(n,6,0,"opt2"===n.context.row.status),l(n,9,0,"opt3"===n.context.row.status),l(n,12,0,"opt4"===n.context.row.status),l(n,15,0,"opt5"===n.context.row.status)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"a",[["href","javascript:;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](2,0,null,null,0,"img",[["class","img-fluid img-radius"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "]))],null,function(l,n){l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit,""))})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](2,802816,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](4,0,null,null,1,"a",[["href","javascript:;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"i",[["class","fa fa-plus f-w-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "]))],function(l,n){l(n,2,0,n.context.row.images)},null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](1,0,null,null,28,"div",[["class","text-center"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,u){var t=!0;return"keyup.esc"===n&&(t=!1!==e["\u0275nov"](l,2).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==e["\u0275nov"](l,2).closeFromClick(u)&&t),t},null,null)),e["\u0275did"](2,212992,null,2,o.a,[i.a,e.NgZone],null,null),e["\u0275qud"](335544320,17,{_menu:0}),e["\u0275qud"](335544320,18,{_toggle:0}),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](6,0,null,null,4,"a",[["aria-expanded","true"],["aria-haspopup","true"],["class","dropdown-toggle addon-btn dropdown-toggle"],["data-toggle","dropdown"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,7).toggleOpen()&&t),t},null,null)),e["\u0275did"](7,16384,[[18,4]],0,o.c,[o.a,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](9,0,null,null,0,"i",[["class","icofont icofont-ui-settings"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](12,0,null,null,16,"div",[["class","dropdown-menu dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null]],null,null,null,null)),e["\u0275did"](13,16384,[[17,4]],0,o.b,[o.a,e.ElementRef,e.Renderer2],null,null),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](15,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"i",[["class","icofont icofont-attachment"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Attach File"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](19,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,0,"i",[["class","icofont icofont-ui-edit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Edit Task"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](23,0,null,null,0,"div",[["class","dropdown-divider"],["role","separator"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](25,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,0,"i",[["class","icofont icofont-refresh"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reassign Task"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],function(l,n){l(n,2,0)},function(l,n){l(n,1,0,e["\u0275nov"](n,2).isOpen()),l(n,6,0,e["\u0275nov"](n,7).dropdown.isOpen()),l(n,12,0,!0,e["\u0275nov"](n,13).dropdown.isOpen())})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,193,"div",[["class","page-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,190,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,187,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](6,0,null,null,64,"app-card",[],null,null,null,c.b,c.a)),e["\u0275did"](7,114688,null,0,s.a,[],{title:[0,"title"],cardOptionBlock:[1,"cardOptionBlock"]},null),(l()(),e["\u0275ted"](-1,1,["\n        "])),(l()(),e["\u0275eld"](9,0,null,1,60,"ngx-datatable",[["class","data-table table-responsive task-list-table ngx-datatable"]],[[2,"fixed-header",null],[2,"fixed-row",null],[2,"scroll-vertical",null],[2,"scroll-horz",null],[2,"selectable",null],[2,"checkbox-selection",null],[2,"cell-selection",null],[2,"single-selection",null],[2,"multi-selection",null],[2,"multi-click-selection",null]],[["window","resize"]],function(l,n,u){var t=!0;return"window:resize"===n&&(t=!1!==e["\u0275nov"](l,10).onWindowResize()&&t),t},r.b,r.a)),e["\u0275did"](10,5619712,null,4,p.DatatableComponent,[[1,m.ScrollbarHelper],[1,f.DimensionsHelper],e.ChangeDetectorRef,e.ElementRef,e.KeyValueDiffers],{rows:[0,"rows"],rowHeight:[1,"rowHeight"],columnMode:[2,"columnMode"],headerHeight:[3,"headerHeight"],footerHeight:[4,"footerHeight"],limit:[5,"limit"],loadingIndicator:[6,"loadingIndicator"],reorderable:[7,"reorderable"]},null),e["\u0275qud"](603979776,1,{columnTemplates:1}),e["\u0275qud"](335544320,2,{rowDetail:0}),e["\u0275qud"](335544320,3,{groupHeader:0}),e["\u0275qud"](335544320,4,{footer:0}),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](16,0,null,null,7,"ngx-datatable-column",[["name","#"]],null,null,null,null,null)),e["\u0275did"](17,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,5,{cellTemplate:0}),e["\u0275qud"](335544320,6,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[5,2]],null,1,null,k)),e["\u0275did"](22,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](25,0,null,null,7,"ngx-datatable-column",[["name","Task List"]],null,null,null,null,null)),e["\u0275did"](26,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,7,{cellTemplate:0}),e["\u0275qud"](335544320,8,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[7,2]],null,1,null,T)),e["\u0275did"](31,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](34,0,null,null,7,"ngx-datatable-column",[["name","Last Commit"]],null,null,null,null,null)),e["\u0275did"](35,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,9,{cellTemplate:0}),e["\u0275qud"](335544320,10,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[9,2]],null,1,null,w)),e["\u0275did"](40,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](43,0,null,null,7,"ngx-datatable-column",[["name","Status"]],null,null,null,null,null)),e["\u0275did"](44,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,11,{cellTemplate:0}),e["\u0275qud"](335544320,12,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[11,2]],null,1,null,D)),e["\u0275did"](49,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](52,0,null,null,7,"ngx-datatable-column",[["name","Assiged User"]],null,null,null,null,null)),e["\u0275did"](53,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,13,{cellTemplate:0}),e["\u0275qud"](335544320,14,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[13,2]],null,1,null,x)),e["\u0275did"](58,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](61,0,null,null,7,"ngx-datatable-column",[["name","Action"]],null,null,null,null,null)),e["\u0275did"](62,16384,[[1,4]],2,v.DataTableColumnDirective,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,15,{cellTemplate:0}),e["\u0275qud"](335544320,16,{headerTemplate:0}),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](0,[[15,2]],null,1,null,y)),e["\u0275did"](67,16384,null,0,b.DataTableColumnCellDirective,[e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,1,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n\n      "])),(l()(),e["\u0275eld"](72,0,null,null,118,"app-card",[],null,null,null,c.b,c.a)),e["\u0275did"](73,114688,null,0,s.a,[],{title:[0,"title"]},null),(l()(),e["\u0275ted"](-1,1,["\n        "])),(l()(),e["\u0275eld"](75,0,null,1,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](77,0,null,null,13,"div",[["class","col-md-12 btn-add-task"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](79,0,null,null,10,"div",[["class","input-group input-group-button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](81,0,null,null,0,"input",[["class","form-control"],["placeholder","Add Task"],["type","text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](83,0,null,null,5,"span",[["class","input-group-append"],["id","basic-addon1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](85,0,null,null,2,"label",[["class","input-group-text"]],null,null,null,null,null)),(l()(),e["\u0275eld"](86,0,null,null,0,"i",[["class","icofont icofont-plus f-w-600"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add task"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,1,["\n        "])),(l()(),e["\u0275eld"](93,0,null,1,96,"div",[["class","new-task"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](95,0,null,null,17,"div",[["class","to-do-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](97,0,null,null,14,"div",[["class","checkbox-fade fade-in-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](99,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](101,0,null,null,0,"input",[["type","checkbox"],["value","1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](103,0,null,null,3,"span",[["class","cr"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](105,0,null,null,0,"i",[["class","cr-icon icofont icofont-ui-check txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](108,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add Proper Cursor In Sortable Page"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](114,0,null,null,17,"div",[["class","to-do-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](116,0,null,null,14,"div",[["class","checkbox-fade fade-in-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](118,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](120,0,null,null,0,"input",[["type","checkbox"],["value","2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](122,0,null,null,3,"span",[["class","cr"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](124,0,null,null,0,"i",[["class","cr-icon icofont icofont-ui-check txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](127,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Edit the draft for the icons"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](133,0,null,null,17,"div",[["class","to-do-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](135,0,null,null,14,"div",[["class","checkbox-fade fade-in-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](137,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](139,0,null,null,0,"input",[["type","checkbox"],["value","3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](141,0,null,null,3,"span",[["class","cr"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](143,0,null,null,0,"i",[["class","cr-icon icofont icofont-ui-check txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](146,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Create UI design model"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](152,0,null,null,17,"div",[["class","to-do-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](154,0,null,null,14,"div",[["class","checkbox-fade fade-in-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](156,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](158,0,null,null,0,"input",[["checked",""],["type","checkbox"],["value","4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](160,0,null,null,3,"span",[["class","cr"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](162,0,null,null,0,"i",[["class","cr-icon icofont icofont-ui-check txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](165,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Checkbox Design issue"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](171,0,null,null,17,"div",[["class","to-do-list"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](173,0,null,null,14,"div",[["class","checkbox-fade fade-in-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](175,0,null,null,11,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](177,0,null,null,0,"input",[["type","checkbox"],["value","5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](179,0,null,null,3,"span",[["class","cr"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](181,0,null,null,0,"i",[["class","cr-icon icofont icofont-ui-check txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](184,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Testing live data store"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,1,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,7,0,"Task List",!0),l(n,10,0,u.rowsTask,66,"force",50,50,10,u.loadingIndicator,u.reorderable),l(n,17,0,"#"),l(n,26,0,"Task List"),l(n,35,0,"Last Commit"),l(n,44,0,"Status"),l(n,53,0,"Assiged User"),l(n,62,0,"Action"),l(n,73,0,"To list")},function(l,n){l(n,9,0,e["\u0275nov"](n,10).isFixedHeader,e["\u0275nov"](n,10).isFixedRow,e["\u0275nov"](n,10).isVertScroll,e["\u0275nov"](n,10).isHorScroll,e["\u0275nov"](n,10).isSelectable,e["\u0275nov"](n,10).isCheckboxSelection,e["\u0275nov"](n,10).isCellSelection,e["\u0275nov"](n,10).isSingleSelection,e["\u0275nov"](n,10).isMultiSelection,e["\u0275nov"](n,10).isMultiClickSelection)})}var O=e["\u0275ccf"]("app-task-list",g,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-task-list",[],null,null,null,R,h)),e["\u0275did"](1,114688,null,0,g,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=u("4qxJ"),q=u("h4vs"),F=u("1Wt5"),H=u("qmzJ"),I=u("SYiH"),S=u("0DDR"),E=u("2MpB"),j=u("7DMc"),L=u("CXHW"),A=u("3kwk"),N=u("gFLb"),K=u("nCuf"),z=u("qKow"),W=u("cG9e"),X=u("ZwZs"),U=u("DDfv"),Z=u("lcaH"),J=u("gEbu"),_=u("7DGp"),P=u("WwnU"),V=u("hwnt"),B=u("K0TW"),Q=u("ETCP"),G=u("aKiW"),Y=u("v4DA"),$=u("tyH+"),ll=u("ItHS"),nl=u("OE0E"),ul=u("bfOx"),el={title:"Task List",icon:"ti-check-box",caption:"lorem ipsum dolor sit amet, consectetur adipisicing elit - task list",status:!0},tl=function(){},dl=u("RX2M"),al=u("F+yc"),ol=u("vfkA"),il=u("1Z2I"),cl=u("yDyO"),sl=u("K/oD"),rl=u("eCJc"),pl=u("/I96"),ml=u("qsK9"),fl=u("MSQt"),vl=u("UyZi"),bl=u("Ep2y"),gl=u("WKBe"),hl=u("A8b0"),kl=u("as+d"),Tl=u("62nT"),wl=u("kzcK"),Dl=u("RpQI"),Cl=u("7Qze"),xl=u("fAE3"),yl=u("/j9b");u.d(n,"TaskListModuleNgFactory",function(){return Rl});var Rl=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[O,M.a,q.a,F.a,H.a,I.a,S.a,E.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275a"]]]),e["\u0275mpd"](4608,j["\u0275i"],j["\u0275i"],[]),e["\u0275mpd"](4608,L.a,L.a,[e.ApplicationRef,e.Injector,e.ComponentFactoryResolver]),e["\u0275mpd"](4608,A.a,A.a,[e.ComponentFactoryResolver,e.Injector,L.a]),e["\u0275mpd"](4608,N.a,N.a,[]),e["\u0275mpd"](4608,K.a,K.a,[]),e["\u0275mpd"](4608,z.a,z.a,[]),e["\u0275mpd"](4608,W.a,W.a,[]),e["\u0275mpd"](4608,X.a,X.a,[]),e["\u0275mpd"](4608,U.a,U.a,[]),e["\u0275mpd"](4608,Z.a,Z.b,[]),e["\u0275mpd"](4608,J.a,J.b,[]),e["\u0275mpd"](4608,_.b,_.a,[]),e["\u0275mpd"](4608,P.a,P.b,[]),e["\u0275mpd"](4608,V.a,V.a,[]),e["\u0275mpd"](4608,i.a,i.a,[]),e["\u0275mpd"](4608,B.a,B.a,[]),e["\u0275mpd"](4608,Q.a,Q.a,[]),e["\u0275mpd"](4608,G.a,G.a,[]),e["\u0275mpd"](4608,Y.a,Y.a,[]),e["\u0275mpd"](4608,$.a,$.a,[]),e["\u0275mpd"](4608,ll.i,ll.o,[a.DOCUMENT,e.PLATFORM_ID,ll.m]),e["\u0275mpd"](4608,ll.p,ll.p,[ll.i,ll.n]),e["\u0275mpd"](5120,ll.a,function(l){return[l]},[ll.p]),e["\u0275mpd"](4608,ll.l,ll.l,[]),e["\u0275mpd"](6144,ll.j,null,[ll.l]),e["\u0275mpd"](4608,ll.h,ll.h,[ll.j]),e["\u0275mpd"](6144,ll.b,null,[ll.h]),e["\u0275mpd"](4608,ll.f,ll.k,[ll.b,e.Injector]),e["\u0275mpd"](4608,ll.c,ll.c,[ll.f]),e["\u0275mpd"](4608,m.ScrollbarHelper,m.ScrollbarHelper,[nl.DOCUMENT]),e["\u0275mpd"](4608,f.DimensionsHelper,f.DimensionsHelper,[]),e["\u0275mpd"](512,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](512,ul.r,ul.r,[[2,ul.w],[2,ul.o]]),e["\u0275mpd"](512,tl,tl,[]),e["\u0275mpd"](512,dl.a,dl.a,[]),e["\u0275mpd"](512,al.a,al.a,[]),e["\u0275mpd"](512,ol.a,ol.a,[]),e["\u0275mpd"](512,il.a,il.a,[]),e["\u0275mpd"](512,cl.a,cl.a,[]),e["\u0275mpd"](512,sl.a,sl.a,[]),e["\u0275mpd"](512,rl.a,rl.a,[]),e["\u0275mpd"](512,pl.a,pl.a,[]),e["\u0275mpd"](512,j["\u0275ba"],j["\u0275ba"],[]),e["\u0275mpd"](512,j.FormsModule,j.FormsModule,[]),e["\u0275mpd"](512,ml.a,ml.a,[]),e["\u0275mpd"](512,fl.a,fl.a,[]),e["\u0275mpd"](512,vl.a,vl.a,[]),e["\u0275mpd"](512,bl.a,bl.a,[]),e["\u0275mpd"](512,gl.a,gl.a,[]),e["\u0275mpd"](512,hl.a,hl.a,[]),e["\u0275mpd"](512,kl.a,kl.a,[]),e["\u0275mpd"](512,Tl.a,Tl.a,[]),e["\u0275mpd"](512,wl.b,wl.b,[]),e["\u0275mpd"](512,ll.e,ll.e,[]),e["\u0275mpd"](512,ll.d,ll.d,[]),e["\u0275mpd"](512,Dl.d,Dl.d,[]),e["\u0275mpd"](512,Cl.ClickOutsideModule,Cl.ClickOutsideModule,[]),e["\u0275mpd"](512,wl.a,wl.a,[]),e["\u0275mpd"](512,xl.a,xl.a,[]),e["\u0275mpd"](512,yl.NgxDatatableModule,yl.NgxDatatableModule,[]),e["\u0275mpd"](512,t,t,[]),e["\u0275mpd"](1024,ul.m,function(){return[[{path:"",component:g,data:el}]]},[]),e["\u0275mpd"](256,ll.m,"XSRF-TOKEN",[]),e["\u0275mpd"](256,ll.n,"X-XSRF-TOKEN",[]),e["\u0275mpd"](256,Dl.a,xl.b,[])])})}});