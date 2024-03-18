const tl = gsap.timeline();

tl.from("#nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
})

tl.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.4,
})

tl.from("img", {
    x: 100,
    rotate: 45,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5
})

tl.from(".bottom h3", {
    y: 110,
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
})
