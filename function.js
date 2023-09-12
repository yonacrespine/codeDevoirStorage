// 1

function saveEmail() {
  const emailBox = document.getElementById("myEmail");
  const email = emailBox.value;
  const now = new Date();
  now.setMonth(now.getMonth() + 3);
  document.cookie = "email=" + email;
  "expires=" + now;
}

function loadEmail() {
  alert(document.cookie);
}

// 2

// function saveFullName(){
//     const firstNameBox= document.getElementById("firstName")
//     const lastNameBox= document.getElementById("lastName")

//     const firstName= firstNameBox.value
//     const lastName= lastNameBox.value

//     sessionStorage.setItem("firstName", firstName)
//     sessionStorage.setItem("lastName", lastName)

// }

// function loadFullName(){
//     const firsName= sessionStorage.getItem("firstName")
//     const lastName=sessionStorage.getItem("lastName")
//     console.log( firsName +" "+ lastName)
// }

// 3

// function saveAdress(){
//     const country= document.getElementById("country").value
//     const street= document.getElementById("street").value
//     const numberStreet= document.getElementById("numberStreet").value
//     const mikoud= document.getElementById("mikoud").value

//     localStorage.setItem("country", country)
//     localStorage.setItem("street", street)
//     localStorage.setItem("numberStreet", numberStreet)
//     localStorage.setItem("mikoud", mikoud)

//     const adress={
//         country: country,
//         street: street,
//         numberStreet: numberStreet,
//         mikoud: mikoud

//         }

//         const json= JSON.stringify(adress)
//         localStorage.setItem("adress",json)

// }

// function loadAdress(){

//     const json= localStorage.getItem("adress")
//     const adress= JSON.parse(json)
//     console.log(adress)
// }

// 4

// function checkDetail(){
//     const countryBox= document.getElementById("country")
//     const streetBox= document.getElementById("street")
//     const numberStreetBox= document.getElementById("numberStreet")
//     const mikoudBox= document.getElementById("mikoud")
//     const container= document.getElementById("container")

//     countryBox.style.backgroundColor=""
//     streetBox.style.backgroundColor=""
//     numberStreetBox.style.backgroundColor=""
//     mikoudBox.style.backgroundColor=""

//     if( countryBox.value===""){
//         event.preventDefault()
//         countryBox.focus()
//         container.innerHTML= "Missing country"
//         countryBox.style.backgroundColor="pink"
//         return

//     }
//     if( streetBox.value===""){
//         event.preventDefault()
//         streetBox.focus()
//         container.innerHTML= "Missing street"
//         streetBox.style.backgroundColor="pink"
//         return
//     }
//     if( numberStreetBox.value===""){
//         event.preventDefault()
//         numberStreetBox.focus()
//         container.innerHTML= "Missing number"
//         numberStreetBox.style.backgroundColor="pink"
//         return

//     }
//     if( mikoudBox.value===""){
//         event.preventDefault()
//         mikoudBox.focus()
//         container.innerHTML= "Missing mikoud"
//         mikoudBox.style.backgroundColor="pink"
//         return

//     }

// }

// 5

function cColor() {
  const selectColorBox = document.getElementById("selectColor");
  const selectColor = selectColorBox.value;
  const myBody = document.getElementById("myBody");
  myBody.style.background = selectColor;
}

function saveColor() {
  const selectColorBox = document.getElementById("selectColor");
  const selectColor = selectColorBox.value;

  localStorage.setItem("color", selectColor);
}

function loadColor() {
  const color = localStorage.getItem("color");
  const selectColorBox = document.getElementById("selectColor");


  const myBody = document.getElementById("myBody");
  myBody.style.background = color;
   selectColorBox.value= color
}
