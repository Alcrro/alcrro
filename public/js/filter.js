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

const filterButton3 = document.querySelector('#js-sorting-collapse3');

const filterContent3 = document.querySelector('#js-orderby-btn3');



filterContent3.addEventListener('click', toggleFilterOrderby3);



function toggleFilterOrderby3(){

	filterButton3.classList.toggle('in')

};

const filterButton4 = document.querySelector('#js-orderby-btn4');

const filterContent4 = document.querySelector('.control-filter-li4');
const filterButton5 = document.querySelector('#js-orderby-btn5');



filterContent4.addEventListener('click', toggleFilterOrderby4);



function toggleFilterOrderby4(){

	filterButton4.classList.toggle('in')
	filterButton5.classList.toggle('in')

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

const checkboxDropdown = document.getElementById('.list1')
const checkboxDropdownList = document.querySelector('.items')

checkboxDropdown.addEventListener('click', function(){
	checkboxDropdownList.classList.toggle('visible')
});


const checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}