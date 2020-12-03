import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init()
	// return
	const {w, h} = size
	tl.set(".ill", {transformOrigin:`${w/2}px ${h}px`})

	tl.from(".player2", 1, {x:"-=70", y:"-=40"}, 0)
	player(1.6)
	tl.from(".t1a", .1, {x:"-=300",opacity:1}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	const phone = new TimelineMax()
	phone.from(".phone", .3, {y:"+=200"}, "+=.3")	
	tl.add(frameEnd({phone}), "+=2")

}


start()


module.exports = {};

