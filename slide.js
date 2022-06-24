

const 
    btPlay = document.querySelector('#bt-play'),

    player = (()=> {
        let 
            refIntv,
            counter   = 0,
            onProcess = false; // security 

        function playerAction() {
            console.clear()
            console.log( 'playing', ++counter)
        }

        return {

            play() {
                if (onProcess) return  // security 
      
                onProcess = true
                counter   = 0
                console.clear()
                console.log('start playing')
                refIntv = setInterval( playerAction , 2000)
            },

            stop() {
                if (!onProcess) return  // security 
 
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

