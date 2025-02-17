/************************************************************

This file contains the functions for increment or decrement like on media

************************************************************/


export function addNewLike() {
	
	// Retrieve heart item & number element
	const heartBtn = document.querySelectorAll(".info-media .fa-heart");
	
	// Browse buttons
	for(let i = 0; i < heartBtn.length; i++) {
		
		heartBtn[i].addEventListener("click", () => {
			if (heartBtn[i].classList.contains("heart-empty")) {
				increment(i, heartBtn);
			} else {
				decrement(i, heartBtn);
			}
		});
		
		heartBtn[i].addEventListener("keypress", event => {
			if (heartBtn[i].classList.contains("heart-empty")) {
				event.preventDefault();
				increment(i, heartBtn);
			} else {
				event.preventDefault();
				decrement(i, heartBtn);
			}
		});
	}
}


/**********************/
/***** INCREMENT ******/
/**********************/
function increment(i, heartBtn) {
	
	// Retrieve heart item & number element
	let numberElement = document.querySelectorAll(".like-number");
	
	// Increment the short numberElement by 1
	let numberLike = parseInt(numberElement[i].innerText);
	numberElement[i].innerText = numberLike + 1;
	
	// Modifying attributes
	heartBtn[i].classList.remove("fa-regular", "heart-empty");
	heartBtn[i].classList.add("fa-solid", "heart-full");
	heartBtn[i].setAttribute("aria-label", "Retirer le like du média");
	
	// Modify total page likes
	let pageTotalLike = document.getElementById("total-likes");
	let numberPageTotalLike = parseInt(pageTotalLike.innerText);
	pageTotalLike.innerHTML = numberPageTotalLike + 1;
}


/**********************/
/***** DECREMENT ******/
/**********************/
function decrement(i, heartBtn) {
	
	// Retrieve heart item & number element
	let numberElement = document.querySelectorAll(".like-number");
	
	// Decrement the short numberElement by 1
	let numberLike = parseInt(numberElement[i].innerText);
	numberElement[i].innerText = numberLike - 1;
	
	// Modifying attributes
	heartBtn[i].classList.remove("fa-solid", "heart-full");
	heartBtn[i].classList.add("fa-regular", "heart-empty");
	heartBtn[i].setAttribute("aria-label", "Liker ce média");
	
	// Modify total page likes
	let pageTotalLike = document.getElementById("total-likes");
	let numberPageTotalLike = parseInt(pageTotalLike.innerText);
	pageTotalLike.innerHTML = numberPageTotalLike - 1;
}