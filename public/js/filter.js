function orderbySelect(){

const orderbyFilter = document.querySelectorAll('.orderby')



orderbyFilter.forEach(function(btn){

	btn.addEventListener('click', function(e){

		console.log(e.currentTarget.dataset.id)

	});

});

}



const filters = document.querySelector('#js-filter-collapse');

const collapseFilter = document.querySelector('.js-collapse-trigger')

collapseFilter.addEventListener('click', toggleFilter )



function toggleFilter(){


	filters.classList.toggle('in')

}


const filterButton = document.querySelector('#js-sorting-collapse');

const filterContent = document.querySelector('#js-orderby-btn');



filterContent.addEventListener('click', toggleFilterOrderby);



	function toggleFilterOrderby(){

		filterButton.classList.toggle('in')

	};


const filterButton2 = document.querySelector('#js-sorting-collapse2');

const filterContent2 = document.querySelector('#js-orderby-btn2');



filterContent2.addEventListener('click', toggleFilterOrderby2);



function toggleFilterOrderby2(){

	filterButton2.classList.toggle('in')

};



document.addEventListener('click', function handleClickOutsideBox(e){



	const orderbyBox = document.querySelector('.listing-sorting-dropdown');



	if(orderbyBox.contains(e.target)){

		orderbyBox.classList.toggle('in')

	}

})


const removeAButton = document.querySelector('.js-load-search-url');


const removePanelBody = document.querySelector('.js-head-active-filters')


removeAButton.addEventListener('click', function(){

	removePanelBody.classList.toggle('in')

})



