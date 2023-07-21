const titleEl = document.getElementById('title');
console.log(titleEl)
// This is how you select an element by its id for the DOM

titleEl.style.textAlign = 'center';
const pEl = document.querySelector('p.cool');
pEl.style.color = 'blue';

document.querySelector('a').setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('#comments > li');

for (let commentEl of commentEls) {
    commentEl.style.fontSize = '30px';
}
console.log(commentEls)

