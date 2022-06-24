

const 
    btPlay = document.querySelector('#bt-play'),

    player = (()=> {
        let 
            refIntv   = 0,
            counter   = 0,
            onProcess = false; // security to avoid multiple setInterval processes

        function playerAction() {
            console.clear()
            console.log( 'playing', ++counter)
        }

        return {
            play() {
                if (onProcess) return  // security to avoid doing setInterval() twice
      
                onProcess = true
                counter   = 0
                console.clear()
                console.log('start playing')
                refIntv = setInterval( playerAction , 2000)
            },

            stop() {
                if (!onProcess) return  // security to avoid doing clearInterval() twice
 
                clearInterval( refIntv )
                onProcess = false
      
                console.clear()
                console.log('stop playing')
            }
        }
    })();


btPlay.onclick = () => {
    if (btPlay.classList.toggle('stopped'))  player.play()
    else                                     player.stop()
}

