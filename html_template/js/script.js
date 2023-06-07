const askName = () => {
  let reponse = prompt("Quel est votre nom ?");
  let hello = "👋" + " " + "Bonjour" + " " + reponse;
  //   console.log(hello);
  document.body.innerHTML += `<h2>${hello} <br/> </h2>`;
};

askName();

const askBirthYear = () => {
  let dateanswer = prompt("Quel est votre année de naissance ?");
  let age = 2023 - dateanswer;
  document.body.innerHTML += `<h3> Vous avez ${age} ans</h3>`;
  //   console.log(age);
};

askBirthYear();
