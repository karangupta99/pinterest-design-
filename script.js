

var btn = document.querySelector("button")
var page1 = document.querySelector(".page1")
var day = document.querySelector("#day")
var nav = document.querySelector("#nav-part1")
var text1 = document.querySelector(".text h3")
var text2 = document.querySelector(".text h4")
var navpart2 = document.querySelectorAll("#nav-part2 h4")
var a = document.querySelector("#a")
day.addEventListener("click", function () {
  page1.style.backgroundColor = "white"
  console.log("hello")
  nav.style.color = "black"
  text1.style.color = "black"
  text2.style.color = "black"
  navpart2.style.color = "black"

  a.style.color = "red"
})



var tl = gsap.timeline()

tl.from("#nav #nav-part1,#nav #nav-part2", {
  y: -100,
  opacity: 0,
  duration: 2,
  stagger: 0.3
})
tl.from(".page1 h1,h2", {
  y: 100,
  duration: 2,
  opacity: 0
})

tl.from(".page1 h3", {
  x: 100,
  duration: 2,
  opacity: 0
})

tl.from(".page1 h4", {
  x: -100,
  duration: 2,
  opacity: 0
})

tl.from(".bubble", {
  x: -100,
  duration: 2,
  opacity: 0
})

tl.from("button", {
  y: 100,
  duration: 2,
  opacity: 0
})


tl.from(".page2 h4,.process,h5", {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    pin: true,
    scrub: true
  }
})


