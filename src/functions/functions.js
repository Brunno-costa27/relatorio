 const formatNumber = num => {
    return num?.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatarMoeda = (numero) => {
    const local = t('locale'); // Obtenha o local atual
    const numeroFormatado = new Intl.NumberFormat(local, {
      style: 'currency',
      currency: 'BRL', // Substitua pelo código de moeda apropriado
    }).format(numero);
    return numeroFormatado;
  };

  

  export default formatNumber;formatarMoeda
  