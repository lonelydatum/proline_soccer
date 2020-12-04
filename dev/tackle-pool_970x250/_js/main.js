import {size, frameEndPool, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("970x250")
	// return
	const {w, h} = size
	tl.set(".ill", {transformOrigin:`${w*.25}px ${h}px`, x:0, y:0 })
	

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player(1.6)
	tl.from(".t1a", .2, {x:"-=350",opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(frameEndPool(), "+=2.5")

}


start()


module.exports = {};

