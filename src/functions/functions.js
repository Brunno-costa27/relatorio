 const formatNumber = num => {
    return num?.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  export default formatNumber