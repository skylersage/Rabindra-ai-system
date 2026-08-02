/* ==========================================
   Skyler AI Router
   Version: 1.0
========================================== */

function findBestTool(userText) {

    userText = userText.toLowerCase().trim();

    let bestTool = null;
    let highestScore = 0;
    let matchedTools = [];

    TOOLS.forEach(tool => {

        let score = 0;

        tool.keywords.forEach(keyword => {

            keyword = keyword.toLowerCase();

            if (userText.includes(keyword)) {
                score++;
            }

        });

        if (score > 0) {
            matchedTools.push({
                ...tool,
                score: score
            });
        }

        if (score > highestScore) {
            highestScore = score;
            bestTool = tool;
        }

    });

    matchedTools.sort(function (a, b) {
        return b.score - a.score;
    });

    return {
        tool: bestTool,
        matches: matchedTools
    };

}
