import{P as T}from"./PsLabel.js";import{P as A}from"./PsIcon.js";import{e as V,P as I,a as N}from"./PsLayout.js";import{a as z,P as H}from"./PsTableSearch.js";import{P as U}from"./PsInputWithRightIcon.js";import{h as j}from"./moment.js";import{r as w,o as s,c as i,f as m,w as r,l as M,F as g,q as D,b as h,a as f,p as u,t as _,g as P,m as x,v as C,n as q}from"./app.js";import{_ as E}from"./plugin-vue_export-helper.js";const W={name:"PsDataTable",components:{PsLabel:T,PsIcon:A,PsTextButton:V,PsTableSearch:z,PsPagination:H,PsDropdown:I,PsDropdownSelect:N,PsInputWithRightIcon:U},props:{margin:{type:String,default:"mt-6 sm:mt-8 lg:mt-10"},columns:{type:Array,default:[]},rows:{type:Array,default:[]},perPageOptions:{type:Array,default:[10,25,50,100]},sortable:{type:Boolean,default:!0},colFilterOptions:{type:Array,default:[]},searchable:{type:Boolean,default:!1},searchRightable:{type:Boolean,default:!1},searchOptions:{type:Array,default:[]},globalSearchFields:{type:Array,default:[]},globalSearchPlaceholder:{type:String,default:"Search"},searchHide:{type:Boolean,default:!1},searchRightHide:{type:Boolean,default:!1},thumb1xUrl:{type:String,default:""}},data(){return{searchterm:"",selectedValue:0,searchedData:{},filterOptions:this.searchOptions,sortedData:{},tableData:this.rows,globalSearch:this.globalSearchFields,pagination:{page:1,perPage:this.perPageOptions[0]},totalRecords:this.rows.length,moment:j,clearFilter:!1,sortType:"desc"}},computed:{filteredList(){if(this.clearFilter==!0&&(this.searchedData={}),this.tableData=this.rows,this.searchterm&&(this.tableData=this.tableData.filter(a=>{let d=!1;for(let t=0;t<this.globalSearch.length;t++)if(a[this.globalSearch[t]].toLowerCase().replace(/\s+/g," ").trim().includes(this.searchterm.toLowerCase().replace(/\s+/g," ").trim())){d=!0;break}else d=!1;return!!d})),this.searchedData)for(let a of this.searchOptions)a.filterType=="dropdown"&&a.checkFieldMain in this.searchedData&&a.checkFieldMain!=""&&a.checkFieldMain!=0&&this.searchedData[a.checkFieldMain]!=""&&this.searchedData[a.checkFieldMain]!=0&&(this.tableData=this.tableData.filter(d=>d[a.checkFieldMain]==this.searchedData[a.checkFieldMain]));if(this.sortable==!0&&this.sortedData!=null){let a=this.columns.length;for(let d=a-1;d>=0;d--){let t=this.columns[d];t.field in this.sortedData&&(this.sortedData[t.field].type=="String"&&("relation"in t?this.tableData=this.tableData.sort((y,b)=>{let n=y[t.relation][t.relationField].toLowerCase(),F=b[t.relation][t.relationField].toLowerCase();return n<F?-1:n>F?1:0}):this.tableData=this.tableData.sort((y,b)=>{let n=y[t.field].toLowerCase(),F=b[t.field].toLowerCase();return n<F?-1:n>F?1:0}),this.sortedData[t.field].orderBy=="desc"&&(this.tableData=this.tableData.reverse())),(this.sortedData[t.field].type=="Integer"||this.sortedData[t.field].type=="Boolean")&&(this.tableData=this.tableData.sort((y,b)=>y[t.field]-b[t.field]),this.sortedData[t.field].orderBy=="desc"&&(this.tableData=this.tableData.reverse())),this.sortedData[t.field].type=="Date"&&(this.tableData=this.tableData.sort((y,b)=>new Date(y[t.field]).getTime()-new Date(b[t.field]).getTime()),this.sortType=="desc"&&(this.tableData=this.tableData.reverse())))}}this.totalRecords=this.tableData.length;const o=(this.pagination.page-1)*this.pagination.perPage,p=this.pagination.page*this.pagination.perPage;return this.tableData.slice(o,p)}},methods:{handleSorting(o){let p={},a=o.field,d=o.type;this.sortedData==null?p={orderBy:"asc",type:d}:a in this.sortedData?this.sortedData[a].orderBy=="asc"?p={orderBy:"desc",type:d}:p={orderBy:"asc",type:d}:p={orderBy:"asc",type:d},this.sortedData={},this.sortedData[a]=p}}},G={class:"rounded-md shadow-xs w-56"},J={class:"pt-2 z-30"},K={key:0},Q=u("No data yet!"),X={key:1},Y=["onClick"],Z=["onClick"],O={class:"grid grid-cols-4 gap-2 mt-4"},$={class:"rounded-md shadow-xs w-56"},ee={class:"pt-2 z-30"},te={key:0},ae=u("No data yet!"),le={key:1},se=["onClick"],ie=["onClick"],re={class:"overflow-x-auto"},oe={class:"bg-primary-500 text-white dark:text-black text-2xl justify-content"},ne=u("Action"),de=u("No"),ce={class:"bg-white divide-y divide-gray-200 dark:bg-secondaryDark-black dark:divide-white border-b border-t"},he={class:"py-2 ps-4"},fe={key:0},ue={class:"pb-2 pt-4 px-4 text-sm font-medium whitespace-nowrap dark:text-slate-500 text-slate-400 text-center border-b border-t",colspan:"20"};function pe(o,p,a,d,t,y){const b=w("ps-dropdown-select"),n=w("ps-label"),F=w("ps-dropdown"),B=w("ps-icon"),S=w("ps-input-with-right-icon"),R=w("ps-table-search"),L=w("ps-pagination");return s(),i(g,null,[a.searchHide?P("",!0):(s(),m(R,{key:0,perPageOptions:a.perPageOptions,colFilterOptions:a.colFilterOptions},{searchLeft:r(()=>[M(o.$slots,"searchLeft")]),searchRight:r(()=>[M(o.$slots,"searchRight"),a.searchRightable?(s(!0),i(g,{key:0},D(a.searchOptions,(e,c)=>(s(),i("div",{key:c},[e.filterType=="dropdown"?(s(),m(F,{key:0,align:"left",class:"w-56 h-10"},{select:r(()=>[h(b,{placeholder:e.placeholder,showCenter:!0,selectedValue:e.checkFieldMain in t.searchedData&&t.searchedData[e.checkFieldMain]!=""?e.options.filter(l=>l[e.checkFieldOption]==t.searchedData[e.checkFieldMain])[0][e.displayField]:""},null,8,["placeholder","selectedValue"])]),list:r(()=>[f("div",G,[f("div",J,[e.options.length==null?(s(),i("div",K,[h(n,{class:"p-2 flex"},{default:r(()=>[Q]),_:1})])):(s(),i("div",X,[f("div",{onClick:l=>[t.clearFilter=!1,t.searchedData[e.checkFieldMain]="","sub_options"in e?t.searchedData[e.sub_options.checkFieldMain]="":"","sub_options"in e?o.subOptions[e.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h(n,null,{default:r(()=>[u(_(o.$t("core__be_all")),1)]),_:1})],8,Y),(s(!0),i(g,null,D(e.options,(l,v)=>(s(),i("div",{key:v,onClick:k=>[t.clearFilter=!1,t.searchedData[e.checkFieldMain]=l[e.checkFieldOption],"sub_options"in e?t.searchedData[e.sub_options.checkFieldMain]="":"","sub_options"in e?o.subOptions[e.sub_options.options]=l[e.sub_options.options]:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h(n,null,{default:r(()=>[u(_(l[e.displayField]),1)]),_:2},1024)],8,Z))),128))]))])])]),_:2},1024)):P("",!0)]))),128)):P("",!0),h(S,{class:"w-60 h-10 rounded-full flex",value:t.searchterm,"onUpdate:value":p[0]||(p[0]=e=>t.searchterm=e),placeholder:a.globalSearchPlaceholder},{icon:r(()=>[h(B,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])]),searchOption:r(()=>[x(f("div",O,[(s(!0),i(g,null,D(a.searchOptions,(e,c)=>(s(),i("div",{key:c},[e.filterType=="dropdown"?(s(),m(F,{key:0,align:"left",class:"w-full"},{select:r(()=>[h(b,{placeholder:e.placeholder,showCenter:!0,selectedValue:e.checkFieldMain in t.searchedData&&t.searchedData[e.checkFieldMain]!=""?e.options.filter(l=>l[e.checkFieldOption]==t.searchedData[e.checkFieldMain])[0][e.displayField]:""},null,8,["placeholder","selectedValue"])]),list:r(()=>[f("div",$,[f("div",ee,[e.options.length==null?(s(),i("div",te,[h(n,{class:"p-2 flex"},{default:r(()=>[ae]),_:1})])):(s(),i("div",le,[f("div",{onClick:l=>[t.clearFilter=!1,t.searchedData[e.checkFieldMain]="","sub_options"in e?t.searchedData[e.sub_options.checkFieldMain]="":"","sub_options"in e?o.subOptions[e.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h(n,null,{default:r(()=>[u(_(o.$t("core__be_all")),1)]),_:1})],8,se),(s(!0),i(g,null,D(e.options,(l,v)=>(s(),i("div",{key:v,onClick:k=>[t.clearFilter=!1,t.searchedData[e.checkFieldMain]=l[e.checkFieldOption],"sub_options"in e?t.searchedData[e.sub_options.checkFieldMain]="":"","sub_options"in e?o.subOptions[e.sub_options.options]=l[e.sub_options.options]:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[h(n,null,{default:r(()=>[u(_(l[e.displayField]),1)]),_:2},1024)],8,ie))),128))]))])])]),_:2},1024)):P("",!0)]))),128))],512),[[C,a.searchable]])]),_:3},8,["perPageOptions","colFilterOptions"])),f("div",re,[f("table",{class:q(["table-auto w-full",a.margin])},[f("thead",oe,[f("tr",null,[(s(!0),i(g,null,D(a.columns.filter(e=>e.field=="action"),e=>x((s(),i("th",{key:e.field},[h(n,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-6"},{default:r(()=>[ne]),_:1})])),[[C,a.colFilterOptions.filter(c=>c.key==e.field).length==0?!0:!a.colFilterOptions.filter(c=>c.key==e.field)[0].hidden]])),128)),f("th",null,[h(n,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:r(()=>[de]),_:1})]),(s(!0),i(g,null,D(a.columns.filter(e=>e.field!="action"),e=>x((s(),i("th",{key:e.field},[e.field!="action"?(s(),m(n,{key:0,textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3 items-center"},{default:r(()=>[u(_(o.$t(e.label))+" ",1),e.action=="Action"?(s(),m(B,{key:0,onClick:c=>y.handleSorting(e),name:e.field in t.sortedData&&t.sortedData[e.field].orderBy=="asc"?"upChervon":"downChervon",class:"ms-2",w:"16",h:"16"},null,8,["onClick","name"])):P("",!0)]),_:2},1024)):P("",!0)])),[[C,a.colFilterOptions.filter(c=>c.key==e.field).length==0?!0:!a.colFilterOptions.filter(c=>c.key==e.field)[0].hidden]])),128))])]),f("tbody",ce,[(s(!0),i(g,null,D(y.filteredList,(e,c)=>(s(),i("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",key:c},[(s(!0),i(g,null,D(a.columns.filter(l=>l.field=="action"),(l,v)=>x((s(),i("td",{key:v,class:"py-2 ps-4"},[M(o.$slots,"tableActionRow",{field:l.field,row:e},()=>[h(n,{class:"font-normal"},{default:r(()=>[u(_(o.$t(e[l.field])),1)]),_:2},1024)])])),[[C,a.colFilterOptions.filter(k=>k.key==l.field).length==0?!0:!a.colFilterOptions.filter(k=>k.key==l.field)[0].hidden]])),128)),f("td",he,[h(n,null,{default:r(()=>[u(_(c+1+t.pagination.perPage*(t.pagination.page-1)),1)]),_:2},1024)]),(s(!0),i(g,null,D(a.columns.filter(l=>l.field!="action"),(l,v)=>x((s(),i("td",{key:v,class:"py-2 ps-4"},[M(o.$slots,"tableRow",{field:l.field,row:e},()=>["relation"in l?(s(),m(n,{key:0},{default:r(()=>[u(_(e[l.relation]?e[l.relation][l.relationField]:""),1)]),_:2},1024)):l.type=="Date"?(s(),m(n,{key:1},{default:r(()=>[u(_(e[l.field]?t.moment(e[l.field]).format(o.$page.props.dateFormat):""),1)]),_:2},1024)):l.type=="Image"?(s(),m(n,{key:2})):(s(),m(n,{key:3,class:"font-normal"},{default:r(()=>[u(_(o.$t(e[l.field])),1)]),_:2},1024))])])),[[C,a.colFilterOptions.filter(k=>k.key==l.field).length==0?!0:!a.colFilterOptions.filter(k=>k.key==l.field)[0].hidden]])),128))]))),128)),y.filteredList.length==0?(s(),i("tr",fe,[f("td",ue,[M(o.$slots,"emptyRow",{},()=>[u(_(o.$t("core__be_table_no_data")),1)])])])):P("",!0)])],2)]),x(h(L,{value:t.pagination,"onUpdate:value":p[1]||(p[1]=e=>t.pagination=e),totalRecords:t.totalRecords,perPageOptions:a.perPageOptions},null,8,["value","totalRecords","perPageOptions"]),[[C,a.rows.length>a.perPageOptions[0]]])],64)}var ve=E(W,[["render",pe]]);export{ve as P};
