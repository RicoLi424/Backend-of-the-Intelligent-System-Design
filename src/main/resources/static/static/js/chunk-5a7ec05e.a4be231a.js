(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a7ec05e"],{"1cc5":function(t,e,n){"use strict";var a=n("2f7a"),i=n.n(a);i.a},"2f7a":function(t,e,n){},4791:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7"),n("4f6c");var a=n("bc3a"),i=n.n(a);function o(t){return new Promise((function(e,n){var a=i.a.create({timeout:45e3});a(t).then((function(t){console.log("成功"),e(t)})).catch((function(t){console.log("失败"),n(t)}))}))}},"4f6c":function(t,e,n){"use strict"},"60a5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"80%",height:"80%",margin:"10px auto 0"}},[n("div",{staticStyle:{width:"100%",height:"40px",margin:"10px 0","margin-bottom":"20px",display:"flex","justify-content":"space-between"}},[n("div",{staticStyle:{width:"30%",height:"40px",display:"flex","justify-content":"flex-start"}},[n("div",{staticStyle:{width:"80%",height:"40px",display:"flex","justify-content":"space-between"}},[n("el-form",{ref:"input",staticClass:"demo-ruleForm",attrs:{model:t.input,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"设备编号",prop:"input",rules:[]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.input.input,callback:function(e){t.$set(t.input,"input","string"===typeof e?e.trim():e)},expression:"input.input"}})],1)],1)],1),n("el-button",{on:{click:function(e){return t.submitForm("input")}}},[t._v("搜索")])],1),n("div",{staticStyle:{width:"30%",height:"40px"}}),n("div",{staticStyle:{width:"30%",height:"40px"}},[n("el-button",{on:{click:function(e){t.addMaterial=!0}}},[t._v("增加")])],1)]),[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.equipments}},[n("el-table-column",{attrs:{prop:"equipment_id",label:"设备编号"}}),n("el-table-column",{attrs:{prop:"name",label:"设备名称"}}),n("el-table-column",{attrs:{prop:"purpose",label:"用途"}}),n("el-table-column",{attrs:{prop:"status",label:"状态"}}),n("el-table-column",{attrs:{prop:"comments",label:"描述"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleClick(e.row)}}},[t._v("查看")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.edit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.deleteThis(e.row)}}},[t._v("删除")])]}}])})],1)],n("div",{staticClass:"block",staticStyle:{padding:"10px","margin-top":"10px"}},[n("el-pagination",{attrs:{"hide-on-single-page":!0,total:t.total,background:"",layout:"total,prev, pager, next, jumper","page-size":t.page.pages},on:{"prev-click":t.preclick,"next-click":t.nextclick,"current-change":t.curChange}})],1),n("el-dialog",{attrs:{title:"修改物品信息x",visible:t.addMaterial,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.addMaterial=e}}},[n("el-form",{ref:"incrementM",staticClass:"demo-ruleForm",attrs:{model:t.incrementM,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"设备名称",prop:"name",rules:[{required:!0,message:"物料名称不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.incrementM.name,callback:function(e){t.$set(t.incrementM,"name","string"===typeof e?e.trim():e)},expression:"incrementM.name"}})],1),n("el-form-item",{attrs:{label:"设备用途",prop:"purpose",rules:[{required:!0,message:"物料型号不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.incrementM.purpose,callback:function(e){t.$set(t.incrementM,"purpose","string"===typeof e?e.trim():e)},expression:"incrementM.purpose"}})],1),n("el-form-item",{attrs:{label:"设备状态",prop:"status",rules:[{required:!0,message:"物料颜色不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.incrementM.status,callback:function(e){t.$set(t.incrementM,"status","string"===typeof e?e.trim():e)},expression:"incrementM.status"}})],1),n("el-form-item",{attrs:{label:"设备描述",prop:"comments",rules:[{required:!0,message:"物料描述不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.incrementM.comments,callback:function(e){t.$set(t.incrementM,"comments","string"===typeof e?e.trim():e)},expression:"incrementM.comments"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.incrementThis("incrementM")}}},[t._v("提交")]),n("el-button",{on:{click:function(e){return t.resetForm("incrementM")}}},[t._v("重置")])],1)],1)],1),n("el-dialog",{attrs:{title:"修改信息",visible:t.updateM,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.updateM=e}}},[n("el-form",{ref:"updateInfo",staticClass:"demo-ruleForm",attrs:{model:t.updateInfo,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"状态",prop:"status",rules:[{required:!0,message:"物料状态不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateInfo.status,callback:function(e){t.$set(t.updateInfo,"status","string"===typeof e?e.trim():e)},expression:"updateInfo.status"}})],1),n("el-form-item",{attrs:{label:"描述",prop:"comments",rules:[{required:!0,message:"物料状态不能为空"}]}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateInfo.comments,callback:function(e){t.$set(t.updateInfo,"comments","string"===typeof e?e.trim():e)},expression:"updateInfo.comments"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateThis("updateInfo")}}},[t._v("修改")]),n("el-button",{on:{click:function(e){return t.resetForm("updateInfo")}}},[t._v("重置")])],1)],1)],1)],2)},i=[],o=(n("b0c0"),n("4791")),s={name:"equipmentInfo",data:function(){return{loading:!1,updateM:!1,addMaterial:!1,incrementM:{name:"",purpose:"",status:"",comments:"",operator_id:""},input:{input:""},updateInfo:{equipment_id:"",operator_id:"",status:"",comments:""},equipments:[{equipment_id:"1",name:1,purpose:"osad",status:"正",comments:"sad"}],total:1,page:{pages:13,current:1}}},created:function(){this.getData()},methods:{preclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},nextclick:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},curChange:function(t){var e=this;this.page.current=t,this.loading=!0,setTimeout((function(){e.getData(),e.loading=!1}),1e3)},getData:function(){var t=this;this.loading=!0;var e={pageOffset:this.page.current,pageSize:this.page.pages};console.log("???"),Object(o["a"])({url:"process/getEquipments",method:"get",params:e}).then((function(e){console.log(e),t.equipments=e.data.equipments,t.total=e.data.count,t.loading=!1})).catch((function(e){t.loading=!1,t.$message.error("服务器异常")}))},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))},incrementThis:function(t){var e=this;this.$refs[t].validate((function(t){if(t){e.loading=!0;var n={name:e.incrementM.name,purpose:e.incrementM.purpose,status:e.incrementM.status,comments:e.incrementM.comments,operator_id:1};Object(o["a"])({url:"process/addEquipment",method:"post",data:n}).then((function(t){"添加成功"===t.data?(e.addMaterial=!1,e.getData(),e.$message({type:"success",message:"添加成功"})):e.$message.error("添加失败"),e.loading=!1})).catch((function(t){}))}else e.loading=!1,e.$message.error("服务器异常")}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(t){if(""===e.input.input){e.getData(),e.loading=!0;var n={equipment_id:e.input.input};Object(o["a"])({url:"process/getEquipmentByID",params:n,method:"get"}).then((function(t){var n=[];n.push(t.data),null!==t.data?(e.equipments=n,e.total=1):e.$message.error("未查询到该物品"),e.loading=!1,e.loading=!1})).catch((function(t){}))}}else e.loading=!1,e.$message.error("服务器异常")}))},resetForm:function(t){this.$refs[t].resetFields()},handleClick:function(t){this.$router.push({path:"/storehouse/equAndMatMain/equipmentInfoDetail",query:{info:t}})},deleteThis:function(t){var e=this;this.loading=!0;var n={equipment_id:t.equipment_id,operator_id:"1"};Object(o["a"])({url:"process/deleteEquipmentByID",method:"post",data:n}).then((function(t){"删除成功"===t.data?e.$message({type:"success",message:"删除成功"}):e.$message.error("删除失败"),e.getData()})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("服务器异常")}))},edit:function(t){this.updateM=!0,this.updateInfo.equipment_id=t.equipment_id,this.updateInfo.operator_id="1"},updateThis:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var n=e.updateInfo;e.loading=!0,Object(o["a"])({url:"process/updateEquipmentByID",data:n,method:"post"}).then((function(t){console.log(t),e.$message({type:"success",message:"修改成功"}),e.updateM=!1,e.getData()})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("服务器异常")}))}else e.loading=!1,e.$message.error("服务器异常")}))}}},r=s,l=(n("1cc5"),n("2877")),u=Object(l["a"])(r,a,i,!1,null,"6fd8e548",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-5a7ec05e.a4be231a.js.map