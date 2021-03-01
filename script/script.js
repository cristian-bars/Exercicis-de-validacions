let myPass = document.getElementById('password');
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let errors = 0;

//Funció per fer la cerca
function search(event){
    let search = document.getElementById("btn-search").value;
    let searchBook = [];
    let book;
    
    //Comporbar que la paraula introduida sigui superior a 3 caràcters
    if (search.length>3){
        document.getElementById("btn-search").classList.remove("is-invalid");
        //Per buscar els llibres recorrem l'array amb els llibres i comprobem que hi hagi coincidència
        for(let i = 0; i<books.length;i++){
            
            let str = books[i].title.includes(search);
            //En cas de coincidència guardem el nom del llibre en un array per després mostrar a pantalla
            if (str === true){
                searchBook.push(books[i].title); 
            }
        }
        //Mostrem els llibres trobats a pantalla
        for(i=0;i<=3;i++){
            book = document.getElementsByClassName("col-3");
            book[i].innerHTML = books[i].title;
        }
        
    }else{
        //Si la paraula a buscar no conté tres paraules mostrem linia vermella d'error
        document.getElementById("btn-search").classList.add("is-invalid");
    }
    //Un cop tot mostrat ens asegurem de que l'esdeveniment s'atura i buidem el camp de cerca
    event.preventDefault();
    document.getElementById("btn-search").value = "";
}

//Creem les crides a les funcions segons el botó de la pantalla que s'hagi clicat
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener('submit', validarFormularioAcceso); 
    document.getElementById("acces").addEventListener('submit', validarFormularioLogin);
    document.getElementById("lookLogin").addEventListener("click", viewLogin);
    document.getElementById("lookAcces").addEventListener("click", viewAcces);
});

//Mostrem els camps d'accés per a accedir
function viewLogin() {
    let clase = 'block';
    let divLog = document.getElementById('login');
    if (divLog.classList.contains(clase)) {
        divLog.classList.remove("block");
    }else{
        divLog.classList.add("block");
    }
}

//Mostrem els camps inputs per a registrar-se
function viewAcces() {
    let clase = 'block';
    let divLog = document.getElementById('acces');
    if (divLog.classList.contains(clase)) {
        divLog.classList.remove("block");
    }else{
        divLog.classList.add("block");
    }
}
    
//Funció per a validar l'accés amb usuari i contrasenya
function validarFormularioAcceso(evento) {
    var acumErrores = 0;
    
    evento.preventDefault();
    let loginUsuario = document.getElementById('inputEmail');
    let loginInfo = document.getElementById('errorEmail');
    let loginPass = document.getElementById('inputPassword');
    let loginPassErr = document.getElementById('errorPass');
    
    //Validar email amb format correcte
    if(loginUsuario.value === "") {
		loginUsuario.classList.add("is-invalid");
		loginInfo.classList.add("invalid-feedback");
		document.getElementById("errorEmail").textContent = "El camp es obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		loginUsuario.classList.add("is-invalid");
		loginInfo.classList.add("invalid-feedback");
		document.getElementById("errorEmail").textContent = "El correu no te el format correcte";
		acumErrores ++;
	}else{
		loginUsuario.classList.remove("is-invalid");
		loginUsuario.classList.add("is-valid");
        document.getElementById("errorEmail").textContent = "";
    }
    
    //Validar contrasenya 
    if(loginPass.value === ""){
        loginPass.classList.add("is-invalid");
		loginPassErr.classList.add("invalid-feedback");
		document.getElementById("errorPass").textContent = "El camp es obligatori";
        acumErrores ++;
    }else{
		loginPass.classList.remove("is-invalid");
		loginPass.classList.add("is-valid");
        document.getElementById("errorPass").textContent = "";
    }
    
    //Si hem acumulat errors retornem false, si tot està correcte retornem true
    if (acumErrores > 0){
        return false;
    }else{
        alert("Tot correcte!!");
		return true;
	}
}

//Funció per a validar el formulari de registre
function validarFormularioLogin(evento){
    var acumErrores = 0;
      
    evento.preventDefault();
    let loginUser = document.getElementById('username');
    let loginInfoUser = document.getElementById('errorUserName');
    let accesEmail = document.getElementById('email');
    let accesEmailErr = document.getElementById('accesErrorEmail');
    let accesLoginPass = document.getElementById('password');
    let accesLoginPassErr = document.getElementById('accesErrorPass');
    let accesLoginPass2 = document.getElementById('password2');
    let accesLoginPassErr2 = document.getElementById('accesErrorPass2');
    let accesProvince = document.getElementById('formControlSelect');
    let accesErrProvince = document.getElementById('errorProvince');
    
    //Validerm el nom d'usuari
    if(loginUser.value === "") {
		loginUser.classList.add("is-invalid");
		loginInfoUser.classList.add("invalid-feedback");
		document.getElementById("errorUserName").textContent = "El camp es obligatori";
        acumErrores ++;
    }else{
		loginUser.classList.remove("is-invalid");
		loginUser.classList.add("is-valid");
        document.getElementById("errorUserName").textContent = "";
    }
    
    //Validem el format del correu correcte
    if(accesEmail.value === "") {
		accesEmail.classList.add("is-invalid");
		accesEmailErr.classList.add("invalid-feedback");
		document.getElementById("accesErrorEmail").textContent = "El camp es obligatori";
        acumErrores ++;
    }else if(!validar_email(accesEmail.value)){
		accesEmail.classList.add("is-invalid");
		accesEmailErr.classList.add("invalid-feedback");
		document.getElementById("accesErrorEmail").textContent = "El correu no te el format correcte";
		acumErrores ++;
	}else{
		accesEmail.classList.remove("is-invalid");
		accesEmail.classList.add("is-valid");
        document.getElementById("accesErrorEmail").textContent = "";
    }
    
    //Validem la contrasenya
    if(accesLoginPass.value === ""){
        accesLoginPass.classList.add("is-invalid");
		accesLoginPassErr.classList.add("invalid-feedback");
		document.getElementById("accesErrorPass").textContent = "El camp es obligatori";
        acumErrores ++;
    }else if(errors !== 0){
		accesLoginPass.classList.add("is-invalid");
		accesLoginPassErr.classList.add("invalid-feedback");
		document.getElementById("accesErrorPass").textContent = "La contrasenya no compleix amb els requisits";
        acumErrores ++;
    }else{
        accesLoginPass.classList.remove("is-invalid");
		accesLoginPass.classList.add("is-valid");
        document.getElementById("accesErrorPass").textContent = "";
    }
    
    //Validem la coincidència amb la contrasenya
    if(accesLoginPass2.value === ""){
        accesLoginPass2.classList.add("is-invalid");
		accesLoginPassErr2.classList.add("invalid-feedback");
		document.getElementById("accesErrorPass2").textContent = "El camp es obligatori";
        acumErrores ++;
    }else if(accesLoginPass2.value !== accesLoginPass.value){
		accesLoginPass2.classList.add("is-invalid");
		accesLoginPassErr2.classList.add("invalid-feedback");
		document.getElementById("accesErrorPass2").textContent = "Les contrasenyes no coincideixen";
        acumErrores ++;
    }else{
        accesLoginPass2.classList.remove("is-invalid");
		accesLoginPass2.classList.add("is-valid");
        document.getElementById("accesErrorPass2").textContent = "";
    }
    
    //Validem el camp província
    if(accesProvince.value === ""){
        accesProvince.classList.add("is-invalid");
		errorProvince.classList.add("invalid-feedback");
		document.getElementById("errorProvince").textContent = "Has de triar una província";
        acumErrores ++;
    }else{
        accesProvince.classList.remove("is-invalid");
		accesProvince.classList.add("is-valid");
        document.getElementById("errorProvince").textContent = "";
    }
    
}
    
//Funció per a validar el format correcte del correu
function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

//Despleguem les condicions de la contrasenya un cop tenim el focus al camp de la contrasenya
myPass.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

//Amaguem les condicions de la contrasenya un cop ja no tenim el focus al camp de la contrasenya
myPass.onblur = function() {
    document.getElementById("message").style.display = "none";
}

//Cada cop que cliquem una tecla al camp contrasenya fem la comprovació del caràcter introduit
myPass.onkeyup = function() {
    errors = 0;
    //Validem que sigui un caràcter en minúscula
    let lowerCaseLetters = /[a-z]/g;
    if(myPass.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("valid");
      errors++;
  }
  
    //Validem que sigui un caràcter en majúscula
    let upperCaseLetters = /[A-Z]/g;
    if(myPass.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      errors++;
    }
  
    //Validem que sigui un caràcter numèric
    let numbers = /[0-9]/g;
    if(myPass.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      errors++;
    }
  
    //Validem que tingui una llargada de 8 caràcters
    if(myPass.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      errors++;
    }
    
  }
  
//Array amb alguns llibres per mostrar a la pantalla
let books = [
    {title: "Harry Potter I", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter II", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter III", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter IV", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter V", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter VI", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"},
    {title: "Harry Potter VII", description: "Un mago que no sabe que es mago", autor: "J. K. Rowling", price: "10€"}];

