/************************************************************

This file contains the functions for increment or decrement like on media

************************************************************/

export function addNewLike() {
        
    // Retrieve hearts items & number element
    const heartEmptyBtn = document.querySelectorAll("#heart-empty");
    const heartFullBtn = document.querySelectorAll("#heart-full");
    let numberElement = document.querySelectorAll("#like-number");

    // Add event on buttons
    for(let i = 0; i < heartEmptyBtn.length; i++) {
    
        heartEmptyBtn[i].addEventListener("click", () => increment(i));
        heartEmptyBtn[i].addEventListener("keypress", event => {
            event.preventDefault();
            increment(i);
        });
    };

    for(let i = 0; i < heartFullBtn.length; i++) {
        heartFullBtn[i].addEventListener("click", () => decrement(i));
        heartFullBtn[i].addEventListener("keypress", event => {
            event.preventDefault();
            decrement(i);
        });
    };


    function increment(i) {
       
        // Increment the short numberElement by 1
        let numberLike = parseInt(numberElement[i].innerText);
        numberElement[i].innerText = numberLike + 1;

        // Modifying attributes
        heartEmptyBtn[i].style.display = "none";
        heartFullBtn[i].style.display = "block";
        heartEmptyBtn[i].setAttribute("aria-hidden", "true");
        heartFullBtn[i].setAttribute("aria-hidden", "false");

        // Modify total page likes
        let pageTotalLike = document.getElementById("total-likes");
        let numberPageTotalLike = parseInt(pageTotalLike.innerText);
        pageTotalLike.innerHTML = numberPageTotalLike + 1;
    }
    
    
    function decrement(i) {
        
        // Decrement the short numberElement by 1
        let numberLike = parseInt(numberElement[i].innerText);
        numberElement[i].innerText = numberLike - 1;
        
        // Modifying attributes
        heartEmptyBtn[i].style.display = "block";
        heartFullBtn[i].style.display = "none";
        heartEmptyBtn[i].setAttribute("aria-hidden", "false");
        heartFullBtn[i].setAttribute("aria-hidden", "true");

        // Modify total page likes
        let pageTotalLike = document.getElementById("total-likes");
        let numberPageTotalLike = parseInt(pageTotalLike.innerText);
        pageTotalLike.innerHTML = numberPageTotalLike - 1;
    }
}