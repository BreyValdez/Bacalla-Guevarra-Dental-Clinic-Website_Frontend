// Toggle chat window visibility
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'block' : 'none';
}

// Handle enter key press for sending messages
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Send user message and get a chatbot response
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (!message) return;

    displayMessage(message, 'user');
    saveMessage(message, 'user');
    userInput.value = '';

    // Chatbot responses
    let response;

    // Greeting responses
    if (["hi", "hello", "hey"].some(greet => message.toLowerCase().includes(greet))) {
        response = "Hello! Welcome to Bacalla-Guevarra dental clinic. How can I assist you today?";
    }
    // Appointment information
    else if (message.toLowerCase().includes('appointment')) {
        response = "You can schedule an appointment by calling us at +63 998 923 7665 or click the button on the Homepage for directly communicate with our dentist!";
    }
    // Clinic hours
    else if (message.toLowerCase().includes('hours')) {
        response = "Our clinic is open Monday to Friday from 10:00am to 5:00pm and Saturday 10:00am to 12nn only.";
    }
    // Services offered
    else if (message.toLowerCase().includes('services')) {
        response = "We offer a variety of services, including cleaning, restoration, extraction, dentures, and orthodontics (like braces).";
    }
    // Procedure details
    else if (message.toLowerCase().includes('procedure')) {
        response = "During a typical procedure, our dentist will first assess your dental health, explain the steps, and ensure you are comfortable before starting. We always prioritize a pain-free experience!";
    }
    // Pricing information
    else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
        response = "The price range may vary depending on the specific procedure and the extent of damage to your teeth. For more details, please visit our homepage and click the button to connect directly with our dentist. Thank you!";
    }
    // Default response
    else {
        response = "Hello there, I'm arnie the chatbot! I'm here to help you, you can ask me about appointments, hours, services, or procedures of our clinic. If you have other inquiries please click the button on the Homepage to talk to a person.";
    }

    displayMessage(response, 'bot');
    saveMessage(response, 'bot');
}

// Display message in the chat
function displayMessage(text, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Save a message to local storage
function saveMessage(text, sender) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ text, sender });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Load saved messages from local storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(message => {
        displayMessage(message.text, message.sender);
    });
}

// Load messages when the page loads
window.onload = loadMessages;
