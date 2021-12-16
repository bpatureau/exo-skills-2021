let module = document.querySelector(".module")
let registeredActivites = [
  {
      "id": "1",
      "titre": "Le château d'Eggenberg",
      "prix": "15€",
      "excerpt": "<p>Si vous vous demandez que faire à Graz, sachez qu’ici, vous retrouverez également plusieurs musées dont le musée de l’archéologie ou le cabinet de la Monnaie, ainsi qu’un grand parc.</p>",
      "description": "<p>Inscrit au patrimoine mondial de l’UNESCO, c’est le plus grand château de Styrie. Construit en 1625 par Hans Ulrich Von Eggenberg, conseiller impérial de Ferdinand II, sa construction été organisée autour du temps et des saisons : 4 tours pour les 4 saisons, 365 fenêtres pour les jours, 31 pièces à chaque étage pour les mois, 24 salles d’apparat pour les heures, etc.…</p>",
      "image": "chateau-eggenberg-graz.jpg",
      "entryDate": "27/10/2015",
      "updateDate": "02/01/1974" 
  }
]
let user = {
  username : "bast",
  password : "pass"
}
console.log(module)
module.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.classList.contains('module-open')) {
    module.innerHTML = '<password:>username: bast et password: pass</p><form class="module-form-connexion" action=""><label for="username">username</label><input class="username-input" type="text" name="username"><label for="password">password</label><input class="password-input" type="password" name="password"><button class="submit-form-connexion">envoyer</button></form><button class="module-open-signup">pas de compte</button>'
    let formConnexion = document.querySelector(".module-form-connexion")
    let usernameInput = document.querySelector(".username-input")
    let passwordInput = document.querySelector(".password-input")
    formConnexion.addEventListener("click", e => {
      e.preventDefault()
      if(e.target.classList.contains("submit-form-connexion")){
        console.log(user.username)
        console.log(usernameInput.value)
        console.log(user.password)
        console.log(passwordInput.value)
        if(usernameInput.value == user.username && passwordInput.value == user.password) {
          console.log("bienvenu")
          module.innerHTML = '<button>obtenir l\'activité du jour</button><ul class="liste-activites"></ul>'
          let listeActivites = document.querySelector(".liste-activites")
        registeredActivites.forEach(activite => {
          listeActivites.innerHTML =  `<p>${activite.titre}</p>` 
        })
        }
      }

    })
  }
})
