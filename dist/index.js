"use strict";var t=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var o=Object.prototype.hasOwnProperty;var y=(e,n)=>{for(var i in n)t(e,i,{get:n[i],enumerable:!0})},p=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of l(n))!o.call(e,u)&&u!==i&&t(e,u,{get:()=>n[u],enumerable:!(r=d(n,u))||r.enumerable});return e};var c=e=>p(t({},"__esModule",{value:!0}),e);var T={};y(T,{undefinedifyNull:()=>s,undefinedifyNullProperties:()=>f});module.exports=c(T);function s(e){if(e!=null)return e}function f(e){if(e!=null)return Array.isArray(e)?e.map(f):typeof e=="object"?Object.fromEntries(Object.entries(e).map(([n,i])=>[n,f(i)])):e}0&&(module.exports={undefinedifyNull,undefinedifyNullProperties});
