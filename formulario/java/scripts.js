const form = document.querySelector("#form");
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //verifica se o nome esta vazio

  if (nameInput.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }
  // Verifica se o e-mail está preenchido e se é válido

  if (emailInput.value === "" || lisEmailValido( emailInput.value)) {
    alert("Por favor, preencha o seu email");
  }
  // verifica se a está preenchida
  if(!ValidatePassword(passwordInput.value)){
    alert("A senha precisa ser no minimo 8 digito");
    return  
  }

  //Verificar se a situação foi selecionado

  if(jobSelect.value === ""){
    alert("Selecione uma opção")
  }

  //Se todos os campos estiveren corretamente preenchidos, envie o form

  form.submit();
});

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

//Função que valida a senha 
function ValidatePassword(password,minDigits) {
    if(password.length >= minDigits){
        //Senha valida
        return true;
    }
    //Senha não inválidade
    return false;
}