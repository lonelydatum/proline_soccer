import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'




function start(){
	
	const tl = init()
	const {w, h} = size
	tl.set(".ill", {transformOrigin:`${w*.75}px ${h}px`, x:0, y:0 })

	
	player(.75)
	tl.from(".t1a", .1, {opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	const phone = new TimelineMax()
	phone.from(".phone", .3, {y:"+=200"}, "+=.3")	
	tl.add(frameEnd({phone}), "+=2")
}



start()


module.exports = {};

