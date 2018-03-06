// google maps //

map = new google.maps.Map(document.querySelector('.map'), {
	center: {lat: 50.211311, lng: -5.481887},
  zoom: 16,
  mapTypeId: 'roadmap'
});

const marker = new google.maps.Marker({
	position: {lat: 50.211311, lng: -5.481887},
	map: map
})

//smooth scroll //

function smoothScroll(anchor, px) {
	$('html, body').animate({
		scrollTop: $(anchor).offset().top - px
	}, 1000);
}

for(let i = 2; i <= 5; i++) {
	$(`.link-${i}`).click(function() {
		smoothScroll(`#section-${i}`, 60);
})}

$(`.page-header__logo, .link-1, .to-top`).click(function() {
	smoothScroll(`#section-1`, 80);
})

// navbar // 

$(window).scroll(function() {
	const header = $('.page-header');
				headerHeight = header.height();

	if(pageYOffset > headerHeight) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}
})

// filter gallery //

const categories = $('#all, #web, #print')

categories.on('click', function() {
	const all = document.querySelector('#all');
	const web = document.querySelector('#web');
	const print = document.querySelector('#print');

	const webImg = document.querySelectorAll('.web');
	const printImg = document.querySelectorAll('.print');
	const work = document.querySelectorAll('.work');

	if(all.checked) {
		work.forEach(element => element.classList.remove('active'))
	} else if(web.checked) {
		webImg.forEach(element => element.classList.remove('active'))
		printImg.forEach(element => element.classList.add('active'))
	} else if(print.checked) {
		printImg.forEach(element => element.classList.remove('active'))
		webImg.forEach(element => element.classList.add('active'))
	}
})

// modal //

const show = document.querySelectorAll('.icon-eye');
			img = document.querySelectorAll('.work__img');
			modal = document.querySelector('.modal');
			modalImg = document.querySelector('.modal__img');
			close = document.querySelector('.modal__close');
			next = document.querySelector('.modal__next');
			prev = document.querySelector('.modal__prev');
let position;

for(let i = 0; i <= 5; i++) {
	show[i].addEventListener('click', function() {
		modal.classList.add('active');
		modalImg.src = img[i].src;
		position = i;	
	});
}

next.addEventListener('click', function() {
	position++;
	if(position >= 6) {
		position = 0;
	}	
	modalImg.src = img[position].src;
})

prev.addEventListener('click', function() {
	position--;
	if(position <= -1) {
		position = 5;
	}
	modalImg.src = img[position].src;
})

close.addEventListener('click', function() {
	modal.classList.remove('active');
})

// slider //

let dots = 4;
		sliderElem = document.querySelector('.slider')
		dotElems = sliderElem.querySelectorAll('.slider-dots__dot')

dotElems.forEach(dotElem => {		
	dotElem.addEventListener('click', function() {
		dotElems.forEach(dotElem => dotElem.classList.remove('active'));
		dotElem.classList.add('active');
		let newPos = dotElem.getAttribute('data-pos');

		sliderElem.setAttribute('data-pos', newPos)	
	})
	
})

// hamburger // 

const hamburger = document.querySelector('.hamburger'); 
			menu = document.querySelector('.menu__menu-list'); 

hamburger.addEventListener('click', function() {
	this.classList.toggle('active');
	this.getAttribute('aria-expanded') == 'false' ? this.setAttribute('aria-expanded', 'true') : this.setAttribute('aria-expanded', 'false');
	$('.menu__menu-list').slideToggle();
})

if (window.matchMedia('(max-device-width: 777px)').matches) {
	for(let i = 1; i <= 5; i++) {
		$(`.link-${i}`).click(function() {
			$('.menu__menu-list').slideToggle();
			hamburger.classList.remove('active');
		})}
}

//

$(document).scroll(function() {
	$('.work').height($('.work').width()*0.795);
})

