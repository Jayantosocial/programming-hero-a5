const hearts = document.getElementsByClassName('heart');
const heartCount = document.getElementById('heartcount');
let count = 0;

for (const heart of hearts) {
    heart.addEventListener('click', function() {
        count++;
        heartCount.innerText = count; // update the counter in the navbar
        console.log('Heart clicked! Total:', count);
    });
}


const callButtons = document.getElementsByClassName('button2');
const serviceNames = document.getElementsByClassName('service-name');
const phoneNumbers = document.getElementsByClassName('phone-number');
const coinCounter = document.getElementById('coincounter');
let coins = 100;

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function () {

        if (coins < 20) {
            alert('Not enough coins to make a call!');
            return;
        }

        const serviceName = serviceNames[i].innerText;
        const phoneNumber = phoneNumbers[i].innerText;

        coins -= 20;
        coinCounter.innerText = coins;

        alert(`Calling ${serviceName} at ${phoneNumber}`);
    });
}