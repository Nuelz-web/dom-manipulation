const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

const h1Inside = document.createElement('h1');
h1Inside.textContent = "I'm in a div";
div.appendChild(h1Inside);

const pInside = document.createElement('p');
pInside.textContent = "ME TOO!";
div.appendChild(pInside);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);