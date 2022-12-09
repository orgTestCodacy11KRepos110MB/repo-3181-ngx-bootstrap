"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[345],{11345:(l,a,o)=>{o.r(a),o.d(a,{DemoProgressbarModule:()=>j,ProgressbarSectionComponent:()=>h});var i=o(36895),C=o(90433),P=o(59459),x=o(70033),e=o(41571);const T=["*"];let D=(()=>{class t{constructor(n,s){this.el=n,this.renderer=s,this.max=100,this.value=0,this.animate=!1,this.striped=!1,this.type="info",this.percent=100}get isBs3(){return(0,x.XA)()}ngOnChanges(n){(n.value||n.max)&&(this.percent=Number(n.value?.currentValue||this.value)/Number(n.max?.currentValue||this.max||100)*100),n.type&&this.applyTypeClasses()}applyTypeClasses(){if(this._prevType){const s=`bg-${this._prevType}`;this.renderer.removeClass(this.el.nativeElement,`progress-bar-${this._prevType}`),this.renderer.removeClass(this.el.nativeElement,s),this._prevType=void 0}if(this.type){const s=`bg-${this.type}`;this.renderer.addClass(this.el.nativeElement,`progress-bar-${this.type}`),this.renderer.addClass(this.el.nativeElement,s),this._prevType=this.type}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["bar"]],hostAttrs:["role","progressbar","aria-valuemin","0"],hostVars:15,hostBindings:function(n,s){2&n&&(e.uIk("aria-valuenow",s.value)("aria-valuetext",s.percent?s.percent.toFixed(0)+"%":"")("aria-valuemax",s.max),e.Udp("height","100","%")("width",s.percent,"%"),e.ekj("progress-bar",!0)("progress-bar-animated",!s.isBs3&&s.animate)("progress-bar-striped",s.striped)("active",s.isBs3&&s.animate))},inputs:{max:"max",value:"value",animate:"animate",striped:"striped",type:"type"},features:[e.TTD],ngContentSelectors:T,decls:1,vars:0,template:function(n,s){1&n&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{constructor(){this.animate=!1,this.max=100}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function A(t,r){1&t&&e.GkF(0)}function S(t,r){if(1&t&&(e.TgZ(0,"bar",3),e.Hsn(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("type",n.type)("value",n._value)("max",n.max)("animate",n.animate)("striped",n.striped)}}function Z(t,r){if(1&t&&(e.TgZ(0,"bar",3),e._uU(1),e.qZA()),2&t){const n=r.$implicit,s=e.oxw(2);e.Q6J("type",n.type)("value",n.value)("max",n.max||s.max)("animate",s.animate)("striped",s.striped),e.xp6(1),e.Oqu(n.label)}}function E(t,r){if(1&t&&e.YNc(0,Z,2,6,"bar",4),2&t){const n=e.oxw();e.Q6J("ngForOf",n._values)}}const k=["*"];let p=(()=>{class t{constructor(n){this.max=100,this.animate=!1,this.striped=!1,this.isStacked=!1,this._value=0,Object.assign(this,n)}set value(n){this.isStacked=Array.isArray(n),"number"==typeof n?(this._value=n,this._values=void 0):(this._value=void 0,this._values=n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["progressbar"]],hostVars:3,hostBindings:function(n,s){2&n&&(e.uIk("max",s.max),e.ekj("progress",!0))},inputs:{max:"max",animate:"animate",striped:"striped",type:"type",value:"value"},ngContentSelectors:k,decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["NotStacked",""],["Stacked",""],[3,"type","value","max","animate","striped"],[3,"type","value","max","animate","striped",4,"ngFor","ngForOf"]],template:function(n,s){if(1&n&&(e.F$t(),e.YNc(0,A,1,0,"ng-container",0),e.YNc(1,S,2,5,"ng-template",null,1,e.W1O),e.YNc(3,E,1,1,"ng-template",null,2,e.W1O)),2&n){const m=e.MAs(2),u=e.MAs(4);e.Q6J("ngIf",!s.isStacked)("ngIfThen",m)("ngIfElse",u)}},dependencies:[i.sg,i.O5,D],styles:["[_nghost-%COMP%]{width:100%;display:flex}"],changeDetection:0}),t})(),M=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez]}),t})();var c=o(21639);let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["demo-progressbar-static"]],decls:13,vars:7,consts:[[1,"row"],[1,"col-sm-4"],[1,"mb-2"],[3,"value"],["type","warning",3,"value","striped"],["type","danger",3,"max","value","striped","animate"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"progressbar",3),e.qZA()(),e.TgZ(4,"div",1)(5,"div",2)(6,"progressbar",4),e._uU(7,"22%"),e.qZA()()(),e.TgZ(8,"div",1)(9,"div",2)(10,"progressbar",5)(11,"i"),e._uU(12,"166 / 200"),e.qZA()()()()()),2&n&&(e.xp6(3),e.Q6J("value",55),e.xp6(3),e.Q6J("value",22)("striped",!0),e.xp6(4),e.Q6J("max",200)("value",166)("striped",!0)("animate",!0))},dependencies:[p],encapsulation:2}),t})(),b=(()=>{class t{constructor(){this.max=200,this.dynamic=0,this.type="info",this.random()}random(){const n=Math.floor(100*Math.random()+1);let s;s=n<25?"success":n<50?"info":n<75?"warning":"danger",this.dynamic=n,this.type=s}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["demo-progressbar-dynamic"]],decls:19,vars:10,consts:[[1,"mb-2"],[3,"max","value"],[1,"text-nowrap"],["type","success",3,"animate","value"],[1,"mb-3"],[1,"progress-striped","active",3,"value","type"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"progressbar",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"small")(5,"em"),e._uU(6,"No animation"),e.qZA()()(),e.TgZ(7,"div",0)(8,"progressbar",3)(9,"b"),e._uU(10),e.qZA()(),e.TgZ(11,"small")(12,"em"),e._uU(13,"Object (changes type based on value)"),e.qZA()()(),e.TgZ(14,"div",4)(15,"progressbar",5),e._uU(16),e.qZA()(),e.TgZ(17,"button",6),e.NdJ("click",function(){return s.random()}),e._uU(18,"Randomize"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("max",s.max)("value",s.dynamic),e.xp6(2),e.AsE("",s.dynamic," / ",s.max,""),e.xp6(5),e.Q6J("animate",!1)("value",s.dynamic),e.xp6(2),e.hij("",s.dynamic,"%"),e.xp6(5),e.Q6J("value",s.dynamic)("type",s.type),e.xp6(1),e.Oqu(s.type))},dependencies:[p],encapsulation:2}),t})(),f=(()=>{class t{constructor(){this.stacked=[],this.randomStacked()}randomStacked(){const n=["success","info","warning","danger"];this.stacked=[];const s=Math.floor(4*Math.random()+1);for(let m=0;m<s;m++){const u=Math.floor(4*Math.random()),y=Math.floor(27*Math.random()+3);this.stacked.push({value:y,type:n[u],label:y+" %"})}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["demo-progressbar-stacked"]],decls:7,vars:2,consts:[[1,"row"],[1,"col-lg-12"],[1,"mb-3"],[1,"progress",3,"value","max"],["type","button",1,"btn","btn-sm","btn-primary",3,"click"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"progressbar",3),e.qZA()(),e.TgZ(4,"div",1)(5,"button",4),e.NdJ("click",function(){return s.randomStacked()}),e._uU(6,"Randomize"),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("value",s.stacked)("max",100))},dependencies:[p],encapsulation:2}),t})();function U(){return Object.assign(new d,{animate:!0,striped:!0,max:150})}let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["demo-progressbar-config"]],features:[e._Bn([{provide:d,useFactory:U}])],decls:4,vars:1,consts:[[1,"mb-2"],["type","danger",1,"progress-striped","active",3,"value"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"progressbar",1)(2,"i"),e._uU(3,"136 / 150"),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("value",136))},dependencies:[p],encapsulation:2}),t})();const F=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:c.ke,content:[{title:"Static",anchor:"bs3-static",component:o(47593),html:o(76605),outlet:g},{title:"Dynamic",anchor:"bs3-dynamic",component:o(87659),html:o(25642),outlet:b},{title:"Stacked",anchor:"bs3-stacked",component:o(70133),html:o(87825),outlet:f},{title:"Configuring defaults",anchor:"bs3-config",component:o(60574),html:o(35958),outlet:v}]},{name:"Installation",anchor:"api-reference",tabName:"api",outlet:c.s$,usage:o(33552),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">progressbar</span>',content:[{title:"ProgressbarComponent",anchor:"progressbar-component",outlet:c.Wh},{title:"ProgressbarConfig",anchor:"progress-config",outlet:c.Vg}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:c.ke,content:[{title:"Static",anchor:"bs3-static-ex",outlet:g},{title:"Dynamic",anchor:"bs3-dynamic-ex",outlet:b},{title:"Stacked",anchor:"bs3-stacked-ex",outlet:f},{title:"Configuring defaults",anchor:"bs3-config-ex",outlet:v}]}];var B=o(22289),O=o(33505);let h=(()=>{class t{constructor(n){this.injector=n,this.name="Progressbar",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/progressbar",this.componentContent=F,this._injectors=new Map}sectionInjections(n){if(this._injectors.has(n))return this._injectors.get(n);const s=e.XwF.resolveAndCreate([{provide:c.IH,useValue:n}],this.injector);return this._injectors.set(n,s),s}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.zs3))},t.\u0275cmp=e.Xpm({type:t,selectors:[["progressbar-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(n,s){1&n&&(e.TgZ(0,"demo-section",0)(1,"p"),e._uU(2,"Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."),e.qZA(),e.TgZ(3,"p"),e._uU(4,"The easiest way to add the progressbar component to your app (will be added to the root module)"),e.qZA(),e._UZ(5,"docs-section",1),e.qZA()),2&n&&(e.Q6J("name",s.name)("src",s.src)("componentContent",s.componentContent),e.xp6(5),e.Q6J("content",s.componentContent))},dependencies:[B.Z,O.Z],encapsulation:2,changeDetection:0}),t})();const w=[{path:"",component:h}];let j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,C.u5,c.Gz,M.forRoot(),P.Bz.forChild(w)]}),t})()},35958:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i='<div class="mb-2">\n  <progressbar class="progress-striped active"  [value]="136" type="danger"><i>136 / 150</i></progressbar>\n</div>\n'},60574:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { ProgressbarConfig } from 'ngx-bootstrap/progressbar';\n\n// such override allows to keep some initial values\n\nexport function getProgressbarConfig(): ProgressbarConfig {\n  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-progressbar-config',\n  templateUrl: './config.html',\n  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]\n})\nexport class DemoProgressbarConfigComponent {}\n"},25642:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i='<div class="mb-2">\n  <progressbar [max]="max" [value]="dynamic">\n    <span class="text-nowrap">{{dynamic}} / {{max}}</span>\n  </progressbar>\n  <small><em>No animation</em></small>\n</div>\n<div class="mb-2">\n  <progressbar [animate]="false" [value]="dynamic" type="success"><b>{{dynamic}}%</b></progressbar>\n  <small><em>Object (changes type based on value)</em></small>\n</div>\n<div class="mb-3">\n  <progressbar class="progress-striped active" [value]="dynamic" [type]="type">{{type}}</progressbar>\n</div>\n<button type="button" class="btn btn-sm btn-primary" (click)="random()">Randomize</button>\n'},87659:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-progressbar-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoProgressbarDynamicComponent {\n  max = 200;\n  showWarning?: boolean;\n  dynamic = 0;\n  type: 'success' | 'info' | 'warning' | 'danger' = 'info';\n\n  constructor() {\n    this.random();\n  }\n\n  random(): void {\n    const value = Math.floor(Math.random() * 100 + 1);\n    let type: 'success' | 'info' | 'warning' | 'danger';\n\n    if (value < 25) {\n      type = 'success';\n    } else if (value < 50) {\n      type = 'info';\n    } else if (value < 75) {\n      type = 'warning';\n    } else {\n      type = 'danger';\n    }\n\n    this.dynamic = value;\n    this.type = type;\n  }\n}\n"},87825:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i='<div class="row">\n  <div class="col-lg-12">\n    <div class="mb-3">\n      <progressbar class="progress" [value]="stacked" [max]="100"></progressbar>\n    </div>\n  </div>\n  <div class="col-lg-12">\n    <button type="button" class="btn btn-sm btn-primary" (click)="randomStacked()">Randomize</button>\n  </div>\n</div>\n'},70133:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i="import { Component } from '@angular/core';\nimport { ProgressbarType } from 'ngx-bootstrap/progressbar';\n\ninterface IStack {\n  type: ProgressbarType;\n  label: string;\n  value: number;\n  max: number;\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-progressbar-stacked',\n  templateUrl: './stacked.html'\n})\nexport class DemoProgressbarStackedComponent {\n  type?: string;\n  stacked: IStack[] = [];\n\n  constructor() {\n    this.randomStacked();\n  }\n\n  randomStacked(): void {\n    const types = ['success', 'info', 'warning', 'danger'];\n\n    this.stacked = [];\n    const n = Math.floor(Math.random() * 4 + 1);\n    for (let i = 0; i < n; i++) {\n      const index = Math.floor(Math.random() * 4);\n      const value = Math.floor(Math.random() * 27 + 3);\n      this.stacked.push(<IStack>{\n        value,\n        type: types[index],\n        label: value + ' %'\n      });\n    }\n  }\n}\n"},76605:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i='<div class="row">\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar [value]="55"></progressbar>\n    </div>\n  </div>\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar [value]="22" type="warning" [striped]="true">22%</progressbar>\n    </div>\n  </div>\n  <div class="col-sm-4">\n    <div class="mb-2">\n      <progressbar [max]="200" [value]="166" type="danger" [striped]="true" [animate]="true"><i>166 / 200</i></progressbar>\n    </div>\n  </div>\n</div>\n'},47593:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-progressbar-static',\n  templateUrl: './static.html'\n})\nexport class DemoProgressbarStaticComponent {}\n"},33552:(l,a,o)=>{o.r(a),o.d(a,{default:()=>i});const i="import { ProgressbarModule } from 'ngx-bootstrap/progressbar';\n\n@NgModule({\n  imports: [ProgressbarModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);