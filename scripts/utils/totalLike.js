/************************************************************

This file contains the function for totalling page likes

************************************************************/


export function displayNumberTotalOfLike(mediaArray) {
	
	// Prepare to add up the likes
	const emptyLikesArray = [];
	mediaArray.forEach(media => emptyLikesArray.push(media._likes));
	
	// Add likes & Install the total in the DOM
	const totalLikes = emptyLikesArray.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	});
	
	// Create and insert the p tag to display likes
	const priceLikes = document.createElement("p");
	priceLikes.innerHTML = `<span id="total-likes">${totalLikes}</span><span><i class="fa-solid fa-heart"></i></span>`;
	document.getElementById("photographer-price").appendChild(priceLikes);
}