(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r,o,a=n(1),c=n(6),u=n.n(c),i=(n(13),n(8)),s=n(7);!function(t){t[t.zero=0]="zero",t[t.one=1]="one",t[t.two=2]="two",t[t.three=3]="three",t[t.four=4]="four",t[t.five=5]="five",t[t.six=6]="six",t[t.seven=7]="seven",t[t.eight=8]="eight",t[t.bomb=9]="bomb"}(r||(r={})),function(t){t[t.left=0]="left",t[t.middle=1]="middle",t[t.right=2]="right"}(o||(o={}));var l=n(4),f=function(t,e){var n=t.row,r=t.col,o=e.row,a=e.col;return!!([o-1,o+1].includes(n)&&[a-1,a+1].includes(r)||o===n&&[a-1,a+1].includes(r)||a===r&&[o-1,o+1].includes(n))},v=function(t){for(var e=function(t){for(var e=t.row,n=t.col,r=[],o=function(t){return Math.random()*t<<0},a=function(a){var u={row:o(7),col:o(7)};r.some((function(t){return t.row===u.row&&t.col===u.col}))||f(u,t)||u.row===e&&u.col===n?--a:r.push(u),c=a},c=0;c<10;c++)a(c);return r}(t),n=[],o=function(o){for(var a=[],c=function(n){var c=e.some((function(t){return t.row===o&&t.col===n})),u={hasBomb:c,state:{flagged:!1,visible:t.row===o&&t.col===n,value:c?r.bomb:r.zero}};a.push(u)},u=0;u<7;u++)c(u);n.push(a)},a=0;a<7;a++)o(a);return m(n,t)},b=function(t,e){var n=e.row,o=e.col,a=t[n][o];return a.state.value=a.hasBomb?r.bomb:function(t,e){var n=0;return t.forEach((function(r,o){r.forEach((function(r,a){var c=t[o][a];f({row:o,col:a},e)&&c.hasBomb&&n++}))})),n}(t,e),a.state.visible=!0,a.state.value===r.zero&&(t=m(t,e)),Object(l.a)(t)},m=function(t,e){var n=e.row,r=e.col,o=t[n][r].state.value;return 0!==o&&o!==function(t,e){var n=0;return t.forEach((function(r,o){r.forEach((function(r,a){f({row:o,col:a},e)&&t[o][a].state.flagged&&n++}))})),n}(t,e)||t.forEach((function(n,r){n.forEach((function(n,o){var a=t[r][o];!f({row:r,col:o},e)||a.state.visible||a.state.flagged||(t=b(t,{row:r,col:o}))}))})),Object(l.a)(t)},d=n(0);function g(){return Object(d.jsx)("img",{className:"bomb",src:"bomb.svg",alt:"bomb"})}function h(t){var e=t.className,n=t.onClick,r=t.onAuxClick,o=t.content;return Object(d.jsx)("button",{className:e,onClick:n,onAuxClick:r,children:o})}function w(){return Object(d.jsx)("img",{className:"flag",src:"flag.svg",alt:"flag"})}var j=function(){var t=Object(a.useState)(function(){for(var t=[],e=0;e<7;e++){for(var n=[],o=0;o<7;o++){var a={hasBomb:!1,state:{flagged:!1,visible:!1,value:r.zero}};n.push(a)}t.push(n)}return t}()),e=Object(s.a)(t,2),n=e[0],c=e[1],u=Object(a.useRef)(!0);document.addEventListener("contextmenu",(function(t){var e=t.target;"BODY"!==(null===e||void 0===e?void 0:e.tagName)&&t.preventDefault()}));var f=function(t,e){var r=e.row,a=e.col,i=n[r][a].state,s=i.visible,f=i.flagged;if(u.current)return u.current=!1,c(v(e));t!==o.left||s||f||c(b(n,e)),t===o.middle&&s&&c(m(n,e)),t!==o.right||s||c(function(t,e){var n=e.row,r=e.col,o=t[n][r];return o.state.flagged=!o.state.flagged,Object(l.a)(t)}(n,e))};Object(a.useEffect)((function(){return function(t){return t.flat().filter((function(t){return t.state.visible})).some((function(t){return t.hasBomb}))}(n)?alert("Game Over"):function(t){return t.flat().every((function(t){return t.state.visible&&!t.hasBomb||t.state.flagged&&t.hasBomb}))}(n)?alert("You won!"):void 0}));var j=function(t){var e=t.state,n=e.visible,r=e.flagged,o=e.value;return r?Object(d.jsx)(w,{}):n&&o?t.hasBomb?Object(d.jsx)(g,{}):o:null},O=n.map((function(t,e){var o=t.map((function(t,o){var a=n[e][o],c={className:a.state.visible?"square ".concat(r[a.state.value]):"square",onClick:function(t){return f(t.button,{row:e,col:o})},onAuxClick:function(t){return f(t.button,{row:e,col:o})},content:j(a)};return Object(d.jsx)(h,Object(i.a)({},c),"".concat(e,"-").concat(o))}));return Object(d.jsx)("div",{className:"row",children:o},e)}));return Object(d.jsx)("div",{className:"board",children:O})};u.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a760048b.chunk.js.map