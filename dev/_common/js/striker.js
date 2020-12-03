
function player(){
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


export {player}