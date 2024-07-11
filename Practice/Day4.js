
const text = document.getElementById('mytext');

// Define the event listener function
function handleClick() {
    console.log('hey');
    // Remove the event listener after it has been triggered
    // text.removeEventListener('click', handleClick);
}

// Add the event listener to the text
text.addEventListener('click', handleClick);