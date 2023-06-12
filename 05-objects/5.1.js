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
let tvSeries = askTvSerie();
let tvSerieJson = JSON.stringify(tvSeries);
console.log(tvSerieJson);