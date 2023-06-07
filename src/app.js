"use strict";
let matches = [
    { homeTeam: "PSG", awayTeam: "Marseille", date: new Date("2023-07-28T20:00:00"), odds: { homeTeam: 1.8, awayTeam: 2.2 } },
    { homeTeam: "Real Madrid", awayTeam: "Barcelona", date: new Date("2023-07-29T18:00:00"), odds: { homeTeam: 1.6, awayTeam: 2.4 } },
    { homeTeam: "Bayern Munich", awayTeam: "Borussia Dortmund", date: new Date("2023-08-01T15:00:00"), odds: { homeTeam: 2.0, awayTeam: 2.0 } }
];
function createMatchCards(matches) {
    const matchCardsContainer = document.getElementById('match-cards');
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        const h2 = document.createElement('h2');
        h2.innerText = `${match.homeTeam} VS ${match.awayTeam}`;
        matchCard.appendChild(h2);
        const dateParagraph = document.createElement('p');
        dateParagraph.innerText = `Date: ${match.date.toLocaleDateString()}`;
        matchCard.appendChild(dateParagraph);
        const oddsParagraph = document.createElement('p');
        oddsParagraph.innerText = `Odds: ${match.homeTeam} ${match.odds.homeTeam} | ${match.awayTeam} ${match.odds.awayTeam}`;
        matchCard.appendChild(oddsParagraph);
        matchCardsContainer === null || matchCardsContainer === void 0 ? void 0 : matchCardsContainer.appendChild(matchCard);
    });
}
createMatchCards(matches);
