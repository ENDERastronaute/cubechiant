const cube = document.querySelector(".cube")

window.addEventListener('mousemove', function(evt) {
        
    cube.style.animation = "animate 0s linear infinite"
    cube.style.transform = "rotateX(" + -evt.clientY +"deg) rotateY(" + evt.clientX +"deg)"
    },
)

window.addEventListener('mouseout', function() {
    cube.style.animation = "animate 4s linear infinite"
})