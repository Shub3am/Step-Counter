const Decreasor = document.querySelector("#down")
const Reset = document.querySelector("#reset")
const Increasor = document.querySelector("#up")
const Counter = document.querySelector(".counter")


Decreasor.addEventListener("click", (evt)=>{
	let val = parseInt(Counter.innerText)
	if (evt) {
		Counter.innerText = val-1
		if (val < 1) {
		const col = Counter.classList;
		col.remove("color-up")
		col.add("color-down")

	}
	}
	
} )

Reset.addEventListener("click", (evt)=> {
	const val = parseInt(Counter.innerText)
	const col = Counter.classList
	if(evt) {
		Counter.innerText = 0
		col.remove("color-down","color-up")
	}
})

Increasor.addEventListener("click", (evt)=>{
	let val = parseInt(Counter.innerText)
	if (evt) {
		Counter.innerText = val+1
		if (val > -1) {
		const col = Counter.classList;
		col.remove("color-down")
		col.add("color-up")
	}
	}

} )
