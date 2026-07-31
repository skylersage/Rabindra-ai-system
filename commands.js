/* ==========================================
   Skyler Commands
   Version: 1.0
========================================== */

function processCommand(text) {

    text = text.toLowerCase().trim();

    const tool = findBestTool(text);

    if (tool) {

        assistantStatus.innerHTML = "🔍 Searching...";

        setTimeout(function () {
            assistantStatus.innerHTML = "✅ Found: " + tool.name;
        }, 300);

        setTimeout(function () {
            assistantStatus.innerHTML = "🚀 Opening " + tool.name;
        }, 700);

        setTimeout(function () {
            window.location.href = tool.url;
        }, 1200);

    } else {

        assistantStatus.innerHTML = "🔍 Searching...";

        setTimeout(function () {
            assistantStatus.innerHTML = "❌ Tool not found";
        }, 500);

        setTimeout(function () {
            assistantStatus.innerHTML = "Ready";
        }, 1800);

    }

}
