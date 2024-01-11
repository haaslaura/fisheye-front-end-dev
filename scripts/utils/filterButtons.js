// 1 - Récupérer les éléments depuis le fichier Json

// 2 - Préparer une boucle for pour générer toutes les images

// 3 - Récupérer l'élément du DOM qui contiendra toutes les photos

// 4 - Créer / ajouter l'élement qui contiendra la photo, le titre et le like (et la date, même si ce n'est pas visible)

// 5 - Ensuite on s'occupe des boutons :
/* ici ne mettre que la fonction de trie !! Mettre les contenus dans le fichier photographer.js */

const popularityBtn = document.querySelector(".filter-popularity");
const dateBtn = document.querySelector(".filter-date");
const titleBtn = document.querySelector(".filter-title");

// pour pouvoir utiliser la fonction dans photographer.js, j'utilise 'export'
export function filter() {

    popularityBtn.addEventListener("click", function () {
        const arrayOrdonne = Array.from(data.media); // (sortir ce bloc) copie du tableau pour conserver inchangé l'original
        arrayOrdonne.sort(function(nbLikeA, nbLikeB){
            return nbLikeA.likles - nbLikeB.likes;
        });
        console.log(arrayOrdonne); // vérifier que le tableau est bien ré-ordonné dans la console
    });


}
/* Transformer les données Json en tableau ? */
/* nameArray = media ? */