/* ==========================================
   Skyler Commands
   Version: 1.0
========================================== */

function processCommand(text) {

    text = text.toLowerCase().trim();

    const tool = findBestTool(text);

    if (tool) {

        transcript.innerHTML =
            "✅ Opening " + tool.name;

        speak("Opening " + tool.name);

        setTimeout(function () {

            window.location.href = tool.url;

        }, 1000);

    } else {

        transcript.innerHTML =
            "❌ Sorry, I couldn't find a matching tool.";

        speak("Sorry, I couldn't find a matching tool.");

    }

}