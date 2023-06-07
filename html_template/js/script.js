const askName = () => {
  let reponse = prompt("Quel est votre nom ?");
  let hello = "👋" + " " + "Bonjour" + " " + reponse;
  //   console.log(hello);
  document.body.innerHTML += `${hello}` + "<br/>";
};

askName();

const askBirthYear = () => {
  let dateanswer = prompt("Quel est votre année de naissance ?");
  let age = 2023 - dateanswer;
  document.body.innerHTML += "Vous avez" + " " + `${age}` + " " + "ans";
  //   console.log(age);
};

askBirthYear();
