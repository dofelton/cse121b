const num = ['one', 'two', 'three'];

const numTags = num.map(function (num) {
    return `<li>${num}</li>`;
})

document.getElementById("myList").innerHTML = numTags.join();

const letters = ['A', 'B', 'A'];

function convertLettersToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertLettersToPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

const longFruits = fruits.filter((fruit) => fruit.length > 6);

const numbers = [12, 34, 21, 54];

const luckNumber = 21;

const luckyIndex = numbers.indexOf(luckNumber);