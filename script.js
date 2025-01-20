let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30-30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 125 + "px"
    blur.style.top = dets.y - 125 + "px"

});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
           markers:true,
        start: "top -10%",
        end: "top -111px",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: 'body',
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
});

// Footer Animation
gsap.from("#footer-content h3", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from("#footer-content p", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from("#footer-content input, #footer-content button", {
    y: 50,
    opacity: 0,
    duration: 1.4,
    delay: 0.4,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from("#social-icons img", {
    scale: 0,
    duration: 0.5,
    delay: 0.6,
    stagger: 0.2,
    ease: "back.out(1.7)"
});





