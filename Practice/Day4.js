
const text = document.getElementById('hi');

function handleClick() {
    console.log('hey');
}

text.addEventListener('click', handleClick);
text.removeEventListener('click', handleClick);
