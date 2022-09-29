console.log('loaded')
document.body.onscroll = () => {
	let loc = document.querySelector("#sponsors").getBoundingClientRect();
	if (
		loc.top + (loc.bottom - loc.top) * 0.75 <=
		(window.innerHeight || document.documentElement.clientHeight)
	) {
		document.querySelectorAll(".slide").forEach((e) => {
			e.children[0].children[0].classList.remove("grayscale");
			// e.children[0].children[0].classList.remove("filter");
			e.children[0].children[0].classList.add("grayscale-0");
		});
	} else {
		document.querySelectorAll(".slide").forEach((e) => {
			e.children[0].children[0].classList.add("grayscale");
			// e.children[0].children[0].classList.add("filter");
			e.children[0].children[0].classList.remove("grayscale-0");
		});
	}
};
