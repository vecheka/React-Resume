(this["webpackJsonpweb-resume"]=this["webpackJsonpweb-resume"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(16),s=n.n(i),c=(n(33),n(5)),o=n(6),l=n(8),d=n(7),j=n(58),b=n(57),p=(n(34),n(4)),m=n.n(p),h=n(9),u=n(14),x=n.p+"static/media/bg1.a80779a3.png",g=n.p+"static/media/bg2.c0ecdecd.png",O=n.p+"static/media/bg3.83a56225.png",f=n.p+"static/media/bg4.a30a7bcb.png",v=n.p+"static/media/bg6.b31d0eb5.png",y=n.p+"static/media/bg7.59db92e1.png",w=function(e){return{root:{textAlign:"center"},title:{fontFamily:"Pattaya",color:"#283671",fontSize:"5em",cursor:"pointer"}}},k=n(0),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setInterval(a.changeImage,a.timer);case 1:case"end":return e.stop()}}),e)}))),a.changeImage=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.state.imageNum+1>=a.images.length?a.setState({imageNum:0}):a.setState({imageNum:a.state.imageNum+1});case 2:case"end":return e.stop()}}),e)}))),a.state={imageNum:0},a.images=[x,g,O,f,v,y],a.timer=6e3,a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes,t=this.images[this.state.imageNum];return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)("div",{children:Object(k.jsx)("span",{className:e.title,onClick:function(){return window.location.reload()},children:" Vecheka Chhourn "})}),Object(k.jsx)("div",{style:{backgroundImage:"url(".concat(t,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100vw",height:"40vh",border:"none"}})]})}}]),n}(r.a.Component),S=Object(u.a)(w)(N),A=function(e){return{title:{fontFamily:"Pattaya",color:"#283671",fontSize:"3em",textAlign:"center",paddingBottom:"10px"},body:{fontFamily:"Montserrat",padding:"10px",wordWrap:"break-word",lineHeight:"1.5em"},sectionHeader:{textAlign:"left",fontSize:"2em",float:"left",margin:"16px 20px 20px 0"},italic:{fontStyle:"italic"},resume:{fontStyle:"italic",fontWeight:"bold",textDecoration:"none",cursor:"pointer"}}},C=n.p+"static/media/resume.c99eafee.pdf",I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:e.title,children:Object(k.jsx)("span",{children:" About "})}),Object(k.jsxs)(b.a,{container:!0,spacing:5,className:e.body,children:[Object(k.jsxs)(b.a,{item:!0,xs:6,children:[Object(k.jsx)("span",{className:e.sectionHeader,children:" Work. "}),"My name is Vecheka (say Ve-check-ah). I was born and raised in Cambodia, and moved to the US to pursue higher education back in 2015. My journey here has been full of obstacles and challenges but I learned, grew, and most importantly I enjoyed every bit of it. Like they say",Object(k.jsx)("span",{className:e.italic,children:' "Change is the only constant in life". '})," As an engineer, I enjoy solving hard problems and learning new technologies as well writing softwares that make people's lives easy. I have experienced with many different programmming languages, and I am also a quick learner, and love to get things done.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"I am currently working as a software engineer in a network team at Nordstrom. I write automations to help network engineers with automationg network devices across all Nordstrom's stores, and network tools for troubleshooting use on the networks. Check out ",Object(k.jsx)("a",{className:e.resume,href:C,target:"_blank",rel:"noreferrer",children:"my resume"})," to learn more about what I do."]}),Object(k.jsxs)(b.a,{item:!0,xs:6,children:[Object(k.jsx)("span",{className:e.sectionHeader,children:" Fun. "}),"I like to keep my brain active and continue to learn new things all the time but at the same time, I have to give my body the same attention. I enjoy going to the gym and going hiking around Washington with my friends during the Summer weekends. I am also a big road trip lover, I usually plan a big road trip around the US during the summer with a friend or by myself. The scenic around the US is one of the best in the world if not the best. I dislike the rain and Winter season.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})]}),Object(k.jsx)("div",{style:{borderBottom:"1px dotted"},children:" "})]})}}]),n}(r.a.Component),M=Object(u.a)(A)(I),P=function(e){return{title:{fontFamily:"Pattaya",color:"#283671",fontSize:"3em",textAlign:"center",paddingBottom:"10px"},body:{fontFamily:"Montserrat",padding:"10px",textAlign:"center"},date:{color:"#777",marginTop:"40px",fontSize:"13px"},description:{marginTop:"25px"},descriptionHeader:{fontWeight:"bold"}}},H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:e.title,children:Object(k.jsx)("span",{children:" Education "})}),Object(k.jsxs)(b.a,{container:!0,spacing:6,className:e.body,children:[Object(k.jsxs)(b.a,{item:!0,xs:6,children:[Object(k.jsx)("div",{children:" University of Washington Tacama "}),Object(k.jsx)("div",{className:e.date,children:" Sept 2017 - June 2019  "}),Object(k.jsxs)("div",{className:e.description,children:[Object(k.jsx)("span",{className:e.descriptionHeader,children:" GPA: "})," 3.65",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Favorite Classes: "})," Machine Learning & Algorithms",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Extra Curricular: "})," Represented the school in the International Collegiate Programming Contest. Also, participated in HackWA.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Honors: "})," Annual Dean's List",Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})]}),Object(k.jsxs)(b.a,{item:!0,xs:6,children:[Object(k.jsx)("div",{children:" South Seattle College "}),Object(k.jsx)("div",{className:e.date,children:" April 2015 - Dec 2016  "}),Object(k.jsxs)("div",{className:e.description,children:[Object(k.jsx)("span",{className:e.descriptionHeader,children:" GPA: "})," 3.80 ",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Favorite Classes: "})," Python & Java Programming ",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Extra Curricular: "})," Collaborated with a professor to implement a wifi sensor to collect and analyze wireless data using Raspberry Pi, and Python in order to improve wireless spots on campus.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:e.descriptionHeader,children:" Honors: "})," Annual Dean's List, Boeing Endowed Scholarships",Object(k.jsx)("br",{}),Object(k.jsx)("br",{})]})]})]}),Object(k.jsx)("div",{style:{borderBottom:"1px dotted"},children:" "})]})}}]),n}(r.a.Component),z=Object(u.a)(P)(H),F=n(20),D=n(26),T=n.n(D),W=n(27),B=n.n(W),L=function(e){return{title:{fontFamily:"Pattaya",color:"#283671",fontSize:"3em",textAlign:"center",paddingBottom:"10px"},body:{fontFamily:"Montserrat",padding:"10px",textAlign:"center"},starIcon:{color:"#283671"}}},J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a.stars={Java:5,Python:5,Reactjs:4,HTML:4,Nodejs:4,JavaScript:4,CSS:3,C:3,"MySQL/PSQL":3,Serverless:3},a.languages=Object.keys(a.stars),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:t.title,children:Object(k.jsx)("span",{children:" Skills "})}),Object(k.jsx)(b.a,{container:!0,spacing:3,className:t.body,children:this.languages.map((function(n){return Object(k.jsxs)(b.a,{item:!0,xs:4,children:[Object(k.jsxs)("div",{className:t.language,children:[" ",n," "]}),Object(F.a)(Array(e.stars[n])).map((function(e,n){return Object(k.jsx)(T.a,{className:t.starIcon},n)})),e.stars[n]<5&&Object(k.jsx)("span",{children:Object(F.a)(Array(5-e.stars[n])).map((function(e,n){return Object(k.jsx)(B.a,{className:t.starIcon},n)}))})]})}))}),Object(k.jsx)("div",{style:{borderBottom:"1px dotted"},children:" "})]})}}]),n}(r.a.Component),E=Object(u.a)(L)(J),R=function(e){return{title:{fontFamily:"Pattaya",color:"#283671",fontSize:"3em",textAlign:"center",paddingBottom:"10px"},body:{fontFamily:"Montserrat",padding:"10px",textAlign:"center"},date:{marginTop:"30px",fontSize:"13px"},location:{color:"#777",marginTop:"45px",fontSize:"13px"},company:{color:"#777",marginTop:"10px",fontSize:"13px",fontStyle:"italic"},description:{marginTop:"25px",lineHeight:"1.5em"},descriptionHeader:{fontWeight:"bold"}}},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(k.jsxs)("div",{style:{marginLeft:""},children:[Object(k.jsxs)("div",{children:[" ",this.props.title," "]}),Object(k.jsxs)("div",{className:e.location,children:[" ",this.props.location," "]}),Object(k.jsxs)("div",{className:e.company,children:[" ",this.props.company," "]}),Object(k.jsxs)("div",{className:e.date,children:[" ",this.props.date," "]}),Object(k.jsx)("div",{className:e.description,children:this.props.description})]})}}]),n}(r.a.Component),Q=Object(u.a)(R)(U),V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a.gridSize);case 1:case"end":return e.stop()}}),e)}))),a.state={},a.jobs=[{title:"Engineer I",location:"Seattle, WA",company:"Nordstrom",date:"Sept 2019 - Present",description:"Currently working as a software engineer in a network team, writing network automations and network tools for network engineers. Developing coding standards within the team, managing Linux servers, and open source and proprietary softwares."},{title:"Software Engineer Intern",location:"Seattle, WA",company:"Nordstrom",date:"June 2019 - Sept 2019",description:"Wrote automation utilizing external APIs like LiveAction and Datadog to create telemetry report for analysis and alert. Developed Slack App and web server as network tools for network engineers."},{title:"Quantitative Tutor",location:"Tacoma, WA",company:"University of Washington Tacoma",date:"Dec 2017 - June 2019",description:"Enhanced students understanding in Computer Science & Mathematics, and organized math and Computer Science workshops to increse students' academic success."},{title:"Tutor",location:"Seattle, WA",company:"South Seattle College",date:"Jan 2016 - June 2017",description:"Assisted students with the concepts of Computer Science & Math."}],a.gridSize=parseInt(12/a.jobs.length),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:t.title,children:Object(k.jsx)("span",{children:" Experience "})}),Object(k.jsx)(b.a,{container:!0,spacing:4,className:t.body,children:this.jobs.map((function(t){return Object(k.jsx)(b.a,{item:!0,xs:e.gridSize,children:Object(k.jsx)(Q,{title:t.title,location:t.location,company:t.company,date:t.date,description:t.description})})}))}),Object(k.jsx)("div",{style:{borderBottom:"1px dotted"},children:" "})]})}}]),n}(r.a.Component),_=Object(u.a)(R)(V),G=function(e){return{title:{fontFamily:"Pattaya",color:"#283671",fontSize:"3em",textAlign:"center",paddingBottom:"20px"},body:{fontFamily:"Montserrat",padding:"10px",textAlign:"center"},icon:{color:"#283671",width:"50px",height:"50px",paddingRight:"20px",cursor:"pointer"}}},q=n(21),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:e.title}),Object(k.jsx)(b.a,{container:!0,spacing:1,className:e.body,children:Object(k.jsxs)(b.a,{item:!0,xs:12,className:e.github,children:[Object(k.jsxs)("a",{href:"https://www.linkedin.com/in/vecheka-chhourn/",target:"_blank",rel:"noreferrer",children:[" ",Object(k.jsx)(q.b,{className:e.icon})," "]}),Object(k.jsxs)("a",{href:"https://github.com/vecheka",target:"_blank",rel:"noreferrer",children:[" ",Object(k.jsx)(q.a,{className:e.icon})," "]})]})})]})}}]),n}(r.a.Component),X=Object(u.a)(G)(K),Y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(b.a,{container:!0,spacing:3,children:[Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(j.a,{children:Object(k.jsx)(S,{})})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(M,{})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(z,{})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(E,{})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(_,{})}),Object(k.jsx)(b.a,{item:!0,xs:12,children:Object(k.jsx)(X,{})})]})})}}]),n}(r.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[42,1,2]]]);
//# sourceMappingURL=main.dae3e612.chunk.js.map