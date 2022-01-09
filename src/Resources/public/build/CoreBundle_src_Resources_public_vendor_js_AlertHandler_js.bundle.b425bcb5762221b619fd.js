/*! For license information please see CoreBundle_src_Resources_public_vendor_js_AlertHandler_js.bundle.b425bcb5762221b619fd.js.LICENSE.txt */
"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["CoreBundle_src_Resources_public_vendor_js_AlertHandler_js"],{"../CoreBundle/src/Resources/public/vendor/js/AlertHandler.js":(e,t,o)=>{o.r(t),o.d(t,{AlertHandler:()=>l});var n=o("../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js"),s=o.n(n);class l{showErrorDialog(e,t,o){s().fire({title:e,text:t,type:"error",customClass:o||""})}showInfoDialog(e,t,o){s().fire({title:e,text:t,type:"info",customClass:o||""})}showInfoActionDialog(e,t,o,n){s().fire({title:e,text:t,type:"info",customClass:n||""}).then((function(){o()}))}showInfoActionDialog2(e,t,o,n){s().fire({title:e,text:t,type:"info",showLoaderOnConfirm:!0,customClass:n||"",preConfirm:e=>{o()}})}showConfirmDialog(e,t,o,n,l,i,r){s().fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:l||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((e=>{e.value?o():n()}))}showConfirmDialogHTML(e,t,o,n,l,i,r){s().fire({title:e,html:t,type:"warning",showCancelButton:!0,confirmButtonText:l||"Confirm",cancelButtonText:i||"Cancel",dangerMode:!0,customClass:r||""}).then((e=>{e.value?o():n()}))}showPreConfirmDialog(e,t,o,n,l,i,r){s().fire({title:e,text:t,type:"warning",showCancelButton:!0,confirmButtonText:n||"Confirm",cancelButtonText:l||"Cancel",showLoaderOnConfirm:r||!0,preConfirm:function(){return new Promise((function(e){o()}))},allowOutsideClick:()=>!s().isLoading(),dangerMode:!0,customClass:i||""})}showLoadingDialog(e,t,o,n){s().fire({title:e,text:t,showCancelButton:!1,allowEscapeKey:!1,allowOutsideClick:!1,showLoaderOnConfirm:!0,onBeforeOpen:()=>{s().clickConfirm()},customClass:n||"",preConfirm:()=>new Promise((function(e){o()}))})}async showSelectDialog(e,t,o,n,l){const{value:i}=await s().fire({title:e,input:"select",inputOptions:t,inputPlaceholder:"-",showCancelButton:!0,confirmButtonText:o,cancelButtonText:n,customClass:l||""});return i}}}}]);