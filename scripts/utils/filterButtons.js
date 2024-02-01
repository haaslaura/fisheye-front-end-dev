/*******************************************************

This file contains the functions for the filters buttons

*******************************************************/

const btnDrop = document.querySelector(".btn_drop");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown_content");


export function displayFilter() {
    
    btnDrop.addEventListener("click", () => openDropdownContent());
    btnDrop.addEventListener("keypress", () => openDropdownContent());

    // Close filter at click outside
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            closeFilterMenu();
        }
    });

    // Close filter when escape key is pressed
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && dropdownContent.style.maxHeight !== "0") {
            closeFilterMenu();
        }
    });
}


function openDropdownContent() {
    
    // Faire disparaitre le bouton et apparaitre le menu
    btnDrop.style.display = "none";
    btnDrop.setAttribute("aria-hidden", "true");
    dropdownContent.style.maxHeight = "100%";
    dropdownContent.setAttribute("aria-expanded", "true");
    
    // Récupérer les boutons
    const btnPopularity = document.getElementById("btnPopularity");
    const btnDate = document.getElementById("btnDate");
    const btnTitle = document.getElementById("btnTitle");
    
    btnPopularity.addEventListener("click", () => sortByPopularity());
    btnPopularity.addEventListener("keypress", event => {
        sortByPopularity();
    });
    
    btnDate.addEventListener("click", () => sortByDate());
    btnDate.addEventListener("keypress", event => {
        sortByDate();
    });
    
    btnTitle.addEventListener("click", () => sortByTitle());
    btnTitle.addEventListener("keypress", event => {
        sortByTitle();
    });
}


function sortByPopularity() {
    console.log("trie par popularité"); // Print trop de fois
    closeFilterMenu();
    pressEscapeButton();
}

function sortByDate() {
    console.log("trie par date"); // Print trop de fois
    closeFilterMenu();
    pressEscapeButton();
}

function sortByTitle() {
    console.log("trie par titre"); // Print trop de fois
    closeFilterMenu();
    pressEscapeButton();
}

function closeFilterMenu() {
    // Faire disparaitre le menu et remettre le bouton
    dropdownContent.style.maxHeight = "0";
    dropdownContent.setAttribute("aria-hidden", "true");
    btnDrop.style.display = "flex";
    btnDrop.setAttribute("aria-hidden", "false");
}





// aria-current ?
// Comment gérer les tabindex ?

// Exemple de fonction trie
/*
function triAlphabetique() {
    medias.sort((a, b) => {
        if (a.nom > b.nom)
        return 1
        else
        return -1
    });
    
    displayAllMedia(medias)
}
*/