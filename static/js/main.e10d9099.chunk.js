(this.webpackJsonpdecider=this.webpackJsonpdecider||[]).push([[0],{27:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(1),c=s.n(a),r=(s(27),s(22)),n=s.n(r),l=s(24),d=s(3),o=s(7),h=s(8),u=s(11),j=s(10),m=function(e){return Object(i.jsx)("div",{className:"ui container",children:Object(i.jsxs)("div",{className:"ui large secondary pointing menu "+e.color,children:[Object(i.jsx)("a",{href:"/decider/#/",className:"landing"===e.active?"toc item active":"toc item",children:Object(i.jsx)("i",{className:"home icon"})}),Object(i.jsx)("a",{href:"/decider/#/decision",className:"decision"===e.active?"item active":"item",children:"Decision Maker"}),Object(i.jsx)("a",{href:"/decider/#/lucky",className:"lucky"===e.active?"item active":"item",children:"Lucky Meter"}),Object(i.jsx)("a",{href:"/",className:"prophecy"===e.active?"item active":"item",children:"Prophetic Question (coming soon!)"}),Object(i.jsx)("div",{className:"right item",children:Object(i.jsx)("a",{href:"/",className:"ui button",children:"About Me!"})})]})})},b=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={deciding:!1},i}return Object(h.a)(s,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"pusher",style:{backgroundColor:"#E6DCDB",height:"100vh"},children:Object(i.jsxs)("div",{className:"ui vertical masthead center aligned segment",style:{borderBottom:"#fff"},children:[Object(i.jsx)(m,{active:"landing",color:""}),Object(i.jsxs)("div",{className:"ui text container",children:[Object(i.jsx)("img",{src:"/decider/images/decider.svg",alt:"Clover",style:{width:"150px",marginTop:"13vh"}}),Object(i.jsx)("h1",{className:"ui header",style:{fontSize:"3em",marginTop:"0"},children:"Decider App with React Js"}),Object(i.jsxs)("h3",{className:"ui header",children:["Tired of making decision by your own? Let us decide it for you!",Object(i.jsx)("br",{}),"Do you want to know if you are lucky or not? Let us calculate it for you!",Object(i.jsx)("br",{}),"Do you have any question? Let us answer it for you!"]}),Object(i.jsx)("a",{href:"/decider/#/decision",children:Object(i.jsx)("button",{className:"ui huge button black",children:"Decision Maker"})}),Object(i.jsx)("button",{className:"ui huge button purple",children:"Lucky Meter"}),Object(i.jsx)("a",{href:"/decider/#/lucky"}),Object(i.jsx)("a",{href:"/decider/#/",children:Object(i.jsxs)("button",{className:"ui huge button disabeled",style:{position:"relative"},children:["Prophetic Question ",Object(i.jsx)("div",{style:{position:"absolute",textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:"0.5em",left:0,right:0,marginTop:"-5px"},children:"under construction"})]})}),Object(i.jsx)("h4",{style:{marginTop:"5vh"},className:"ui header",children:"By: Ihsan Fajar Ramadhan"})]})]})})}}]),s}(c.a.Component),g=s(12),v=s.n(g),x=s(15),O=s(9),p=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},i.state={deciding:!1,decided:!1,decision:"Yes",meter:0,color:""},i.Decide=i.Decide.bind(Object(O.a)(i)),i}return Object(h.a)(s,[{key:"Decide",value:function(){var e=Object(x.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({decided:!1}),t=0;case 2:if(!(t<101)){e.next=9;break}return this.setState({meter:t}),e.next=6,this.sleep(.5*t);case 6:t++,e.next=2;break;case 9:1===Math.round(Math.random())?this.setState({deciding:!1,decided:!0,decision:"Yes",color:"#D9F5BE"}):this.setState({deciding:!1,decided:!0,decision:"No",color:"#F8D9D5"});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.decided?Object(i.jsx)("div",{className:"pusher",style:{backgroundColor:this.state.color,height:"100vh"},children:Object(i.jsxs)("div",{className:"ui vertical masthead center aligned segment",children:[Object(i.jsx)(m,{active:"decision",color:""}),Object(i.jsxs)("div",{className:"ui text container",children:[Object(i.jsx)("h3",{className:"ui header",style:{marginTop:"8vh"},children:"Decision Maker!"}),Object(i.jsx)("img",{src:"/decider/images/decision.svg",alt:"Clover",style:"Yes"===this.state.decision?{width:"150px",transition:"all 0.5s",filter:"hue-rotate(40deg)"}:{width:"150px",transition:"all 0.5s",filter:"hue-rotate(300deg)"}}),Object(i.jsx)("h1",{className:"ui header",style:{fontSize:"3em",marginTop:"0"},children:"Decide Your Fate Here!"}),Object(i.jsx)("div",{onClick:this.state.deciding?function(e){e.preventDefault()}:this.Decide,className:"ui huge button "+(this.state.deciding?"disabeled":"primary"),children:this.state.deciding?"Calculating...":"Calculate"}),Object(i.jsx)("div",{className:"ui progress "+(0===this.state.meter?"grey":this.state.meter<30?"red":this.state.meter<60?"yellow":"Yes"===this.state.decision?"green":"red"),children:Object(i.jsx)("div",{className:"bar",style:0===this.state.meter?{width:"100%",textAlign:"center"}:{width:Math.floor(this.state.meter)+"%"},children:Object(i.jsx)("div",{className:"progress",style:0===this.state.meter?{right:"",left:"43%"}:{},children:0===this.state.meter?"Press Calclulate!":this.state.meter+"%"})})}),Object(i.jsxs)("div",{className:"ui huge statistic ",children:[Object(i.jsx)("div",{className:"label",children:"You should choose"}),Object(i.jsx)("div",{className:"value",children:this.state.decision})]})]})]})}):Object(i.jsx)("div",{className:"pusher",children:Object(i.jsxs)("div",{className:"ui vertical masthead center aligned segment",style:{borderBottom:"#fff"},children:[Object(i.jsx)(m,{active:"decision",color:""}),Object(i.jsxs)("div",{className:"ui text container",children:[Object(i.jsx)("h3",{className:"ui header",style:{marginTop:"8vh"},children:"Decision Maker"}),Object(i.jsx)("img",{src:"/decider/images/decision.svg",className:"ui loading icon",alt:"Clover",style:{width:"150px",transition:"all 0.5s",filter:"grayscale(100)"}}),Object(i.jsx)("h1",{className:"ui header",style:{fontSize:"3em",marginTop:"0"},children:"Decide Your Fate Here!"}),Object(i.jsx)("div",{onClick:this.state.deciding?function(e){e.preventDefault()}:this.Decide,className:"ui huge button "+(this.state.deciding?"disabeled":"primary"),children:this.state.deciding?"Calculating...":"Calculate"}),Object(i.jsx)("div",{style:{margin:"1em 0 2.5em"},className:"ui progress "+(0===this.state.meter?"grey":this.state.meter<30?"red":this.state.meter<60?"yellow":"green"),children:Object(i.jsx)("div",{className:"bar",style:0===this.state.meter?{width:"100%",textAlign:"center"}:{width:Math.floor(this.state.meter)+"%"},children:Object(i.jsx)("div",{className:"progress",style:0===this.state.meter?{right:"",left:"43%"}:{},children:0===this.state.meter?"Press Calclulate!":this.state.meter+"%"})})}),Object(i.jsx)("h4",{style:{marginTop:"10vh"},className:"ui header",children:"By: Ihsan Fajar Ramadhan"})]})]})})}}]),s}(c.a.Component),y=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},i.state={calculating:!1,calculated:!1,meter:0,color:"red"},i.calculate=i.calculate.bind(Object(O.a)(i)),i}return Object(h.a)(s,[{key:"calculate",value:function(){var e=Object(x.a)(v.a.mark((function e(){var t,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({calculating:!0}),this.setState({calculated:!0}),t=Math.floor(100*Math.random()),s=0;case 4:if(!(s<t)){e.next=12;break}return this.setState({meter:s}),this.state.meter<60?(this.setState({color:"yellow"}),this.state.meter<30&&this.setState({color:"red"})):this.setState({color:"green"}),e.next=9,this.sleep(s);case 9:s++,e.next=4;break;case 12:this.setState({calculating:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.calculated?Object(i.jsx)("div",{className:"pusher",backgroundColor:"#1b1c1d",children:Object(i.jsxs)("div",{className:"ui inverted vertical masthead center aligned segment",children:[Object(i.jsx)(m,{active:"lucky",color:"inverted"}),Object(i.jsxs)("div",{className:"ui text container",children:[Object(i.jsx)("img",{src:"/decider/images/luck.svg",alt:"Clover",style:{marginTop:"1.1vh",filter:"brightness(1.9)"}}),Object(i.jsx)("h1",{className:"ui inverted header",style:{fontSize:"3em",marginTop:"0"},children:"Test Your Luck Here!"}),Object(i.jsx)("div",{onClick:this.state.calculating?function(e){e.preventDefault()}:this.calculate,className:"ui huge button "+(this.state.calculating?"disabeled":"primary"),children:this.state.calculating?"Calculating...":"Calculate"}),Object(i.jsx)("div",{className:"ui progress "+this.state.color,children:Object(i.jsx)("div",{className:"bar",style:{width:Math.floor(this.state.meter)+"%"},children:Object(i.jsxs)("div",{className:"progress",children:[this.state.meter,"%"]})})}),Object(i.jsxs)("div",{className:"ui huge statistic "+this.state.color,style:{marginBottom:"10.9vh"},children:[Object(i.jsx)("div",{className:"label",style:{color:"white"},children:"You are"}),Object(i.jsxs)("div",{className:"value",children:[this.state.meter,"%"]}),Object(i.jsx)("div",{className:"label",style:{color:"white"},children:this.state.meter<10?"Very Very Unlucky (Becareful!)":this.state.meter<30?"Very Unlucky":this.state.meter<60?"Unlucky":this.state.meter>80?"Very Lucky":"Lucky"})]})]})]})}):Object(i.jsx)("div",{className:"pusher",children:Object(i.jsxs)("div",{className:"ui inverted vertical masthead center aligned segment",children:[Object(i.jsx)(m,{active:"lucky",color:"inverted"}),Object(i.jsxs)("div",{className:"ui text container",children:[Object(i.jsx)("img",{src:"/decider/images/luck.svg",alt:"Clover",style:{marginTop:"1.1vh",filter:"brightness(1.9)"}}),Object(i.jsx)("h1",{className:"ui inverted header",style:{fontSize:"3em",marginTop:"0"},children:"Test Your Luck Here!"}),Object(i.jsx)("div",{onClick:this.state.calculating?function(e){e.preventDefault()}:this.calculate,className:"ui huge button "+(this.state.calculating?"disabeled":"primary"),children:this.state.calculating?"Calculating...":"Calculate"}),Object(i.jsx)("div",{className:"ui progress",style:{margin:"1em 0 38.4vh"},children:Object(i.jsx)("div",{className:"bar",style:{width:"100%",backgroundColor:"#e8e8e8",textAlign:"center",paddingTop:"0.15em"},children:Object(i.jsx)("div",{className:"ui statistic",children:Object(i.jsx)("p",{className:"label",children:"Press Calclulate!"})})})}),Object(i.jsx)("h4",{style:{marginTop:"5vh"},className:"ui header inverted",children:"By: Ihsan Fajar Ramadhan"})]})]})})}}]),s}(c.a.Component),f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:"Prophecy"})})},N=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{path:"/",exact:!0,component:b}),Object(i.jsx)(d.a,{path:"/decision",component:p}),Object(i.jsx)(d.a,{path:"/lucky",component:y}),Object(i.jsx)(d.a,{path:"/prophecy",component:f})]})})};n.a.render(Object(i.jsx)(N,{}),document.querySelector("#root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e10d9099.chunk.js.map