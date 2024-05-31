 const formatNumber = num => {
    return num?.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  export const formatCoin = (num, currency) => {
    return num?.toLocaleString('pt-br', {  style: "currency", currency: currency ||  "BRL"})
  }

  

  export default formatNumber
  