function getVoice(){
    
const btnVoice = document.getElementById('btnVoice');
const inpTask = document.getElementById('inpTask');

// Check if the Speech Recognition API is supported in the browser
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        // Configure recognition settings
        recognition.continuous = true;
        recognition.interimResults = true;

        // Handle recognition results
        recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1];
            const transcript = result[0].transcript;
            inpTask.value = transcript;
        };

        // Handle recognition errors
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };
    
        // Start recognition when the button is clicked
        recognition.start();
        btnVoice.classList.remove("w3-theme-d4") 
        btnVoice.classList.add("w3-theme-d1");
        btnVoice.classList.add("listening");
        btnVoice.classList.add("w3-listening-text")
        btnVoice.disabled = true;
        document.getElementById("inpTask").focus();
            
        // Re-enable the button when recognition ends
        recognition.onend = () => {
        btnVoice.classList.remove("listening");
        btnVoice.classList.remove("w3-theme-d1") 
        btnVoice.classList.remove("w3-listening-text")
        btnVoice.classList.add("w3-theme-d4");
        btnVoice.disabled = false;
        };
    } else {
        inpTask.textContent = "Speech recognition not supported in this browser.";
    }
}    