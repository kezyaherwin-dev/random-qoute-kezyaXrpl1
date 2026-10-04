let qoute = document.getElementById('qoute');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

console.log(qoute);
console.log(author);
console.log(btn);

async function getQoute() {
    try {
        let result = await fetch('https://dummyjson.com/quotes/random');
        let data = await result.json();

        console.log(data);

        qoute.innerHTML = data.quote;
        author.innerHTML = data.author;

    } catch (error) {
        console.log("Error : " + error);
    }
}

getQoute();