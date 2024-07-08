import{k as m,B as l,J as i,O as s,a3 as f,F as w,Y as $,E as a,D as r,Q as d,P as k,u as c,b as B,a4 as F,a5 as C,R as M,U as j}from"./C9uP6dDW.js";import{_ as h}from"./Dmiq_beL.js";import{t as A,d as S,_ as g,e as z}from"./BYzGgRwF.js";import"./Ci8HYbfI.js";const L=s("div",{class:"tham-box"},[s("div",{class:"tham-inner rounded-none bg-white before:rounded-none after:rounded-none"})],-1),I=[L],O=m({__name:"ButtonBurger",props:{isActive:{type:Boolean}},setup(t){return(e,o)=>(l(),i("button",null,[s("div",{class:f([{"tham-active":e.isActive},"tham tham-e-squeeze tham-w-6"])},I,2)]))}});function v(t){var e,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=v(t[e]))&&(n&&(n+=" "),n+=o);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function R(){for(var t,e,o=0,n="";o<arguments.length;)(t=arguments[o++])&&(e=v(t))&&(n&&(n+=" "),n+=e);return n}const y=(...t)=>A(R(t)),U={class:"flex flex-1 flex-col lg:flex-row lg:justify-center lg:gap-[30px] 2xl:gap-[50px]"},E=m({__name:"MainMenu",setup(t){const e=S(),o=[{label:"home",link:"/"},{label:"about us",link:"/"},{label:"process",link:"/"}];return(n,_)=>{const x=h;return l(),i("ul",U,[(l(),i(w,null,$(o,(p,u)=>s("li",{key:u},[a(x,{class:f(("cn"in n?n.cn:c(y))("button_opacity block border border-white px-[12px] py-[15px] lg:border-none lg:bg-transparent lg:p-0 lg:text-[19px] 2xl:text-[21px]",{"bg-[#7F2302]":c(e).path===p.link})),to:p.link},{default:r(()=>[d(k(p.label),1)]),_:2},1032,["class","to"])])),64))])}}}),N={class:"container"},D={class:"relative flex items-center justify-between"},H=s("h1",null,"ELRITECH",-1),V=s("span",null,"//",-1),P={class:"animate-fade-up animate-fade-down fixed left-0 top-0 z-20 w-full bg-[#1F1F1F] px-[10px] pb-[192px] pt-[100px] lg:hidden"},T=m({__name:"Header",setup(t){const e=B(!1),o=n=>{e.value=n};return(n,_)=>{const x=O,p=h,u=E;return l(),i("header",{class:f(("cn"in n?n.cn:c(y))("flex h-header-sm items-center bg-[#1F1F1F] text-white lg:h-header-lg",{"sticky top-0 z-40":c(e)}))},[s("div",N,[s("div",D,[a(x,{isActive:c(e),class:"relative z-30 lg:hidden",onClick:_[0]||(_[0]=it=>o(!c(e)))},null,8,["isActive"]),a(p,{to:"/",class:"button_opacity relative z-30 flex items-end text-[16px] md:text-[20px] lg:absolute lg:left-0 lg:top-[50%] lg:translate-y-[-50%] xl:text-[25px] 3xl:text-[33px]"},{default:r(()=>[H,V]),_:1}),a(u,{class:"hidden lg:flex"}),F(s("div",P,[a(u,{class:"gap-[15px]"})],512),[[C,c(e)]])])])],2)}}}),q={};function G(t,e){const o=z;return l(),i("div",null,[a(o)])}const J=g(q,[["render",G]]),Q={},b=t=>(M("data-v-4461d6c8"),t=t(),j(),t),Y={class:"bg_footer pb-[29px] pt-[25px] md:pb-[40px] md:pt-[35px] xl:pb-[65px] xl:pt-[55px] 3xl:pb-[85px] 3xl:pt-[68px]"},K={class:"container"},W={class:"flex flex-col"},X=b(()=>s("h5",{class:"mb-[31px] hidden text-[13px] font-medium uppercase text-white md:block"}," Our location: ",-1)),Z=b(()=>s("h5",{class:"max-w-[265px] text-[19px] font-medium leading-[130%] text-white md:max-w-[419px] md:text-[25px] xl:text-[32px] 3xl:text-[38px]"}," Saint Galicia, Ukraine Lviv district ",-1)),tt={class:"mt-[40px] items-center justify-between md:mt-[55px] md:flex md:items-center xl:mt-[65px] 3xl:mt-[77px]"},et={class:"text_primary flex list-inside list-disc gap-[6px] md:gap-[10px] xl:gap-[16px]"},nt={class:"list-none"},st=b(()=>s("div",{class:"text_primary mt-[41px] flex items-center justify-between font-medium md:mt-0 md:max-w-[35%] md:flex-1"},[s("p",null,"All Rights Reserved"),s("p",null,"© 2024")],-1));function ot(t,e){const o=h;return l(),i("footer",Y,[s("div",K,[s("div",W,[X,Z,s("div",tt,[s("ul",et,[s("li",nt,[a(o,{to:"#contacts",class:"button_opacity"},{default:r(()=>[d("Contacts")]),_:1})]),s("li",null,[a(o,{to:"#services",class:"button_opacity"},{default:r(()=>[d("Our Services")]),_:1})]),s("li",null,[a(o,{to:"#our_team",class:"button_opacity"},{default:r(()=>[d("Our team")]),_:1})]),s("li",null,[a(o,{to:"#our_projects",class:"button_opacity"},{default:r(()=>[d("Our projects")]),_:1})])]),st])])])])}const at=g(Q,[["render",ot],["__scopeId","data-v-4461d6c8"]]),ct={};function lt(t,e){const o=T,n=J,_=at;return l(),i("div",null,[a(o),a(n),a(_)])}const ut=g(ct,[["render",lt]]);export{ut as default};
