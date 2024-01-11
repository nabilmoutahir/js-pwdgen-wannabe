// Chiedo il Nome
const UserFirstName = prompt("Qual è il tuo Nome?");
console.log(UserFirstName);

// Chiedo il Cognome
const UserLastName = prompt("Qual è il tuo Cognome?");
console.log(UserLastName);

// Chiedo il Colore Preferito
const UserFavColor = prompt("Qual è il tuo colore preferito?");
console.log(UserFavColor);

// Genero la Password
const NewPassword = UserFirstName + UserLastName + UserFavColor + 23;
console.log(NewPassword)

// Scrivo la password sulla pagina
const PwdResult = document.getElementById("pwd_reveal");
PwdResult.innerHTML= "La tua password è" + " " + NewPassword;