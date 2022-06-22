
// const

const div1 = document.getElementById("d1")
const div2 = document.getElementById("d2")

const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")

let index = 0;

// EL

li1.addEventListener("click", slideShowAbstract)

// function



function slideShowAbstract() {

    index += 1;
    console.log(index)

    function addRemove (anim) {
        setTimeout(() => {
            div1.classList.add(anim)
        }, 0)

        setTimeout(() => {
            div2.classList.remove(anim)
        }, 1000)
    
        setTimeout(() => {
            div2.classList.add(anim)
        }, 3000)

        setTimeout(() => {
            div1.classList.remove(anim)
        }, 4000)
    }

    if (index === 1) {
        const x = setTimeout(()=> addRemove("animation__full"), 0)
        const y = setInterval(()=> addRemove("animation__full"), 6000)
    } else if (index === 3) {
        index = 2
    }



}