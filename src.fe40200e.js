parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
var e=function(){document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})})})},t=function(){var e=document.getElementById("menu");document.addEventListener("scroll",function(){window.pageYOffset>0?e.classList.add("menu_shadow"):e.classList.remove("menu_shadow")})},n=function(){var e=Date.UTC(1998,5,8),t=Date.now()-e,n=Math.floor(t/315576e5);document.getElementById("age").innerText=n},o=function(){e(),t(),n()};document.addEventListener("DOMContentLoaded",o);
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.fe40200e.map