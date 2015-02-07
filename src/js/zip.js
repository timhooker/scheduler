/*
 * $.zipLookup v0.1
 *   - by Ari Asulin (ari.asulin at gmail.com)
 *   - jQuery plugin to dynamically fill in City/State Form Fields using an ajax Zipcode lookup
 *   - Apache License, Version 2.0
 *
 */
(function(){var e=false;var t=2;var n="appt-edit-zip";var r="appt-edit-city";var i="appt-edit-state";var s="appt-edit-state-short";var o="zip-lookup-message";var u=function(e,t){if(e.nodeName.toLowerCase()==="select"){var n=e.getElementsByTagName("option");for(var r=0;r<n.length;r++){if(n[r].value===t||n[r].innerHTML===t){e.selectedIndex=r;return}}}if(e.nodeName.toLowerCase()==="input"){e.setAttribute("value",t)}else{e.setAttribute("data-value",t)}};var a=function(e,t){return(new RegExp("(^|\\s)"+t+"(\\s|$)","i")).test(e.className)};var f=function(e,t){if(!a(e,t))e.className+=(e.className?" ":"")+t};var l=function(e,t){if(a(e,t))e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(\\s|$)","i"),"")};var c=function(e,t){var n;if(document.createEvent){n=document.createEvent("HTMLEvents");n.initEvent(t,true,true)}else{n=document.createEventObject()}n.eventName=t;if(document.createEvent){e.dispatchEvent(n)}else{e.fireEvent("on"+t,n)}return n};var h=function(e,t){if(e===document)e=document.body;for(var n=0;n<e.children.length;n++){var r=e.children[n];if(t)if(t(r)===true)return false;if(h(r,t)===false)return false}return true};var p=function(e,t){if(e===document.body||e===document)return false;var n=e.parentNode;if(t)if(t(n)===true)return false;return p(n,t)};var d=function(n,r){var i=this;this.country=r||"us";var s=document.getElementsByTagName("head")[0];var o="zip-lookup/db";h(s,function(t){if(t.nodeName.toUpperCase()==="SCRIPT"){if(t.getAttribute("src")&&t.getAttribute("src").match(/zip-lookup(?:\.min)?\.js$/i)){o=t.getAttribute("src").replace(/zip-lookup(?:\.min)?\.js$/i,"db");if(e)console.log("Library path set: "+o);s=t.parentNode;return true}}});var u=function(e,t,n){};this.onSuccess=function(e){u=e;return i};var a=function(e){};this.onError=function(e){a=e;return i};var f=n.substring(0,t);var l=n.substring(t);var c=o+"/"+this.country+"/"+f+".js";var p=document.createElement("script");p.src=c;p.type="text/javascript";p.async=true;s.appendChild(p);var d=setTimeout(function(){a("Search Timed out")},3e3);window["__zl"]=function(e){clearTimeout(d);if(e===undefined||e[0]===undefined)return a("Zipcode Not Found in DB");var t=e[0][l];if(e[1][t]===undefined)return a("Zipcode City Not Found in DB");var n=e[1][t].split("|");var r=n[0];if(!n[1])n[1]=0;var i=n[1];var s=e[2][i].split("|");var o=s[1];var f=s[0];u(r,o,f)};return this};var v=function(e){switch(e.type){case"blur":case"change":if(a(e.target,n)){var t=e.target.value;var v=typeof e.target.lastVal==="undefined"?null:e.target.lastVal;if(t&&t!==v){e.target.lastVal=t;c(e.target,"zip-lookup")}}break;case"zip-lookup":var m=e.target?e.target.value:null;var g=e.target.form||document;p(e.target,function(e){if(e.nodeName.toLowerCase()==="fieldset"||e===g){g=e;return true}});h(g,function(e){if(a(e,o)){e.innerHTML="Searching...";l(e,"error")}});d(m).onError(function(t){h(g,function(e){if(a(e,o)){e.innerHTML=t;f(e,"error")}});e.target.setAttribute("zip-lookup-error-message",t);c(e.target,"zip-lookup-error")}).onSuccess(function(t,n,f){h(g,function(e){if(a(e,r))u(e,t);if(a(e,i)){u(e,n)}if(a(e,s))u(e,f);if(a(e,o)){e.innerHTML="Result found - "+t+", "+f;l(e,"error")}});e.target.setAttribute("data-city-name",t);e.target.setAttribute("data-state-name",n);e.target.setAttribute("data-state-short-name",f);c(e.target,"zip-lookup-found")});break;default:break}};document.addEventListener("blur",v);document.addEventListener("change",v);document.addEventListener("zip-lookup",v)})()
