function setCookie2(e,t,i){if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var n="; expires="+r.toGMTString()}else var n="";document.cookie=e+"="+t+n+"; path=/"}
function getCookie2(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}

var url = new URL(window.location.href);
if(url.searchParams.get("adgsp")) { setCookie2('net_adgClickIdSp', url.searchParams.get("adgsp")); }  
if(url.searchParams.get("adgfp")) { setCookie2('net_adgClickIdFp', url.searchParams.get("adgfp")); }  
if(url.searchParams.get("adgcp")) { setCookie2('net_adgClickIdCp', url.searchParams.get("adgcp")); }  
if(url.searchParams.get("adggbp")) { setCookie2('net_adgClickIdGbp', url.searchParams.get("adggbp")); }  
if(url.searchParams.get("adgme")) { setCookie2('net_adgClickIdMe', url.searchParams.get("adgme")); }  
if(url.searchParams.get("adgppx")) { setCookie2('net_adgClickIdPpx', url.searchParams.get("adgppx")); }  
if(url.searchParams.get("adgppt")) { setCookie2('net_adgClickIdPpt', url.searchParams.get("adgppt")); }  
if(url.searchParams.get("adgsp")) { setCookie2('net_adgClickIdSp', url.searchParams.get("adgsp")); }  
if(url.searchParams.get("adgte")) { setCookie2('net_adgClickIdTe', url.searchParams.get("adgte")); }   
if(url.searchParams.get("banid")) { setCookie2('net_bankierId', url.searchParams.get("banid")); window.location.href = "/"; }  
if(url.searchParams.get("adcesub")) { setCookie2('net_adcomboEsub', url.searchParams.get("adcesub")); }  
if(url.searchParams.get("mobclic")) { setCookie2('net_mobilifeId', url.searchParams.get("mobclic")); }  
if(url.searchParams.get("runclick_id")) { setCookie2('net_runClickId', url.searchParams.get("runclick_id")); }  
if(url.searchParams.get("mobtclic")) { setCookie2('net_mobytizeId', url.searchParams.get("mobtclic")); window.location.href = "/"; }  
if(url.searchParams.get("bizoffer") && url.searchParams.get("bizaff")) { setCookie2('net_bizprofId', url.searchParams.get("bizoffer")+'|'+url.searchParams.get("bizaff")); window.location.href = "/"; }  
if(url.searchParams.get("drcasclic")) { setCookie2('net_drCashClickId', url.searchParams.get("drcasclic")); window.location.href = "/"; }  
if(url.searchParams.get("snetclick")) { setCookie2('net_3snetClickId', url.searchParams.get("snetclick")); window.location.href = "/"; }  
if(url.searchParams.get("o18clic")) { setCookie2('net_o18ClickId', url.searchParams.get("o18clic")); window.location.href = "/"; }  
if(url.searchParams.get("imaxcclic")) { setCookie2('net_imaxCClickId', url.searchParams.get("imaxcclic")); window.location.href = "/"; }  
if(url.searchParams.get("valclic")) { setCookie2('net_valClickId', url.searchParams.get("valclic")); window.location.href = window.location.href.split("?")[0]; }  
if(url.searchParams.get("subacc")) { setCookie2('net_kevinSubacc', url.searchParams.get("subacc")); window.location.href = "/"; }    
if(url.searchParams.get("balcid")) { setCookie2('net_balrajClickId', url.searchParams.get("balcid")); window.location.href = "/"; }    
if(url.searchParams.get("advcid")) { setCookie2('net_advivifymediagroupClickId', url.searchParams.get("advcid")); window.location.href = "/"; }    
if(url.searchParams.get("lolcid") && url.searchParams.get("lolsubid")) { setCookie2('net_lolaLeadsClickId', url.searchParams.get("lolcid")+'|'+url.searchParams.get("lolsubid")); window.location.href = "/"; }    
if(url.searchParams.get("tmssub") && url.searchParams.get("tmsclick")) { setCookie2('net_tmsClickId', url.searchParams.get("tmssub")+'|'+url.searchParams.get("tmsclick")); window.location.href = "/"; }    
if(url.searchParams.get("kagcid")) { setCookie2('net_kayGarcia1ClickId', url.searchParams.get("kagcid")); window.location.href = "/"; }    
if(url.searchParams.get("guraffiliate_subid") && url.searchParams.get("gurclick") && url.searchParams.get("gursid")) { setCookie2('net_gurumediaClickId', url.searchParams.get("guraffiliate_subid")+'|'+url.searchParams.get("gurclick")+'|'+url.searchParams.get("gursid")); window.location.href = "/"; } 
if(url.searchParams.get("axesid") && url.searchParams.get("axecid")) { setCookie2('net_afiliaxeId', url.searchParams.get("gaxesid")+'|'+url.searchParams.get("axecid")); window.location.href = "/order/order-now.html"; } 
if(url.searchParams.get("cnv_id")) { setCookie2('net_robomopId', url.searchParams.get("cnv_id")); window.location.href = "/"; } 
if(url.searchParams.get("ab4alltid")) { setCookie2('net_ab4alltId', url.searchParams.get("ab4alltid")); window.location.href = "/"; } 
if(url.searchParams.get("bpepi")) { setCookie2('net_bpepi', url.searchParams.get("bpepi")); window.location.href = "/"; } 
