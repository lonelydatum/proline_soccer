import {size, frameEndPool, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("300x600")
	// return
	
	

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player(1)
	tl.from(".t1a", .1, {x:"-=300",opacity:1}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(frameEndPool(), "+=2.5")

}


start()


module.exports = {};

