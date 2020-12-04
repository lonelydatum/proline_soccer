import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'




function start(){
	
	const tl = init("970x250")
	
	

	
	player()
	tl.from(".t1a", .2, {x:"-=400",opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	tl.add(frameEnd(), "+=2")
}



start()


module.exports = {};

