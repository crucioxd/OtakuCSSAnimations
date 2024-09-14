function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
 
page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
  

})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })

})
page1Content.addEventListener("mouseleave",function(){
    
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()
// function page2Animation(){
//     gsap.from(".elem h1", {
//         y:120,
//         stagger: 0.2,
//         duration:1,
//         scrollTrigger: {
//             trigger: "#page2",
//             scroller:"body",
//             start: "top47%",
//             end: "top46%",
//             markers: true,
//             scrub: 2


//         }
//     })
// }
// page2Animation()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-20,
    duration:1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0
})
tl.from("#page1-content h1 span",{
    x:50,
    y:100,
    opacity:0,
    stagger:0.1,
    duration:1,
    delay:-0.5
})
tl.to("#loader",{
  display:"none"
})
