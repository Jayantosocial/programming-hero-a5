// Get all heart icons
const hearts = document.getElementsByClassName('heart');
// Get the element that shows the heart count
const heartCount = document.getElementById('heartcount');
let count = 0;

// Loop through each heart and attach click event
for (const heart of hearts) {
    heart.addEventListener('click', function() {
        count++; // increment counter
        heartCount.innerText = count; // update the counter in the navbar
        console.log('Heart clicked! Total:', count);
    });
}