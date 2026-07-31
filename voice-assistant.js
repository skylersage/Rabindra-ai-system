
document.addEventListener("DOMContentLoaded", function () {
const voiceBtn = document.getElementById("voiceBtn");
const voicePanel = document.getElementById("voicePanel");
const closeVoice = document.getElementById("closeVoice");

const startListening = document.getElementById("startListening");
const stopListening = document.getElementById("stopListening");

const transcript = document.getElementById("transcript");
window.assistantStatus =
document.getElementById("assistantStatus");
const skylerBtn = document.getElementById("skylerBtn");
const moreSuggestions = document.querySelectorAll(".skylerVoiceMoreSuggestion");

let suggestionsExpanded = false;

skylerBtn.addEventListener("click", function () {

    suggestionsExpanded = !suggestionsExpanded;

    moreSuggestions.forEach(function (item) {

        item.style.display = suggestionsExpanded
            ? "list-item"
            : "none";

    });

    skylerBtn.innerHTML = suggestionsExpanded
        ? "&#9650; Show Less"
        : "&#9660; See More";

});
const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if (!SpeechRecognition) {

    transcript.innerHTML =
    "❌ Voice Recognition is not supported in this browser.";

    startListening.disabled = true;

} else {

    const recognition = new SpeechRecognition();
    function speak(text) {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

    }

    recognition.lang = "en-US";

    recognition.interimResults = true;

    recognition.continuous = true;

    recognition.maxAlternatives = 1;

/* -------------------------
       Floating Button
    -------------------------- */

    voiceBtn.onclick = () => {

        voicePanel.classList.add("show");
        document.body.style.overflow = "hidden";
        

    };

    closeVoice.onclick = () => {

        voicePanel.classList.remove("show");
        document.body.style.overflow = "";
    };

    /* -------------------------
       Start Listening
    -------------------------- */

    startListening.onclick = () => {

        recognition.start();

    };

    /* -------------------------
       Stop Listening
    -------------------------- */

    stopListening.onclick = () => {

        recognition.stop();

    };

    /* -------------------------
       Started
    -------------------------- */

    recognition.onstart = () => {

        assistantStatus.innerHTML =
        "🎙 Listening...";

        voicePanel.classList.add("listening");

    };

    /* -------------------------
       Stopped
    -------------------------- */

    recognition.onend = () => {

        assistantStatus.innerHTML =
        "Ready";

        voicePanel.classList.remove("listening");

    };

    /* -------------------------
       Speech Result
    -------------------------- */

    recognition.onresult = (event) => {
  
        let text = "";

        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {

            text += event.results[i][0].transcript;

        }

        transcript.innerHTML = text;

        console.log("User Said:", text);
        

if (event.results[event.results.length - 1].isFinal) {
    processCommand(text);
                }
        /*
            Part 2 will process
            the text here.
        */

    };

    /* -------------------------
       Error
    -------------------------- */

    recognition.onerror = (event) => {

        assistantStatus.innerHTML =
        "Error";

        transcript.innerHTML =
        "⚠ " + event.error;

    };

}
});
