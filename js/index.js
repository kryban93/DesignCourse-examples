const path = document.querySelector('path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', handleScroll);

function handleScroll() {
	const scrollPercentage =
		(document.documentElement.scrollTop + document.body.scrollTop) /
		(document.documentElement.scrollHeight - document.documentElement.clientHeight);

	const drawLength = pathLength * scrollPercentage;
	path.style.strokeDashoffset = pathLength - drawLength;

	const target = document.querySelectorAll('.scroll');
	for (index = 0; index < target.length; index++) {
		let position = window.pageYOffset * target[index].dataset.rate;

		if (target[index].dataset.direction === 'vertical') {
			target[index].style.transform = `translate3d(0px,${position}px,0px)`;
		} else {
			let positionX = window.pageYOffset * target[index].dataset.ratex;
			let positionY = window.pageYOffset * target[index].dataset.ratey;

			target[index].style.transform = `translate3d(${positionX}px ,${positionY}px,0px)`;
		}
	}
}
