function loadingAnimation(){
  //loader
let tl=gsap.timeline();

tl.from('.line h1',{
  y:150,
  stagger:0.2,
  duration:0.8,
  delay:0.5,
})

tl.from('#line1-part1',{
  opacity:0,
  onStart:function(){
    let loadtimer=document.querySelector('#line1-part1 h5');
let count=0;
let time=setInterval(()=>{
  count++;
  if(count <= 100){
  loadtimer.textContent=count;
 }
 else{
   clearInterval(time);
 }
},33)
  }
})
tl.to('.line h2',{
  animationName:'anime',
  opacity:1,
 
})
tl.to('#loader',{
  opacity:0,
  duration:0.4,
  delay:3.5,
  ease:Power4,
})

//page1
tl.from('#page1',{
  delay:0.3,
  opacity:0,
  y:1500,
  duration:0.5,
})
tl.to('#loader',{
  display:'none',
})
tl.from('#hero1,#hero2,#hero3,#hero4',{
  y:120,
  stagger:0.2,
  opacity:0,
  duration:1,
})
}
loadingAnimation();

function cursorAnimation(){
  document.addEventListener('mousemove',dets=>{
    gsap.to('#crsr',{
     left:dets.x,
     top:dets.y,
 
    })
 })
 
 Shery.makeMagnet("#navp2 h4");
}
cursorAnimation();