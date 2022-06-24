
// const

const
    div1 = document.getElementById("d1"),
    div2 = document.getElementById("d2"),

    li1 = document.getElementById("li1"),
    li2 = document.getElementById("li2");

let 
    index = 0,
    y,
    t = 1000,
    tick = 0;

const 
    log = () => console.log(t * tick++);

// EL


li1.addEventListener("click", start)
li2.addEventListener("click", stop)


// function


function start(e) {
  if (e.target.matches('#li1') && !y) {
    y = setInterval(log, t);
  }
}

function stop(e) {
    if (e.target.matches('#li2')) {
      clearInterval(y);
      y = null;
    }
  }


