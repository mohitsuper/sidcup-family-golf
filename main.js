let crusser = document.querySelector(".moving-curser");
let crusserBLur = document.querySelector(".moving-curser-blur")
document.addEventListener("mousemove",(d)=>{
    crusser.style.top = d.y +"px"
    crusser.style.left =d.x +"px"
    crusserBLur.style.top = d.y-150 +"px"
    crusserBLur.style.left =d.x-150 +"px"

})
document.addEventListener("mouseleave",()=>{
   crusser.style.opacity = "0"
   crusserBLur.style.opacity = "0"
})
document.addEventListener("mouseenter",()=>{
    crusser.style.opacity = "1"
    crusserBLur.style.opacity = "1"
 })


 
var h4all = document.querySelectorAll(".nav a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crusser.style.scale = 5;
    crusser.style.border = "1px solid #fff";
    crusser.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crusser.style.scale = 1;
    crusser.style.border = "0px solid #95C11E";
    crusser.style.backgroundColor = "#95C11E";
  });
});

 


gsap.to("nav",{
    backgroundColor : "black",
    // duration:0.5,
    delay:1,
    height:"110px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
        // end:"top 100%"
        // pin: true,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})

gsap.to(".heading",{
  top:"-30%",
  scrollTrigger:{
    trigger:".heading",
    scroller:"body",
    top:"-10%",
    scrub:1,
    start:"top 70%",

  }
})

gsap.from("#about",{
 y:100,
 opacity:0,
  top:"100%",
  scrollTrigger:{
    trigger:".anime",
    scroller:"body",
    start:"top 100%",
    end:"top 80%",

    scrub:1,

  }
  
})


gsap.from(".cards",{
  x:-100,
  opacity:0,
  //  top:"100%",
   scrollTrigger:{
     trigger:".anime",
     scroller:"body",
     start:"top 70%",
     end:"top 50%",
     scrub:1, 
   }
   
 })
 

 gsap.from("#benner",{
  y:100,
  opacity:0,
  //  top:"100%",
   scrollTrigger:{
     trigger:"#benner",
     scroller:"body",
     start:"top 90%",
     end:"top 80%",
     scrub:1,
 
   }
   
 })

 gsap.from("#page3",{
  x:100,
  opacity:0,
  //  top:"100%",
   scrollTrigger:{
     trigger:"#page3",
     scroller:"body",
     start:"top 50%",
     end:"top 30%",
     scrub:.5,
 
   }
   
 })
