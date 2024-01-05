// This JavaScript code is linked to the index.html page

    // Function for loading data from the JSON file using fetch
    async function getPhotographers() {

        try {
            // Fetch the JSON file
            let response = await fetch('../data/photographers.json');

            // Checking the HTTP response
            if (!response.ok) {
                throw new Error ('Erreur de chargement des données');
            }

            // Retrieving JSON data from the response
            let photographers = await response.json();
            
            return photographers; // Return the photographers array
        
        } catch (error) {
            console.error('Erreur :', error); // Seeing what type of error
        }
    }
        
    async function displayData(photographers) {
        // Récupération de la div des photographes
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();