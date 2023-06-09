const askName = () => {
  let reponse = prompt("Quel est votre nom ?");
  let hello = "👋" + " " + "Bonjour" + " " + reponse;
  //   console.log(hello);
  document.body.innerHTML += `<h2>${hello} <br/> </h2>`;
};

const askBirthYear = () => {
  let dateanswer = prompt("Quel est votre année de naissance ?");
  let monthanswer = prompt("Quel est votre mois de naissance ?");
  let age = 2023 - dateanswer;
  let month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  if (month.indexOf(monthanswer) + 1 > 6) {
    age = age - 1;
  }

  document.body.innerHTML += `<h3> Vous avez ${age} ans</h3>`;
  //   console.log(age);
};

askName();
askBirthYear();
