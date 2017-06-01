var scween = 0;
var glacier = 0;
var urls = []

function ge(t) {
  return document.getElementById(t);
}

function show(me) {
  ge(me).style.display = "inline";
  if(me == "rox-types") ge(me).style.display = "block";
  if(me == "igneous-info")ge(me).style.display = "block";
  if(me == "metamorphic-info")ge(me).style.display = "block";
  if(me == "sedimentary-info")ge(me).style.display = "block";
}

function hide(me) {
  ge(me).style.display = "none";
}

function onClick(e,f) {
  ge(e).addEventListener('click',f);
}

setInterval(function() {
  hide("climatechange-what");
  hide("glaciers-before");
  hide("presentation");
  if(scween==0)show("climatechange-what");
  if(scween==1)show("glaciers-before");
  if(scween==2)show("quiz");
  if(scween==3)show("presentation");
  ge("glacier-main").src = urls[glacier];
});

onClick("button-home",function(){scween=0});
onClick("button-glaciers",function(){scween=1});
onClick("button-presentation",function(){scween=3});
onClick("button-left",function() {
  if(glacier>0)glacier-=1;
  else glacier = 4;
  console.log(glacier);
});

onClick("button-right",function(){
  if(glacier<4)glacier++;
  else glacier=0;
  console.log(glacier);
})
