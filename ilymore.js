const button = document.getElementById('movingbutton');
const yesBtn = document.querySelector('.yes');
const gif = document.querySelector('img');
const text = document.querySelector('h1');


yesBtn.addEventListener('click', () => {
  gif.setAttribute('src', 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmJveXVzZ2llOGUzdnQ1aXJ4dzl3azNiMXA0a2poMnZ6bHdhNmNqZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4N1wOi78ZGzSB6H7vK/giphy.gif')
  text.textContent = 'OF COURSE I DO'
})


button.addEventListener('click', () => {
    moveButton();
});

function moveButton() {
    const buttonRect = button.getBoundingClientRect();
    const maxX = 600 - buttonRect.width;
    const maxY = 300 - buttonRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.transform = `translate(${x}px, ${y}px)`;
}




