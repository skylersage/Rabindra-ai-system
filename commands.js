/* ==========================================
   Skyler Commands
   Version: 1.0
========================================== */
function processCommand(text) {

    text = text.toLowerCase().trim();

    const result = findBestTool(text);
    const tool = result.tool;
    const matches = result.matches;

    if (tool) {

        if (window.voiceReplyEnabled) {

            if (matches.length > 1) {
                window.speak("I found multiple tools. Opening " + tool.name + " first.");
            } else {
                window.speak("Opening " + tool.name);
            }

        }

        assistantStatus.innerHTML = "🔍 Searching...";

        setTimeout(function () {

            if (matches.length > 1) {
                assistantStatus.innerHTML =
                    "⚠️ Multiple tools found. Opening " + tool.name + " first.";
            } else {
                assistantStatus.innerHTML = "✅ Found: " + tool.name;
            }

        }, 300);

        setTimeout(function () {
            assistantStatus.innerHTML = "🚀 Opening " + tool.name;
        }, 700);

        setTimeout(function () {
            window.location.href = tool.url;
        }, 1200);

    } else {

        if (window.voiceReplyEnabled) {
            window.speak("Sorry, I couldn't find that tool.");
        }

        assistantStatus.innerHTML = "🔍 Searching...";

        setTimeout(function () {
            assistantStatus.innerHTML = "❌ Tool not found";
        }, 500);

        setTimeout(function () {
            assistantStatus.innerHTML = "Ready";
        }, 1800);

    }

}
