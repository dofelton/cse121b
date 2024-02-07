/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Donald Felton",
    photo: "images/IMG_0307.JPG",
    favoriteFoods: [
        'Cookies',
        'Milk Shakes',
        'Ribeye Steaks',
        'Pie'
    ],
    hobbies: [
        'Home Improvement',
        'Playing Games',
        'Cycling',
        'Baking'
    ],
    placesLived: []
    
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: 'Rowlett, TX', length: '20 years'});
myProfile.placesLived.push({place: 'Providence, RI', length: '3 years'});
myProfile.placesLived.push({place: 'Garland, TX', length: '2 years'});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
const favoriteFoods = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let newElement = document.createElement('ul');
    newElement.textContent = food;
    favoriteFoods.appendChild(newElement);
})

/* Hobbies List */
const hobbies = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    let hobbyList = document.createElement('ul');
    hobbyList.textContent = hobby;
    hobbies.appendChild(hobbyList);
})

/* Places Lived DataList */
const places = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let placeList = document.createElement('dt');
    placeList.textContent = place.name;
    let lengthList = document.createElement('dd');
    lengthList.textContent = place.length;
    places.appendChild(placeList, lengthList);
    // easier or better to add as concatenation??? 
    // places = `${placeList}, ${lengthList}`
})
// places.innerHTML = places;

