var a = gsap.timeline()

function time()
{
    var b = 0;
    var c = 0;
    setInterval(function(){
        b = b + Math.floor(Math.random()*15);
        c = c + Math.floor(Math.random()*4);
        if(b<100){

            document.querySelector(".loader h1").innerHTML = b + "."+c + "%"
        }
        else{
            b = 100
            document.querySelector(".loader h1").innerHTML = b  + "%"
        }

    },100)
}
time()


a.to(".loader h1",{
    duration: 1,
    delay:0.5,
})

a.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:2.5,
})


// gsap.to("#page_3 h1",{
//     transform:"translateX(-600%)",
//     fontWeight:"9",
//     scrollTrigger:{
//             trigger:"#page_3",
//             scroller:"body",
//             // markers:true,
//             start:"top 0",
//             end:"top -200%",
//             scrub: 10,
//             pin:true
//     }
// })


gsap.to(".aboutme .btn", {
    y: -40,
    repeat: -1,
    delay:2,
    opacity: 0,
    duration: 1.6,
    yoyo:true
})



// Scroll trigger for page 2
gsap.from("#page_2 p",{
    scale:0,
    opacity:0 ,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page_2",
        scroller:"body",
        // markers:true,
        start: "top 40%"
    }
})
gsap.from("#page_2 .photos",{
    scale:0,
    opacity:0 ,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page_2",
        scroller:"body",
        // markers:true,
        start: "top 40%"
    }
})

// scrolltrigger for page_3
gsap.from("#page_3  ",{
    scale:0,
    opacity:0 ,
    duration:2,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page_3",
        scroller:"body",
        // markers:true,
        start: "top 90%"
    }
})
// scrolltrigger for page_4
gsap.from("#page_4  ",{
    scale:0,
    opacity:0 ,
    duration:0.3,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page_4",
        scroller:"body",
        // markers:true,
        start: "top 80%"
    }
})


// scrolltrigger for page_4
gsap.from("#projects  ",{
    scale:0,
    opacity:0 ,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#projects",
        scroller:"body",
        // markers:true,
        start: "top 90%"
    }
})
