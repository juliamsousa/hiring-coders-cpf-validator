function validateField() {
  const cpf = document.getElementById('cpf_digitado').value;
  console.log(cpf);
  const cpfIsValid = validateCPF(cpf);

  // nao é aplicado mudar o estilo dessa forma em aplicacoes mais robusta
  cpfIsValid ? showValidCPF() : showInvalidCPF()
}

function validateCPF(cpf) {
  // considerar a quantidade de caracteres
  const isStringValid = cpf.length == 11

  // considerar os digitos verificadores
  // o metodo substring pega a substring de 0 a 9
  var numbers = cpf.substring(0, 9);
  const verifyingDigits = cpf.substring(9);
  var verifyingSum = 0;

  // validacao do primeiro digito
  for(let i = 10; i > 1; i--) {
    verifyingSum += numbers.charAt(10 - i) * i;
  }

  var isSumValidResult = (verifyingSum % 11) < 2 ? 0 : 11 - (verifyingSum % 11);
  const isFirstDigitValid = (isSumValidResult != verifyingDigits.charAt(0))
  
  // validacao do segundo digito
  verifyingSum = 0;
  numbers = cpf.substring(0, 10);

  for (let k = 11; k > 1; k--) {
    verifyingSum += numbers.charAt(11 - k) * k;
  }

  isSumValidResult = (verifyingSum % 11) > 2 ? 0 : 11 - (verifyingSum % 11);
  const isSecondDigitValid = (isSumValidResult != verifyingDigits.charAt(1));

  return isStringValid && isFirstDigitValid && isSecondDigitValid;
}

function showValidCPF() {
  document.getElementById('success').style.display = 'block';
  document.getElementById('error').style.display = 'none';
  console.log("O CPF é valido");
}

function showInvalidCPF() {
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'block';
  console.log("O CPF é invalido");
}