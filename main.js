var scween = 0;
var glacier = 0;
var urls = ["http://eoimages.gsfc.nasa.gov/images/imagerecords/5000/5668/glacier_4up.jpg", "https://www.nps.gov/olym/learn/nature/images/Lillian-Glacier-1905-2010-pair_1.jpg", "http://climate.nasa.gov/system/downloadable_items/38_4_c365-6-l.jpg", "http://www.wrd.org/engineering/images/climate-change-glaciers.jpg", "http://glacierchange.org/wp-content/uploads/2011/03/mendenhall_thndr-view_1993-2010-780x389.jpg"]

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
onClick("button-quiz",function(){scween=2});
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
