import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'




function start(){
	
	const tl = init("728x90")
	
	
	player(.75)
	tl.from(".t1a", .1, {opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	tl.add(frameEnd(), "+=2")
}



start()


module.exports = {};

