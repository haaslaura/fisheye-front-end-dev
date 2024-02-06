/************************************************************

This file contains the functions for increment or decrement like on media

************************************************************/


export function addNewLike(mediaArray) {

    // Retrieve heart item & number element
    const heartBtn = document.querySelectorAll(".info-media .fa-heart");
        
    // Browse buttons
    for(let i = 0; i < heartBtn.length; i++) {

        heartBtn[i].addEventListener("click", () => {

            if (heartBtn[i].classList.contains('heart-empty')) {
                increment(i, heartBtn);
            } else {
                decrement(i, heartBtn);
            }
        });

        heartBtn[i].addEventListener("keypress", event => {

            if (heartBtn[i].classList.contains('heart-empty')) {
                event.preventDefault();
                increment(i, heartBtn);
            } else {
                event.preventDefault();
                decrement(i, heartBtn);
            }
        });
    }

    displayNumberTotalOfLike(mediaArray);
}


function increment(i, heartBtn) {

    // Retrieve heart item & number element
    let numberElement = document.querySelectorAll(".like-number");
    
    // Increment the short numberElement by 1
    let numberLike = parseInt(numberElement[i].innerText);
    numberElement[i].innerText = numberLike + 1;
    
    // Modifying attributes
    heartBtn[i].classList.remove("fa-regular", "heart-empty");
    heartBtn[i].classList.add("fa-solid", "heart-full");
    heartBtn[i].setAttribute("aria-label", "Dislike this media");

    // Modify total page likes
    let pageTotalLike = document.getElementById("total-likes");
    let numberPageTotalLike = parseInt(pageTotalLike.innerText);
    pageTotalLike.innerHTML = numberPageTotalLike + 1;
}
    
    
function decrement(i, heartBtn) {

    // Retrieve heart item & number element
    let numberElement = document.querySelectorAll(".like-number");

    // Decrement the short numberElement by 1
    let numberLike = parseInt(numberElement[i].innerText);
    numberElement[i].innerText = numberLike - 1;
    
    // Modifying attributes
    heartBtn[i].classList.remove("fa-solid", "heart-full");
    heartBtn[i].classList.add("fa-regular", "heart-empty");
    heartBtn[i].setAttribute("aria-label", "Like this media");

    // Modify total page likes
    let pageTotalLike = document.getElementById("total-likes");
    let numberPageTotalLike = parseInt(pageTotalLike.innerText);
    pageTotalLike.innerHTML = numberPageTotalLike - 1;
}


function displayNumberTotalOfLike (mediaArray) {
    // Prepare to add up the likes
	const emptyLikesArray = [];
	
	mediaArray.forEach(media => {
		emptyLikesArray.push(media._likes);
	})
	
	// Add likes & Install the total in the DOM
	const totalLikes = emptyLikesArray.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	});
	
	const insertPrice = document.getElementById("photographer-price");
	const priceLikes = document.createElement("p");
	priceLikes.innerHTML = `<span id="total-likes">${totalLikes}</span><span><i class="fa-solid fa-heart"></i></span>`;
	insertPrice.appendChild(priceLikes);
}