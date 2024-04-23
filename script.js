function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}function loadingAnimation(){
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
  animationName:'anim',
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

function cursorAnimation(){
  Shery.makeMagnet("#navp2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  let vc=document.querySelector("#video-cont");
  let video=document.querySelector("#video-cont video");
  vc.addEventListener('mouseenter',()=>{
    vc.addEventListener('mousemove',dets=>{
      gsap.to('.mousefollower',{
        opacity:0,
      })
      gsap.to('#vcursor',{
        left:dets.x - 570,
        top:dets.y - 300,
      })

    })

  });

  vc.addEventListener('mouseleave',()=>{
    gsap.to('.mousefollower',{
      opacity:1,
    })
    gsap.to('#vcursor',{
      top:"-15%",
      left:"70%",
    })
  })
  let flag=0;
  vc.addEventListener('click',()=>{
    if (flag ===0){
      video.play();
      video.style.opacity=1;
      document.querySelector('#vcursor').innerHTML=`<i class="ri-pause-line"></i>`;
      flag=1;
    }
    else if(flag ===1){
      video.pause();
      video.style.opacity=0;
      document.querySelector('#vcursor').innerHTML=`<i class="ri-play-mini-fill"></i>`;
      flag=0;
    }
   
    gsap.to('#vcursor',{
      scale:0.5,
    })
  })
}

function sheryAnimation(){
  Shery.imageEffect('.imgdiv',{
    style:5,
    config:{"a":{"value":2.29,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241452000505924},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.2,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
    

  })
}
function flag(){
  document.addEventListener('mousemove',dets=>{
    gsap.to('#flag',{
      x:dets.x,
      y:dets.y,
    })
  })
  document.querySelector('#hero3').addEventListener('mouseenter',()=>{
    gsap.to('#flag',{
      opacity:1
    })
  })

  document.querySelector('#hero3').addEventListener('mouseleave',()=>{
    gsap.to('#flag',{
      opacity:0
    })
  })
}




loadingAnimation();
locomotive();
sheryAnimation();
cursorAnimation();
flag();

