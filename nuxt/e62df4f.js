(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("0e451cc6",content,!0,{sourceMap:!1})},173:function(t,e,n){var content=n(183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("238e056b",content,!0,{sourceMap:!1})},174:function(t,e,n){var content=n(185);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("9095fe02",content,!0,{sourceMap:!1})},177:function(t,e,n){"use strict";var o=n(5),r=n(23),c=n(24),l=n(120),d=n(63),h=n(8),f=n(49).f,m=n(50).f,v=n(10).f,_=n(178).trim,w="Number",y=o.Number,C=y,x=y.prototype,k=c(n(83)(x))==w,S="trim"in String.prototype,E=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=S?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,h=l.length;i<h;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(k?h((function(){x.valueOf.call(n)})):c(n)!=w)?l(new C(E(e)),n,y):E(e)};for(var I,T=n(7)?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;T.length>A;A++)r(C,I=T[A])&&!r(y,I)&&v(y,I,m(C,I));y.prototype=x,x.constructor=y,n(12)(o,w,y)}},178:function(t,e,n){var o=n(4),r=n(29),c=n(8),l=n(179),d="["+l+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,n){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),h=r[t]=d?e(v):l[t];n&&(r[n]=h),o(o.P+o.F*d,"String",r)},v=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},179:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},180:function(t,e,n){"use strict";n(172)},181:function(t,e,n){var o=n(35)(!1);o.push([t.i,".countdown-section[data-v-919f3f04]{display:flex;justify-content:space-between;margin:0 auto}.countdown-section .countdown-item[data-v-919f3f04]{display:flex;flex-direction:column;width:134px;padding:1.75rem 0;border-radius:6px;background-color:hsla(0,0%,100%,.1);margin:0 .75rem}@media (max-width:700px){.countdown-section .countdown-item[data-v-919f3f04]{width:80px;padding:.5rem 0;margin:0 .5rem}}.countdown-section .countdown-value[data-v-919f3f04]{font-size:70px;text-align:center;padding:0;font-weight:500}@media (max-width:700px){.countdown-section .countdown-value[data-v-919f3f04]{font-size:48px}}.countdown-section .small-text[data-v-919f3f04]{font-size:16px;text-align:center;font-weight:300}@media (max-width:700px){.countdown-section .small-text[data-v-919f3f04]{font-size:14px}}",""]),t.exports=o},182:function(t,e,n){"use strict";n(173)},183:function(t,e,n){var o=n(35)(!1);o.push([t.i,".faq-item[data-v-d07de2ca]{background-color:hsla(0,0%,100%,.1);padding:1rem;border-radius:4px}.short-answer[data-v-d07de2ca]{margin-bottom:1rem;font-weight:500}.answer[data-v-d07de2ca]{font-weight:300}",""]),t.exports=o},184:function(t,e,n){"use strict";n(174)},185:function(t,e,n){var o=n(35)(!1);o.push([t.i,".index-page[data-v-69b05c98]{padding-top:2rem}.index-page .countdown-section[data-v-69b05c98]{margin-bottom:2rem}",""]),t.exports=o},186:function(t,e,n){"use strict";n.r(e);n(177);var o={name:"CountdownSection",props:{deadline:{type:Number,default:0}},data:function(){return{days:void 0,hours:void 0,minutes:void 0,seconds:void 0}},watch:{deadline:{handler:function(){this.seconds=Math.floor(this.deadline/1e3%60),this.minutes=Math.floor(this.deadline/1e3/60%60),this.hours=Math.floor(this.deadline/36e5%24),this.days=Math.floor(this.deadline/864e5)},immediate:!0}},mounted:function(){}},r=(n(180),n(18)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown-section"},[n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(t.days))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Days")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.hours).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Hours")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.minutes).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Minutes")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.seconds).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Seconds")])])])}),[],!1,null,"919f3f04",null).exports,l=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"mission"}},[n("h3",[t._v("\n    Our Mission\n  ")]),t._v(" "),n("p",[t._v("\n    We aim to making our world a happier place. We believe that good things happen when people act together with\n    the best intentions and a thorough plan."),n("br"),t._v("\n    We want to build a community of ordinary people like ourselves to make money. Yes, it's risky.\n    Yes, we all must act fast. And, yes, we play fair: we are transparent, so all the community knows what and when we do.\n  ")])])}],!1,null,null,null).exports,d=(n(182),Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section faq-section",attrs:{id:"faq"}},[n("h3",[t._v("\n      FAQ\n    ")]),t._v(" "),n("h4",{staticStyle:{"align-self":"center"}},[t._v("Coming soon")])])}],!1,null,"d07de2ca",null).exports),h=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"about"}},[n("h3",[t._v("\n    About Us\n  ")]),t._v(" "),n("p",[t._v("\n    Our group was created in early 2020, with the goal of creating an awesome\n    community, were everyone can discuss cryptocurrency and master the art of\n    crypto trading, no matter how much experience you have (or don’t have).\n    We have an experienced team, some of our members are in the crypto business\n    since 2013. We provide pump signals based on our awesome crypto AI software\n    and take care of the complicated part and look for good entry & exit points.\n  ")]),t._v(" "),n("p",[t._v("\n    We provide excellent Crypto Pump Signals + CryptoCurrency Education.\n    All of our results can be verified in our Discord channel. Our group is all\n    about those early signals, earning money, and celebrating our success at\n    the Bahamas. We offer Trade Notifications, Education and Experienced Guidance.\n  ")])])}],!1,null,null,null).exports,f=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"manifesto"}},[n("h3",[t._v("\n    Manifesto\n  ")]),t._v(" "),n("p",[t._v("\n    We are a bunch of software developers and back in the days, we didn't give a crap about what they do with the financial markets. Bitcoin has changed that. It was made by IT nerds for IT geeks.\n  ")]),t._v(" "),n("p",[t._v("\n    So we became fans of crypto and were like 'Ok, we need to learn a few things about trading and stuff'. And so we did.\n  ")]),t._v(" "),n("p",[t._v("\n    You see, there is a basic law of economy. If something is in demand, the price goes up. And once it's not or if there is too much of it produced, the price falls. This is ok, this is a normal way how things work, right?\n  ")]),t._v(" "),n("p",[t._v("\n    Say, you have some money and start buying. Nothing happens, most likely you won't affect the price. And if you have a lot of money, you may buy different coins or stocks and see, how the price will change. Some will fail you, some not. It's a straight investment.\n  ")]),t._v(" "),n("p",[t._v("\n    But one day, we spotted multiple roller-coasters in crypto. We looked at what the hell was going on and realized that there are lots of scumbags who came for bitcoin and other coins.\n  ")]),t._v(" "),n("p",[t._v('\n    What they do. They build community by promising 3000% profits, VIP signals, 100% guarantees, and all that crap. They have a lot of money and they want to get more right away. What they actually do is called "pump and dump". But they buy before the pump and sell when you start buying. Basically, they lure people in to rob them.\n  ')]),t._v(" "),n("p",[t._v("\n    We see how they do that. We know how they do that. And it works because ordinary people want to invest but don't know tech. Those scumbags even create fake crypto stock exchanges. So for ordinary people, it's like swimming in the muddy and unknown waters. This has to stop.\n  ")]),t._v(" "),n("p",[t._v("\n    We created a few algorithms to:\n    "),n("ul",[n("li",[t._v("\n        Analyze the market to spot interesting cryptocurrencies. It monitors orders and price movements and creates a list of potentially profitable cryptocurrencies.\n      ")]),t._v(" "),n("li",[t._v("\n        Choose one of the suggested cryptocurrencies. This one is based on a random number generated from the text we see in the community chat. No way one can trick it.\n      ")])])]),t._v(" "),n("p",[t._v("\n    And we put it all out on "),n("strong",[t._v("GitHub")]),t._v("* to be transparent, unlike those scumbags.\n  ")]),t._v(" "),n("p",{staticClass:"is-small"},[t._v("\n    * For those of you who are not software devs, this means other software devs can hop in and look into the code and check it."),n("br"),t._v("\n    * For software bros: if you check it and find anything odd, throw a tomato at us and let's fix it together.\n  ")])])}],!1,null,null,null).exports,m={name:"ContactSection",props:{discord:{type:String,default:""},telegram:{type:String,default:""}}},v={name:"IndexPage",components:{CountdownSection:c,MissionSection:l,FAQSection:d,AboutSection:h,ManifestoSection:f,ContactSection:Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section contact-section",attrs:{id:"contact"}},[n("h3",[t._v("\n    Contact Us\n  ")]),t._v(" "),n("p",[t._v("We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel")]),t._v(" "),n("p",{staticClass:"align-center"},[n("a",{staticClass:"button",attrs:{href:t.discord,target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/discord.svg",alt:"discrod"}}),t._v("\n      Discord\n    ")]),t._v(" "),t.telegram?n("a",{staticClass:"button",attrs:{href:t.telegram,target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/telegram.svg",alt:"Telegram"}}),t._v("\n      Telegram\n    ")]):t._e()])])}),[],!1,null,null,null).exports},data:function(){return{date:new Date("2021-06-09"),deadline:void 0,startTime:Date.now(),discordChannel:"https://discord.gg/zvm7YKP3kJ",telegramChannel:""}},mounted:function(){this.updateDate()},methods:{updateDate:function(){var t=this;this.deadline=this.date.getTime()-Date.now(),setTimeout((function(){t.updateDate()}),1e3)}}},_=(n(184),Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page page-content"},[n("div",{staticClass:"section"},[t._m(0),t._v(" "),n("CountdownSection",{attrs:{deadline:t.deadline}}),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"align-center"},[t._v("\n      Join us on Discord and Telegram\n    ")]),t._v(" "),n("p",{staticClass:"align-center"},[n("a",{staticClass:"button",attrs:{href:t.discordChannel,target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/discord.svg",alt:"discrod"}}),t._v("\n        Discord\n      ")]),t._v(" "),t.telegramChannel?n("a",{staticClass:"button",attrs:{href:t.telegramChannel,target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/telegram.svg",alt:"Telegram"}}),t._v("\n        Telegram\n      ")]):t._e()])],1),t._v(" "),n("MissionSection"),t._v(" "),n("FAQSection"),t._v(" "),n("ManifestoSection"),t._v(" "),n("AboutSection"),t._v(" "),n("ContactSection",{attrs:{discord:t.discordChannel,telegram:t.telegramChannel}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("\n      Happy Crypto Friends"),n("br"),t._v(" "),n("span",{staticClass:"is-small"},[t._v("Honest Pump and Dump")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",[t._v("\n      June 9th - 8pm GMT - 4pm EST "),n("br"),t._v("\n      Exchange: Hotbit - pair USDT "),n("br"),t._v("\n      Pump Target: 100% - 300%\n    ")])}],!1,null,"69b05c98",null));e.default=_.exports}}]);