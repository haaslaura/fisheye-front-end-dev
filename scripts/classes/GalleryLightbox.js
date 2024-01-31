/**
* @property {HTMLElement} element
*/

export class Lightbox {
    
    // Init function
    static init(mediaData) {
        // select all media links
        const links = document.querySelectorAll("article a");
        
        // Click event
        links.forEach(link =>
            link.addEventListener("click", event => {
                event.preventDefault();
                new Lightbox(event.currentTarget.getAttribute("href"), mediaData);
            }));
            
        // Keyboard event
        links.forEach(link =>
            link.addEventListener("keypress", event => {
                event.preventDefault();
                new Lightbox(event.currentTarget.getAttribute("href"), mediaData); 
            }));
    }
            
    /**
    * @param {string} url Media URL
    */
    constructor(url, mediaData) {
        console.log("constructeur: " + url);
        console.log("constructeur: " + mediaData);
        
        this.element = this.buildDOM(url);
        this.loadMedia(url);
        document.querySelector(".media-section").appendChild(this.element);
        // Le 'this' me permet d'accéder à element partout où je le souhaite
    }
            
            
    /**
    * @param {string} url Media URL
    */
    loadMedia(url) {
        
        const image = new Image(); 
        console.log(image);
        
        // Test
        /*const media = new Media(data);
        console.log(media);
        */
        
        const container = this.element.querySelector(".lightbox__container");
        const loader = document.createElement("div");
        loader.classList.add("lightbox__loader");
        container.appendChild(loader);
        
        image.onload = function() {
            container.removeChild(loader); // NE FONCTIONNE PAS : le loader se charge en dernier
            container.appendChild(image);
        }
        
        image.src = url;
        
        //console.log("loadMedia: " + media);
        
        // V1
        /*
        const media = new Image(); // retourner une promesse ?
        console.log(media);
        // ATTENTION VIDEO NON PRIS EN COMPTE
        
        const container = this.element.querySelector(".lightbox__container");
        const loader = document.createElement("div");
        loader.classList.add("lightbox__loader");
        container.appendChild(loader);
        
        media.onload = function() {
            container.removeChild(loader); // NE FONCTIONNE PAS : le loader se charge en dernier
            container.appendChild(media);
        }
        
        media.src = url;
        */
    }
            
            
    /**
    * Ferme la lightbox
    * @param {MouseEvent} event ????????????????
    */
    close(event){
        event.preventDefault();
        this.element.classList.add("fadeOut");
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element);
        }, 500)
    }
            
            
    /**
    * @param {string} url Image URL
    * @return {HTMLElement}
    */
    buildDOM(url) {
        const lightboxDOM = document.createElement("div");
        lightboxDOM.classList.add("lightbox");
        lightboxDOM.setAttribute("role", "dialog");
        lightboxDOM.innerHTML = `<button class="lightbox__close" role="button" aria-label="Close dialog">Fermer</button>
        <button class="lightbox__next" role="button" aria-label="Next image">Suivant</button>
        <button class="lightbox__prev" role="button" aria-label="Previous image">Précédent</button>
        <div class="lightbox__container">
        <!-- TITRE IMAGE A AJOUTER -->
        <h5>Titre image test</h5>
        </div>`;
        
        // Click event
        lightboxDOM.querySelector(".lightbox__close").addEventListener('click', this.close.bind(this));
        
        // Keybord event
        lightboxDOM.querySelector(".lightbox__close").addEventListener('keypress', event => {
            if (event.code === "Enter") {
                this.close.bind(this);
            }
        });      
        
        return lightboxDOM;
    }
}