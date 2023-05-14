let slideIndex = 1;
showSlide(slideIndex);

function nextSlide() {
	showSlide(slideIndex += 1);
}

function prevSlide() {
	showSlide(slideIndex -= 1);
}

function showSlide(n) {
	let slides = document.querySelectorAll(".slides img");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
	}
	slides[slideIndex - 1].classList.add("active");
}

let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let div = document.querySelector('.tab')

first.onclick = function () {
	div.innerHTML = 'He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.'

}
second.onclick = function () {
	div.innerHTML = 'To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.'
}

third.onclick = function () {
	div.innerHTML = 'Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. As distrusts behaviour abilities defective is. Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.'
}

let back = document.querySelector('.back')
let hide = document.querySelector('.hide')
let title = document.querySelector('.title')
let font = document.querySelector('.font')
let part1 = document.querySelector('.part_1')
let img = document.querySelector('.part_1 img')
let h1 = document.querySelector('.part_1 h1')
let text = document.querySelector('.part_1 p')

function getRandomColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
}
let color = getRandomColor()

back.addEventListener('click', function () {
	part1.style.background = color
})

hide.addEventListener('click', function () {
	// img.setAttribute('src', './img/image1.jpg')
	img.style.display = 'none'
})



let newTitle = document.querySelector('.newTitle')
title.addEventListener('click', function () {
	h1.innerHTML = newTitle.value
})

let input = document.querySelector('.input')
let fontSize = document.querySelector('.fontSize')
fontSize.addEventListener('click', function () {
	text.style.fontSize = `${input.value}px`
})

let change = document.querySelector('.change')
change.addEventListener('click', function () {
	img.src = './img/image3.jpg'
})