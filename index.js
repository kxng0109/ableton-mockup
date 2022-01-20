let more = document.querySelector('#more');
let menu = document.querySelector('#more-info');
let logo = document.querySelector('#logo');
let hiddenNav = document.querySelector('#hiddennav');
let mediaMenu = document.querySelector('#media-menu');
let headerIcons = document.querySelectorAll('#media-menu ion-icon');

more.addEventListener('click', () =>{
	if (more.textContent === 'More +') {
		more.textContent = 'More -';
		menu.style.display = 'block';
	} else {
		more.textContent = 'More +';
		menu.style.display = 'none';
	}
})

mediaMenu.onclick = () =>{
	console.log(getComputedStyle(hiddenNav).getPropertyValue('display'))
	if (getComputedStyle(hiddenNav).getPropertyValue('display') === 'none') {
		hiddenNav.style.display = 'flex';
		hiddenNav.style.animation = '0.5s slideIn forwards';
		logo.style.filter = 'invert(100%)';
		mediaMenu.style.color = 'white';
		headerIcons[0].style.display = 'none';
		headerIcons[1].style.display = 'block';
	}else {
		hiddenNav.style.animation = '0.5s slideOut forwards';
		logo.style.filter = 'invert(0%)';
		mediaMenu.style.color = 'black';	
		headerIcons[0].style.display = 'block';
		headerIcons[1].style.display = 'none';	
		setTimeout(() =>hiddenNav.style.display = 'none', 500)
	}
}