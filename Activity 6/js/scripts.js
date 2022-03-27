//Array to store messages
var messages = [];

//Message type lookup object. Similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//see data
var data = [
    {
        type: messageType.out,
        user: 'Rose',
        message: 'Hey do you like to game?'
    },
    {
        type: messageType.in,
        user: 'Brittney',
        message: 'Well not really, what games do you like?'
    },
    {
        type: messageType.out,
        user: 'Rose',
        message: 'Right now I like the Miles Morales Spider-Man game.'
    }
];

//message constructor function
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//function to create and return an element for the supplied message
function createMessageElement(message){
    var messageText = document.createTextNode(
        message.user + ': '+ message.message
    );


//create the element and add the message text
var messageEl = document.createElement('div');
messageEl.appendChild(messageText);

//add a class using the message type
messageEl.className = message.type;

return messageEl;
}

//button click event handler to add a new message
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

//determine message type and set message variables accordingly
switch (event.target.id){
    case 'send-button':
        user = 'Rose';
        type = messageType.out;
        break;
    case 'reply-button':
        user = 'Brittney';
        type = messageType.in;
        break;
    default:
        user = 'unknown';
        type = messageType.unknown;
}

//create new message
if (messageInput.value != ''){
    //construct a message and add it to the array
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    //create a message element
    var el = createMessageElement(message);


    //add the message element to the DOM
    messagesContainerEl.appendChild(el);

    //reset input
    messageInput.value = '';
}
}

//load seed data from data array above
function loadSeedData() {
    for(var i = 0; i < data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for ( var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //write event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load seed data from data array above
    loadSeedData();

};

init();