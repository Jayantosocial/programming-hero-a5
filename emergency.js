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

const callList = document.getElementById('call-list');

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

        const now = new Date();
        const localTimeWhenCall = now.toLocaleTimeString();

        const callDetail = document.createElement('div');
        callDetail.className = 'flex call-details';
        callDetail.innerHTML = `
            <div>
                <h4>${serviceName}</h4>
                <p>${phoneNumber}</p>
            </div>
            <div>${localTimeWhenCall}</div>
        `;
        
        callList.appendChild(callDetail);
    });
}

const clearButton = document.getElementById('button3');

clearButton.addEventListener('click', function () {
    callList.innerHTML = '';
});

const copyButtons = document.getElementsByClassName('button1');
const copyCounter = document.getElementById('copy-count');
let copyCount = 0;

for (const btn of copyButtons) {
    btn.addEventListener('click', function() {
        const card = btn.closest('.card');
        if (!card) return;

        const phoneNumberEl = card.querySelector('.phone-number');
        if (!phoneNumberEl) return;

        const phoneNumber = phoneNumberEl.innerText;
        
        navigator.clipboard.writeText(phoneNumber).then(() => {
            copyCount++;
            copyCounter.innerText = copyCount;
            console.log(`Copied: ${phoneNumber}`);
        }).catch(err => {
            console.error('Failed to copy!', err);
        });
    });
}