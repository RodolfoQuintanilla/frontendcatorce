const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const emailAddress = document.querySelector("#emailAddress");
const password = document.querySelector("#password");



function formulario() {

   if (firstName.value.length === 0 || lastName.value.length === 0 || emailAddress.value.length === 0 || password.value.length === 0) {
      agregarEstilos();
      return
   } else {

   }
}

function agregarEstilos() {

}