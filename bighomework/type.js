/*
* @Author: 1
* @Date:   2019-12-15 15:28:10
* @Last Modified by:   1
* @Last Modified time: 2019-12-15 15:36:51
*/

'use strict';
window.onload=function (){
    setInterval(function(){
	var now=parseInt(getStyle(sp,"left"));
	if(sp.style.left=="-200px"){
		sp.style.left=900+"px";
	}

	else{
		sp.style.left=now-5+"px";
	}
	}, 20)
}
var box=document.getElementById("box");
var circle=document.getElementById("nav").children;
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var roll=1;
var sp=document.getElementById("sp");
var move=false;
function next(){	
    if(move==false){
    	move=true;
    	roll++;
	    change();
	    animate(slider,{left:-1200*roll},function(){
	    	if(roll==6){
	    		slider.style.left="-1200px";
	    		roll=1;
	    	}
	    	move=false;
	    });
    }
}
function prev(){
    if(move==false){
    	roll--;
	    change();
	    animate(slider,{left:-1200*roll},function(){
	    	if(roll==0){
	    		slider.style.left="-6000px";
	    		roll=5;
	    	}
	    	move=false;
	    });
    }
}

var timer=setInterval(next,3000);
box.onmouseover=function(){
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
}
box.onmouseout=function(){
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer=setInterval(next,3000);
}
for(var i=0;i<circle.length;i++){
    circle[i].roll=i;
    circle[i].onclick=function(){
    	roll=this.roll+1;
    	change();
    	animate(slider,{left:-1200*roll});
    }
}
function change(){
    for(var j=0;j<circle.length;j++){
    	circle[j].className="";
    }
    if(roll==6){
    	circle[0].className="active";
    }
    else if(roll==0){
    	circle[4].className="active";
    }
    else{
    	circle[roll-1].className="active";
    }
}