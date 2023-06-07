type Match = {
    homeTeam: string;
    awayTeam: string;
    date: Date;
    odds: {
        homeTeam: number;
        awayTeam: number;
    };
};

let matches: Match[] = [
    { homeTeam: "PSG", awayTeam: "Marseille", date: new Date("2023-07-28T20:00:00"), odds: {homeTeam: 1.8, awayTeam: 2.2} },
    { homeTeam: "Real Madrid", awayTeam: "Barcelona", date: new Date("2023-07-29T18:00:00"), odds: {homeTeam: 1.6, awayTeam: 2.4} },
    { homeTeam: "Bayern Munich", awayTeam: "Borussia Dortmund", date: new Date("2023-08-01T15:00:00"), odds: {homeTeam: 2.0, awayTeam: 2.0} }
];

function createMatchCards(matches: Match[]) {

}

createMatchCards(matches);
