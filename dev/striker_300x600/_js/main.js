
import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'




function start(){
	
	const tl = init()
	const {w, h} = size
	tl.set(".ill", {transformOrigin:`${w}px ${h}px`, x:-w/2, y:-h/2 })

	
	player()
	tl.from(".t1a", .1, {x:"-=200",opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(frameEnd(), "+=2")
}



start()


module.exports = {};
