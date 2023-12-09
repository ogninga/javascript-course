//from  no need to specifiy the inital step will figure it out on its own.


gsap.from(".box1", {
    y: -200,
    duration: 3,
    ease: "linear",
    repeat: -1,
    yoyo: true,
})
//from & fromTO : must specify the default value, to and from value

gsap.fromTo(".box2", {
  y: 200, opacity:0,
},{
 opacity:1,
 y:-200,
 duration: 3,
 ease: "linear",
 borderRadius: 0,
 repeat: -1,
 yoyo: true,
})







