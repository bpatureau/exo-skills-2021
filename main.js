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
  },
  {
    "id": "2",
    "titre": "Murinsel, ou l’île sur la Mur",
    "excerpt":"<p>Ce bâtiment insolite en forme de coquillage géant, sert à relier les 2 rives de la Mur (la rivière de Graz), et renferme un café et un amphithéâtre.</p>",
    "description": "<p>À ne surtout pas manquer si vous partez visiter Graz : l’île sur la Mur ! Conçut au moment où Graz participait au concours de la capitale européenne de la culture en 2003, l’île est en fait une oeuvre d’art réalisé par l’artiste New-Yorkais Vito Acconci. </p>",
    "image": "murinsel-graz.jpg",
    "entryDate": "27/10/2015",
    "updateDate": "02/01/1974"
  }
]
let user = {
  username : "bast",
  password : "pass"
}
let open_login_menu = () => {
  module.innerHTML = '<form class="module-form-connexion" action=""><label for="username">username</label><input class="username-input" type="text" name="username"><label for="password">password</label><input class="password-input" type="password" name="password"><button class="submit-form-connexion">envoyer</button></form><button class="module-open-signup">pas de compte</button>'
  let formConnexion = document.querySelector(".module-form-connexion")
  let form = document.querySelector(".module-form-connexion")
  let usernameInput = document.querySelector(".username-input")
  let passwordInput = document.querySelector(".password-input")
  console.log("username = " + user.username)
  console.log("password = " + user.password)
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
  //Evenement click sur le formualaire de connexion
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
        if(activite.prix) {
        listeActivites.innerHTML += `<p>${activite.titre}</p><p>${activite.prix}</p><p>${activite.description}</p>` 
      }else{
        listeActivites.innerHTML += `<p>${activite.titre}</p><p>Gratuit</p><p>${activite.description}</p>`
      }
      })
      }else{

      }
    }
  })
}
console.log(module)
module.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.classList.contains('module-open')) {
    open_login_menu()

  }
  if(e.target.classList.contains("module-open-signup")) {
    module.innerHTML = '<form class="module-form-signup" action=""><label for="username">username</label><input class="username-input" type="text" name="username"><label for="password">password</label><input class="password-input" type="password" name="password"><label for="email">email</label><input class="email-input" name="email"><button class="submit-form-signup">envoyer</button></form>'
    let formSignup = document.querySelector(".module-form-signup")
  formSignup.addEventListener("click", e => {
    e.preventDefault()
    let usernameInput = document.querySelector(".username-input")
    let passwordInput = document.querySelector(".password-input")
    if(e.target.classList.contains("submit-form-signup")) {
      user = {
        username : usernameInput.value,
        password : passwordInput.value
      }
      open_login_menu()
    }
  })
  }
})
