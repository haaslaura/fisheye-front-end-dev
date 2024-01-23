class Lightbox {
    static init(){
        // selectionner tous les liens qui renvoit vers des médias
        const links = document.querySelectorAll(".media-section__media-card article a");
        // possibilité bis (proposée dans la vidéo)
        // const links = document.querySelectorAll('a [href$=".jpg"], a[href$=".mp4"]');
        
            .forEach(link => link.addEventListener("click", e => {
                e.preventDefault()
                new Lightbox(e.currentTarget.getAttribute("href"))
            }))
        
    }
    
    /**
    * 
    * @param {string} url URL de l'image
    * @return {HTMLElement}
    */
    constructor (url) {
        const element = this.buildDOM(url);
        document.body.appendChild(element);
    }
    
    buildDOM(url) {
        const dom = document.createElement("div");
        dom.classList.add("lightbox");
        dom.innerHTML = `<button class="lightbox__close" role="button" aria-label="Close dialog">Fermer</button>
        <button class="lightbox__next" role="button" aria-label="Next image">Suivant</button>
        <button class="lightbox__prev" role="button" aria-label="Previous image">Précédent</button>
        <div class="lightbox__container">
        <!-- POUR TEST -->
        <img src="assets/photographersmedia/195/Architecture_Corner_Room.jpg">
        <!-- TITRE IMAGE A AJOUTER -->
        <h5>Titre image test</h5>
        </div>`
        
        return dom
    }
}



/**
* 
*
<!-- Lightbox -->
<div class="lightbox">

</div>
*/

