function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Création de l'élément article
        const articlePhotographer = document.createElement('article');
        articlePhotographer.setAttribute("aria-label", name);
        
        // Création des éléments à inclure dans l'article
        const portraitPhotographer = document.createElement("div");
        portraitPhotographer.setAttribute("aria-label", `Lien vers la page de ${name}`);

        const imagePhotographer = document.createElement("img");
        imagePhotographer.setAttribute("src", picture);
        imagePhotographer.setAttribute("alt", name);

        const namePhotographer = document.createElement("h2");
        namePhotographer.textContent = name;

        const locationText = document.createElement("p");
        locationText.textContent = `${city}, ${country}`;

        const sloganText = document.createElement("p");
        sloganText.textContent = tagline;

        const priceText = document.createElement("p");
        priceText.textContent =  `${price}€/jour`;

        // Intégrer les éléments articles dans la div
        articlePhotographer.appendChild(portraitPhotographer);
        portraitPhotographer.appendChild(imagePhotographer);
        portraitPhotographer.appendChild(namePhotographer);
        articlePhotographer.appendChild(locationText);
        articlePhotographer.appendChild(sloganText);
        articlePhotographer.appendChild(priceText);
       
        return (articlePhotographer);
    }
    return { name, picture, getUserCardDOM }
}

// A PENSER
/* fournir une valeur par défaut avec l'opérateur nullish
si jamais une donnée est vide */