/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.foreach(temple => {
        let article = document.createElement('article');
        let newh3 = document.createElement('h3');
        newh3.textContent = temple.templeName;
        let templeImage = document.createElement('img');
        templeImage.src = temple.imgUrl;
        templeImage.alt = temple.location;
        article.appendChild(newh3);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const reply = await response.json();
        templeList = reply;}
    displayTemples(templeList);
}

/* reset Function */
function reset() {
    templesElement = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.querySelector('#filtered');
    switch (filter) {
        case "Utah":
            displayTemples(filter);
        case "notUtah":
            displayTemples(filter);
        case 'older':
            displayTemples(filter);
        case 'all':
            displayTemples(filter);
    }
}


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList) });

getTemples();
