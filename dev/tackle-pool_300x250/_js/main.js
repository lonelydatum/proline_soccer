import {size, frameEndPool, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("300x250")
	// return

	tl.to(".player2", 1, {x:0, y:0}, 0)
	player()
	tl.from(".t1a", .1, {x:"-=60",opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")
	
	tl.add(frameEndPool(), "+=2")

}


start()


module.exports = {};

