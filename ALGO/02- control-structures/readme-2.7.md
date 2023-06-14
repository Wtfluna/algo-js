# Ce code demande à l'utilisateur de saisir un nombre, puis lui demande de saisir n nombres supplémentaires. Ensuite, il calcule la somme de ces n nombres et l'affiche dans la console.

* La première ligne du code importe le module readline-sync qui permet de lire l'entrée utilisateur.
* Ensuite, l'utilisateur est invité à saisir un nombre en utilisant readlineSync.questionInt("Enter a number:"). La valeur saisie par l'utilisateur est *stockée dans la variable n.* (n = numberOfTimes, convention mathématique, nombre de fois qu'une opération est exécutée).
* Une variable *sum* est initialisée à 0 pour stocker la somme des nombres saisis ultérieurement.
* Ensuite, *une boucle for* est utilisée pour itérer *n fois* et demander à l'utilisateur de saisir un nouveau nombre à chaque itération.
* La variable de compteur i est initialisée à 0 et la boucle s'exécute tant que i est inférieur à n.
* À chaque itération, l'utilisateur est invité à saisir un nouveau nombre en utilisant readlineSync.questionInt("Enter a new number:"). La valeur saisie est stockée dans la variable number.
* La valeur de number est ajoutée à la variable sum en utilisant l'opérateur d'addition +=. Cela permet d'accumuler la somme des nombres saisis.
* Après la boucle, la somme des nombres saisis est affichée dans la console en utilisant console.log("The sum of the numbers is: " + sum).

* En résumé, ce code permet à l'utilisateur de saisir un nombre, puis lui demande de saisir n nombres supplémentaires. Ensuite, il calcule la somme de ces n nombres et l'affiche dans la console.