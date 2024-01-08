function photographerTemplate(photographersData) {
    const { name, id, portrait, city, country, tagline, price } = photographersData;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // Creating the 'article' item
        const articlePhotographer = document.createElement('article');
        
        // Creating elements to include in 'article'
        const linkPhotographerPage = document.createElement("a");
        linkPhotographerPage.setAttribute("href", `/photographer.html?id=${id}`);
        linkPhotographerPage.setAttribute("role", "button");
        linkPhotographerPage.setAttribute("aria-label", `Lien vers la page de ${name}`);

        const portraitPhotographer = document.createElement("div");
        
        const imagePhotographer = document.createElement("img");
        imagePhotographer.setAttribute("src", picture);
        imagePhotographer.setAttribute("alt", "");

        const namePhotographer = document.createElement("h2");
        namePhotographer.textContent = name;

        const locationText = document.createElement("h3");
        locationText.textContent = `${city}, ${country}`;

        const sloganText = document.createElement("h4");
        sloganText.textContent = tagline;

        const priceText = document.createElement("p");
        priceText.textContent = `${price}€/jour`;

        // Integrating elements
        articlePhotographer.appendChild(linkPhotographerPage);
        linkPhotographerPage.appendChild(portraitPhotographer);
        portraitPhotographer.appendChild(imagePhotographer);
        portraitPhotographer.appendChild(namePhotographer);
        articlePhotographer.appendChild(locationText);
        articlePhotographer.appendChild(sloganText);
        articlePhotographer.appendChild(priceText);
       
        return (articlePhotographer);
    }
    return { name, picture, getUserCardDOM }
}