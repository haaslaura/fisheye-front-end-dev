// This JavaScript code is linked to the photographer.html page


// 1 - Importer les données (et autres fonctions)
import { Picture } from '../media/Picture.js';
import { photographerTemplate } from '../templates/photographerInfo.js';
import { getData } from '../utils/getData.js';

// 2a - Only retrieve photographer from his id (étape 2b en bas de la page)
async function getPhotographerById(id) {
    try {
        // Retrieve data
        const data = await getData();
        
        // Check whether the data contains photographers
        if (data?.photographers) {
            const photographersArray = data.photographers;
            return photographersArray.find((element) => element.id === id);
        }
        console.log("Aucune donnée sur le photographe trouvée.");
    } catch (error) {
        console.error("Erreur lors de l'affichage du photographe :", error);
    }
}


// 3- Afficher les info du photographe dont c'est l'id

function displayData(photographer) {
    
    // Recovery of the photographers' divide
    const photographersHeader = document.querySelector(".photograph-header");
    const headerCol1 = document.getElementById("photograph-header-col1");
    const headerCol3 = document.getElementById("photograph-header-col3");
    
    // Utilise le template
    const photographerModel = photographerTemplate(photographer);
    const items = photographerModel.createItems();

    headerCol1.appendChild(items.namePhotographer);
    headerCol1.appendChild(items.locationText);
    headerCol1.appendChild(items.sloganText);
    headerCol3.appendChild(items.imagePhotographer);
}


async function initPage() {
    // 2b - Récupérer les informations du photographe uniquement avec son id
    let params = new URLSearchParams(document.location.search);
    let idItem = parseInt(params.get("id"));
    console.log(idItem);

    // Recovers data from photographer
    const photographer = await getPhotographerById(idItem);
    displayData(photographer);
}

initPage();



// 4 - Récupérer les infos média du photographe dont c'est l'id

// 5 - Afficher les médias

// 6 - Trier les médias