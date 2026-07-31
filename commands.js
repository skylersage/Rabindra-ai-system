/* ==========================================
   Skyler Commands
   Version: 1.0
========================================== */

if (tool) {

    assistantStatus.innerHTML = "🔍 Searching...";

    setTimeout(function () {

        assistantStatus.innerHTML =
        "✅ Found: " + tool.name;

    }, 700);

    setTimeout(function () {

        assistantStatus.innerHTML =
        "🚀 Opening " + tool.name;

    }, 1400);

    setTimeout(function () {

        window.location.href = tool.url;

    }, 2200);

} else {

    assistantStatus.innerHTML =
    "❌ Tool not found";

    setTimeout(function () {

        assistantStatus.innerHTML = "Ready";

    }, 2500);

           } 
