
const displayContainer = document.querySelector('.items-container');

window.addEventListener('DOMContentLoaded', loadMultiDataCards());



function loadMultiDataCards(){
	// Create an xhr Object
	const xhr = new XMLHttpRequest();

	//open
	xhr.open('GET', './db/cards.json', true);


	xhr.onload = function(){
		if(this.status === 200){
			const cards = JSON.parse(this.responseText);

			cards.sort(function(a,b){
				return a.price - b.price
			})
		

			let multiCardsOutput = '';
			cards.forEach(function(filter){
				multiCardsOutput += `
				<div class="card-container">
				<div class="img-container">
					<div class="icons-button">
						<i class='bx bx-shopping-bag'></i>
						<i class='bx bx-heart' ></i>
						<i class='bx bx-checkbox'></i>
					</div>
					<a href=""><img src="${filter.images}" alt=""></a>
				</div>
				<div class="description-container">
					<a href=""><p>${filter.description}</p>
					</a>
				</div>
				<div class="stars-container">
					<a href="#">
						<span><i class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
						<span class="reviews-container">
						(${filter.reviews})
					</span>
					</a>
				</div>
				<div class="estimate-placeholder">
					<div class="semibold font-size-sm text-availability-in_stock">
						${filter.stock}
					</div>
				</div>
				<div class="price-container">
					<p class="product-price">$${filter.price}</p>
				</div>
				<div class="button-container">
				<button type="submit" class="cart-button">Add To Cart</button>
				</div>
			</div>
				`;
			});
			displayContainer.innerHTML = multiCardsOutput;
		}	
	}
	xhr.send();
}