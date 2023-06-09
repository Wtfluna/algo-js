# Ce code demande à l'utilisateur d'entrer un nombre entre 1 et 7, puis affiche le jour correspondant à ce nombre.

* La première ligne du code importe le module readline-sync qui permet de lire l'entrée utilisateur.
* Ensuite, l'utilisateur est invité à entrer un nombre entre 1 et 7 en utilisant readlineSync.question("Enter a number between 1 and 7:"). La valeur saisie par l'utilisateur *est stockée dans la variable number.*
* Le code utilise une structure de contrôle *switch* pour vérifier la valeur de number et exécuter le code correspondant à la valeur saisie.
* Chaque case dans la structure switch correspond à une valeur possible de number. Si la valeur de number correspond à l'une des valeurs spécifiées, le code à l'intérieur du case correspondant est exécuté.
* Par exemple, si number est égal à "1", le code à l'intérieur du case "1" est exécuté, ce qui affiche "Monday" dans la console à l'aide de console.log("Monday"). Ensuite, l'instruction break est utilisée pour sortir de la structure switch et passer à la suite du code.
* Si la valeur de number ne correspond à aucune des valeurs spécifiées dans les case, le code à l'intérieur du default est exécuté. Dans ce cas, le message "Invalid number. Please enter a number between 1 and 7." est affiché dans la console à l'aide de console.log("Invalid number. Please enter a number between 1 and 7.").
* Après l'exécution du code correspondant à la valeur de number, l'exécution se termine et le programme se termine.

* En résumé, ce code demande à l'utilisateur d'entrer un nombre entre 1 et 7, puis affiche le jour correspondant à ce nombre. Si l'utilisateur entre un nombre invalide, un message d'erreur est affiché.