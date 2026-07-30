/* ==========================================
   Skyler AI Router
   Version: 1.0
========================================== */

function findBestTool(userText) {

    userText = userText.toLowerCase().trim();

    let bestTool = null;
    let highestScore = 0;

    TOOLS.forEach(tool => {

        let score = 0;

        tool.keywords.forEach(keyword => {

            keyword = keyword.toLowerCase();

            if (userText.includes(keyword)) {

                score++;

            }

        });

        if (score > highestScore) {

            highestScore = score;
            bestTool = tool;

        }

    });

    return bestTool;

}