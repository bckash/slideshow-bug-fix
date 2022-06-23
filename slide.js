
// const

const div1 = document.getElementById("d1"),
div2 = document.getElementById("d2")

const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")

let index = 0;

// EL

li1.addEventListener("click", slideShowAbstract)
li2.addEventListener("click", slideShowAbstract)

// function

let y;

function slideShowAbstract(e) {

    // function addRemove (anim) {
    //     setTimeout(() => {
    //         div1.classList.add(anim)
    //     }, 0)

    //     setTimeout(() => {
    //         div2.classList.remove(anim)
    //     }, 1000)
    
    //     setTimeout(() => {
    //         div2.classList.add(anim)
    //     }, 3000)

    //     setTimeout(() => {
    //         div1.classList.remove(anim)
    //     }, 4000)
    // }

    if (e.target.id === "li1") {
        y = setInterval(()=> console.log("playing"), 2000)
    }




    if (e.target.id === "li2") {

            console.log("stop")
            clearInterval(y)

        }
    } 


