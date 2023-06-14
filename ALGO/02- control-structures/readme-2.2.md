# Reminders

## const readlineSync = require("readline-sync");
// Importe le module readline-sync qui permet de lire l'entrée utilisateur//

## let minAge = readlineSync.question('Please enter the minimum age:');
## let maxAge = readlineSync.question('Please enter the maximum age:');
## let currentAge = readlineSync.question('Please enter the current age:');

// Demande à l'utilisateur d'entrer l'âge minimum, l'âge maximum et l'âge actuel, puis stocke les valeurs dans les variables minAge, maxAge et currentAge//

## if (minAge > maxAge ) {
## console.log("Sorry but it seems that you entered an invalid value");
## }else if (currentAge >= minAge && currentAge <= maxAge) {
## console.log("The current age is within the specified range.");
## }else 
## console.log("The current age isn't within the specified range");

// Vérifie si l'âge minimum est supérieur à l'âge maximum. Si c'est le cas, affiche un message d'erreur.
// Sinon, vérifie si l'âge actuel est compris entre l'âge minimum et l'âge maximum. Si oui, affiche un message indiquant que l'âge actuel est dans la plage spécifiée.
// Si aucune des conditions précédentes n'est satisfaite, affiche un message indiquant que l'âge actuel n'est pas dans la plage spécifiée.
