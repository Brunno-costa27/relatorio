 function formatNumber(num){
  return num?.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
 }

 function separateWords(input) {
  // Adicionar um espaço antes de cada letra maiúscula, exceto para a primeira letra
  let result = input.replace(/([A-Z])/g, ' $1');

  // Transformar a primeira letra em maiúscula
  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
}

function formatNumberUSD(number) {
  const numberString = number.toString();
  console.log(numberString)
  return numberString.replace(',', '.')
}




  

  export {
    formatNumber, 
    separateWords,
    formatNumberUSD
  }
  