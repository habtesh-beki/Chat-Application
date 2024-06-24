// const socket = io();


// const storeMessage = document.querySelector('.store-message')
// const Input = document.querySelector('.input-message')
// const Send  = document.querySelector('.send-btn')

// let message;
// Send.addEventListener('click', (e) => {
//     e.preventDefault();
//   message = Input.value;  
// if(message){
//    socket.emit('chat message' , message)
//    addMessageToDOM(message)
//     Input.value='';
// }
// } )

// socket.on('chat message' , (message) => {
//   addMessageToDOM(message)
// })

// function addMessageToDOM(message) {
//    const newHTML = `
//      <li class="send-message">${message}</li>
//     `
//     storeMessage.innerHTML +=newHTML;
// }

const socket = io();

const storeMessage = document.querySelector('.store-message');
const input = document.querySelector('.input-message');
const send = document.querySelector('.send-btn');

send.addEventListener('click', (e) => {
    e.preventDefault();
    const message = input.value;  
    if (message) {
        socket.emit('chat message', message);
        addMessageToDOM(message);
        input.value = '';
    }
});

socket.on('chat message', (message) => {
    addMessageToDOM(message);
});

function addMessageToDOM(message) {
    const newHTML = `
        <li class="send-message">${message}</li>
    `;
    storeMessage.innerHTML += newHTML;
}
