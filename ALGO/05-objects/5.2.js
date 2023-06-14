const readlineSync = require("readline-sync");

function askTvSerie() {
    let tvSeries = {}
    let name = readlineSync.question("Enter the name of the serie? ");
    let productionYear = readlineSync.question("Enter the production year? ");

    tvSeries.CastMembers = [];
    let castMembers;
    do {
        castMembers = readlineSync.question("Enter the name of a cast members (leave blank to finish):");
        if (castMembers) {
            tvSeries.CastMembers.push(castMembers);
        }
    } while (castMembers !== "");

    tvSeries.Name = name;
    tvSeries.ProductionYear = productionYear;
    return tvSeries;
}

function randomizeCast(tvSeries) {
    let castMembers = tvSeries.CastMembers;
    let randomizeCast = [];

    while (castMembers.length > 0) {
        let randomIndex = Math.floor(Math.random() * castMembers.length);
        randomizeCast.push(castMembers[randomIndex]);
        castMembers.splice(randomIndex, 1);
    }
    return randomizeCast;
}

let tvSeries = askTvSerie();

console.log(tvSeries);

let Cast = randomizeCast(tvSeries);

console.log(Cast);