const chooseBtn = document.querySelector('.btn-choose-category-of-product')
const chooseDropdownList = document.querySelector('.ul-dropdown-menu');
const jsHolder = document.querySelector('.jsHolder');

const jsli = document.querySelectorAll('.jsli');


const ajsli = document.querySelectorAll('.ajsli')
;

chooseBtn.addEventListener('click', toggleFilter )

function toggleFilter(){
	chooseDropdownList.classList.toggle('in')
	chooseBtn.classList.toggle('in')
}


ajsli.forEach(function(btn){
	btn.addEventListener('click', function(e){
		console.log(e.currentTarget.dataset);
	})
});

