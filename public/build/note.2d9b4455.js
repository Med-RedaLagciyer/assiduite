(self.webpackChunk=self.webpackChunk||[]).push([[6793],{2621:(e,r,n)=>{var t=n(9755);function a(e,r,n,t,a,s,i){try{var o=e[s](i),c=o.value}catch(e){return void n(e)}o.done?r(c):Promise.resolve(c).then(t,a)}function s(e){return function(){var r=this,n=arguments;return new Promise((function(t,s){var i=e.apply(r,n);function o(e){a(i,t,s,o,c,"next",e)}function c(e){a(i,t,s,o,c,"throw",e)}o(void 0)}))}}n(3076),n(9826),n(1539),n(2772),n(561),n(4916),n(4765),n(8674),t(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),r=!1,n=[],a=t("#datables_notes_epreuve").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/administration/note/list",processing:!0,serverSide:!0,deferRender:!0,language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});function i(){t("#datatables_notes_inscription").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[2,"asc"]],ajax:"/administration/note/list/note_inscription/"+r,processing:!0,serverSide:!0,deferRender:!0,language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"},stateSave:!0,bDestroy:!0})}t("body").on("click","#datables_notes_epreuve tbody tr",(function(){var e=t(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var r=n.indexOf(e.attr("id"));n.splice(r,1)}else e.prop("checked",!0),n.push(e.attr("id"));console.log(n)})),t("body").on("dblclick","#datables_notes_epreuve tbody tr",(function(e){e.preventDefault(),t(this).hasClass("active_databales")?(t(this).removeClass("active_databales"),r=null):(t("#datables_notes_epreuve tbody tr").removeClass("active_databales"),t(this).addClass("active_databales"),r=t(this).attr("id"),i())})),t("#etablissement").select2(),t("#professeur").select2(),t("#etablissement").on("change",s(regeneratorRuntime.mark((function e(){var r,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(this).val(),a.columns().search(""),n="",""==r){e.next=12;break}return""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),a.columns(0).search(r).draw(),e.next=8,axios.get("/api/formation/"+r);case 8:s=e.sent,n=s.data,e.next=13;break;case 12:""!=t("#professeur").val()?a.columns(6).search(t("#professeur").val()).draw():a.columns().search("").draw();case 13:t("#semestre").html("").select2(),t("#module").html("").select2(),t("#element").html("").select2(),t("#promotion").html("").select2(),t("#formation").html(n).select2();case 18:case"end":return e.stop()}}),e,this)})))),t("#formation").on("change",s(regeneratorRuntime.mark((function e(){var r,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(this).val(),a.columns().search(""),""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),n="",""==r){e.next=12;break}return a.columns(1).search(r).draw(),e.next=8,axios.get("/api/promotion/"+r);case 8:s=e.sent,n=s.data,e.next=13;break;case 12:a.columns(0).search(t("#etablissement").val()).draw();case 13:t("#semestre").html("").select2(),t("#module").html("").select2(),t("#element").html("").select2(),t("#promotion").html(n).select2();case 17:case"end":return e.stop()}}),e,this)})))),t("#promotion").on("change",s(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(this).val(),a.columns().search(""),""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),""==r){e.next=11;break}return a.columns(2).search(r).draw(),e.next=7,axios.get("/api/semestre/"+r);case 7:n=e.sent,response=n.data,e.next=12;break;case 11:a.columns(1).search(t("#formation").val()).draw();case 12:t("#semestre").html("").select2(),t("#module").html("").select2(),t("#element").html("").select2(),t("#semestre").html(response).select2();case 16:case"end":return e.stop()}}),e,this)})))),t("#semestre").on("change",s(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(this).val(),a.columns().search(""),""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),""==r){e.next=11;break}return e.next=6,axios.get("/api/module/"+r);case 6:n=e.sent,a.columns(3).search(r).draw(),response=n.data,e.next=12;break;case 11:a.columns(2).search(t("#promotion").val()).draw();case 12:t("#module").html("").select2(),t("#element").html("").select2(),t("#module").html(response).select2();case 15:case"end":return e.stop()}}),e,this)})))),t("#module").on("change",s(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t(this).val(),a.columns().search(""),""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),""==r){e.next=11;break}return a.columns(4).search(r).draw(),e.next=7,axios.get("/api/element/"+r);case 7:n=e.sent,response=n.data,e.next=12;break;case 11:a.columns(3).search(t("#semestre").val()).draw();case 12:t("#element").html(response).select2();case 13:case"end":return e.stop()}}),e,this)})))),t("#element").on("change",s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t(this).val(),a.columns().search(""),""!=t("#professeur").val()&&a.columns(6).search(t("#professeur").val()),a.columns(5).search(r).draw();case 4:case"end":return e.stop()}}),e,this)})))),t("#professeur").on("change",s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t(this).val(),a.columns(6).search(r).draw();case 2:case"end":return e.stop()}}),e,this)})))),t("#note").on("click",function(){var n=s(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),r){n.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),n.abrupt("return");case 4:t("#notesmodal").modal("show");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),t("body").on("submit",".save_note",function(){var r=s(regeneratorRuntime.mark((function r(n){var s,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),s=t(this).find("input").attr("id"),!(t(this).find("input").val()<0||t(this).find("input").val()>20)){r.next=5;break}return e.fire({icon:"error",title:"La Note doit etre entre 0 et 20"}),r.abrupt("return");case 5:return t(this).find("input").blur(),i=new FormData(t(this)[0]),t(this).parent().parent().next("tr").find(".input_note").focus(),r.next=10,axios.post("/administration/note/note_update/"+s,i);case 10:return o=r.sent,response=o.data,r.next=14,o.data;case 14:r.sent,a.ajax.reload(null,!1);case 16:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()),t("body").on("submit",".save_obs",function(){var e=s(regeneratorRuntime.mark((function e(r){var n,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t(this).find("input").blur(),n=t(this).find("input").attr("id"),a=new FormData(t(this)[0]),t(this).parent().parent().next("tr").find(".input_obs").focus(),e.next=7,axios.post("/administration/note/observation_update/"+n,a);case 7:return s=e.sent,e.next=10,s.data;case 10:e.sent;case 11:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()),t("body").on("click",".check_note_ins",s(regeneratorRuntime.mark((function e(){var r,n,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new FormData,n=t(this).attr("id"),1!=t(this).prop("checked")){e.next=14;break}return r.append("absence",!0),e.next=6,axios.post("/administration/note/absence_update/"+n,r);case 6:return s=e.sent,e.next=9,s.data;case 9:e.sent,a.ajax.reload(null,!1),e.next=23;break;case 14:return r.append("absence",!1),e.next=17,axios.post("/administration/note/absence_update/"+n,r);case 17:return i=e.sent,e.next=20,i.data;case 20:e.sent,a.ajax.reload(null,!1);case 23:case"end":return e.stop()}}),e,this)})))),t("#import").on("click",function(){var n=s(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),r){n.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),n.abrupt("return");case 4:t("#import_en_masse").modal("show");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),t("body").on("click","#epreuve_canvas",(function(){window.open("/administration/note/canvas/"+r,"_blank")})),t("#import_epreuve_save").on("submit",function(){var e=s(regeneratorRuntime.mark((function e(n){var a,s,o,c,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(t(this)[0]),(s=t("#import_en_masse .modal-body .alert")).remove(),(o=t("#epreuve_enregistre i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),e.prev=6,e.next=9,axios.post("/administration/note/import/"+r,a);case 9:c=e.sent,u=c.data,t("#import_en_masse .modal-body").prepend('<div class="alert alert-success">\n                <p>'.concat(u,"</p>\n              </div>")),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i(),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(6),l=e.t0.response.data,console.log(e.t0,e.t0.response),s.remove(),t("#import_en_masse .modal-body").prepend('<div class="alert alert-danger">'.concat(l,"</div>")),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 23:case"end":return e.stop()}}),e,this,[[6,16]])})));return function(r){return e.apply(this,arguments)}}()),t("#cloture_epreuve").on("click",function(){var r=s(regeneratorRuntime.mark((function r(s){var i,o,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s.preventDefault(),0!=n.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(i=t("#cloture_epreuve i")).removeClass("fa-lock").addClass("fa-spinner fa-spin"),r.prev=6,(o=new FormData).append("epreuves",JSON.stringify(n)),r.next=11,axios.post("/administration/note/cloturer",o);case 11:c=r.sent,u=c.data,i.addClass("fa-lock").removeClass("fa-spinner fa-spin "),e.fire({icon:"success",title:u}),a.ajax.reload(null,!1),n=[],r.next=25;break;case 19:r.prev=19,r.t0=r.catch(6),console.log(r.t0),l=r.t0.response.data,e.fire({icon:"error",title:l}),i.addClass("fa-lock").removeClass("fa-spinner fa-spin ");case 25:case"end":return r.stop()}}),r,null,[[6,19]])})));return function(e){return r.apply(this,arguments)}}()),t("#decloturer_epreuve").on("click",function(){var r=s(regeneratorRuntime.mark((function r(s){var i,o,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s.preventDefault(),0!=n.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(i=t("#decloturer_epreuve i")).removeClass("fa-lock-open").addClass("fa-spinner fa-spin"),r.prev=6,(o=new FormData).append("epreuves",JSON.stringify(n)),r.next=11,axios.post("/administration/note/decloturer",o);case 11:c=r.sent,u=c.data,i.addClass("fa-lock-open").removeClass("fa-spinner fa-spin "),e.fire({icon:"success",title:u}),a.ajax.reload(null,!1),n=[],r.next=25;break;case 19:r.prev=19,r.t0=r.catch(6),console.log(r.t0),l=r.t0.response.data,e.fire({icon:"error",title:l}),i.addClass("fa-lock-open").removeClass("fa-spinner fa-spin ");case 25:case"end":return r.stop()}}),r,null,[[6,19]])})));return function(e){return r.apply(this,arguments)}}()),t("#epreuve_imprimer").on("click",function(){var n=s(regeneratorRuntime.mark((function n(a){var s,i,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),r){n.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),n.abrupt("return");case 4:return(s=t("#epreuve_imprimer i")).removeClass("fa-copy").addClass("fa-spinner fa-spin"),n.prev=6,n.next=9,axios.get("/administration/note/checkifanonymat/"+r);case 9:i=n.sent,o=i.data,console.log(o),s.addClass("fa-copy").removeClass("fa-spinner fa-spin "),t("#imprimer_epreuve").modal("show"),t("#imprimer_epreuve .etudiant_info").html(o.html),t("#imprimer_epreuve .epreuve_title").html(o.id),"oui"==o.anonymat?t("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>\n                    <a href="#" class="btn btn-secondary mt-3" id="impression_anonymat">Impression Anonymat</a>'):t("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>'),n.next=25;break;case 19:n.prev=19,n.t0=n.catch(6),console.log(n.t0),c=n.t0.response.data,e.fire({icon:"error",title:c}),s.addClass("fa-copy").removeClass("fa-spinner fa-spin ");case 25:case"end":return n.stop()}}),n,null,[[6,19]])})));return function(e){return n.apply(this,arguments)}}()),t("body").on("click","#impression_clair",(function(e){e.preventDefault(),window.open("/administration/note/impression/"+r+"/0","_blank")})),t("body").on("click","#impression_anonymat",(function(e){e.preventDefault(),window.open("/administration/note/impression/"+r+"/1","_blank")})),t("#capitaliser_etudiant").on("click",function(){var r=s(regeneratorRuntime.mark((function r(a){var s,i,o,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),0!=n.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(s=t("#capitaliser_etudiant i")).removeClass("fa-archive").addClass("fa-spinner fa-spin"),r.prev=6,(i=new FormData).append("epreuves",JSON.stringify(n)),r.next=11,axios.post("/administration/note/capitaliser",i);case 11:o=r.sent,c=o.data,s.addClass("fa-archive").removeClass("fa-spinner fa-spin "),c.count>0&&window.open("/"+c.fileName,"_blank"),n=[],r.next=24;break;case 18:r.prev=18,r.t0=r.catch(6),console.log(r.t0),u=r.t0.response.data,e.fire({icon:"error",title:u}),s.addClass("fa-archive").removeClass("fa-spinner fa-spin ");case 24:case"end":return r.stop()}}),r,null,[[6,18]])})));return function(e){return r.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,9983,8029,9375],(()=>{return r=2621,e(e.s=r);var r}));e.O()}]);