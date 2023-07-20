var pt =document.createElement("h2");
var hn=document.createElement("h1");
setTimeout(()=>pt.innerHTML="10",1000);
setTimeout(()=>pt.innerHTML="9",2000);
setTimeout(()=>pt.innerHTML="8",3000);
setTimeout(()=>pt.innerHTML="7",4000);
setTimeout(()=>pt.innerHTML="6",5000);
setTimeout(()=>pt.innerHTML="5",6000);
setTimeout(()=>pt.innerHTML="4",7000);
setTimeout(()=>pt.innerHTML="3",8000);
setTimeout(()=>pt.innerHTML="2",9000);
setTimeout(()=>pt.innerHTML="1",10000);
setTimeout(()=>pt.innerHTML=" ",11000);
setTimeout(()=>hn.innerHTML="Happy Independence Year",11000);

document.body.append(pt,hn);
