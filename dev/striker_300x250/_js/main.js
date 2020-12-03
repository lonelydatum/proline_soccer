
import {size} from '../../_common/js/common.js'

TweenLite.defaultEase = Power3.easeOut

function start(){
	
	const tl = new TimelineMax()

	tl.set(".frame1", {opacity:1})
	striker()
	tl.from(".t1a", .1, {x:"-=200",opacity:0}, 1.0)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(f2(), "+=2")
}

function f2(){
	const {w, h} = size
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})
	tl.set(".ill", {transformOrigin:`${w}px ${h*2}px`, x:-w/2, y:-h })

	tl.from(".phone", .3, {y:`+=${h}`}, "+=.3")
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to(".cta1", .01, {opacity:0}, "+=2")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")

	return tl
}

function striker(){
	const tl = new TimelineMax()
	
	
	tl.add("start", 0)
	const total = 4
	// for(let i=total; i>0;i--){
	for(let i=1; i<=total;i++){
		const percent = i/total * .17
		
		let obj = {x:0, y:0, ease:Power4.easeOut}
		if(i!==total){
			obj = {...obj, opacity:0}
		}
		tl.to(`#player${i}`, .8, obj, `start+=${percent}`)	
	}
	
	
	// tl.reverse()
	// tl.play();
	TweenLite.to(".ball", .8, {x:0, y:0, ease:Power4.easeOut, delay:.3})
	return tl
}



start()


module.exports = {};

