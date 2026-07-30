/* ==========================================
   Skyler Commands
   Version: 1.0
========================================== */

function processCommand(text) {

    text = text.toLowerCase().trim();

    const tool = findBestTool(text);

    if (tool) {

        alert("Opening " + tool.name);

        window.location.href = tool.url;

    } else {

        alert("Tool not found");

    }

}
