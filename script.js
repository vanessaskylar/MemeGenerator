//check if inputs are valid
const form = document.querySelector('#userForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const imgURL = document.getElementById('imageURL').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const inputs = event.target.querySelectorAll('input');

    for (let input of inputs) {
        if (input.value.length === 0) {
            alert('Please fill out the missing fields.');
            return false;
        }     
    }
    createMeme(imgURL, topText, bottomText)
})


//creating the meme
function createMeme(img, top, bottom) {
    const memesDiv = document.getElementById('meme-container');
    const meme = document.createElement('div');
    const imgBackground = document.createElement("img");
    const textAbove = document.createElement("div");
    const textBelow = document.createElement("div");
    const deleteMemeOverlay = document.createElement('div');
    const deleteMemeText = document.createElement('div');

    meme.classList.add('new-meme');
    imgBackground.setAttribute('src', img);
    imgBackground.classList.add('image');
    textAbove.innerText = top;
    textAbove.classList.add('text-above', 'text-style', 'delete');
    textBelow.innerText = bottom;
    textBelow.classList.add('text-below', 'text-style', 'delete');
    deleteMemeText.innerText = "remove"
    deleteMemeText.classList.add('deleteMemeText');
    deleteMemeOverlay.classList.add('deleteMemeOverlay');

    meme.append(deleteMemeText);
    meme.append(deleteMemeOverlay);
    meme.append(imgBackground);
    meme.append(textAbove);
    meme.append(textBelow);    
    memesDiv.append(meme);

    form.reset();
}


//Removing meme div when clicked
const memeContainer = document.querySelector('#meme-container');

memeContainer.addEventListener('click', function(event) {
    console.log(event.target.parentElement);
    event.target.parentElement.remove();
})
