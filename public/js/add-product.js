const chooseBtn = document.querySelector('.btn-choose-category-of-product')
console.log(chooseBtn)
const chooseDropdownList = document.querySelector('.ul-dropdown-menu');
console.log(chooseDropdownList);

chooseBtn.addEventListener('click', toggleFilter )

function toggleFilter(){
	chooseDropdownList.classList.toggle('in')
	chooseBtn.classList.toggle('in')
}



