import { formatNumber } from "../functions/functions.js"

export function ExpensesAndAdjustments({t, language, resumo}) {


    function formatNumberUSD(number) {
        const numberString = number.toString();
        console.log(numberString)
        return numberString.replace(',', '.')
      }
    return(
        <>
            {/* Despesas e ajustes */}

    <h1 className="text-2xl font-normal text-black py-5">{t('expensesAndAdjustments.title')}</h1>

<table className="w-full flex flex-col table-auto">
  <thead  className="flex text-center text-sm">
    <tr className="w-full flex justify-center items-center">
      <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('expensesAndAdjustments.header.expenses')}</th>
      <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.maturity')}</th>
      <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.admValue')}</th>
      <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.propValue')}</th>

    </tr>
  </thead>
  <tbody className="text-xs">
    {resumo.map((item) => (
      <tr className="w-full flex text-center" key={item.categoria}>
        <td className="w-full text-left border-y border-black px-4 py-4  border-t-0 font-bold">{t('expensesAndAdjustments.total')}</td>
        <td className="w-full  text-left border-y border-black px-4 py-4 border-t-0  font-bold"></td>
        <td className="w-full text-left border-y border-black px-4 py-4  border-t-0 font-bold">{t('expensesAndAdjustments.admValue', {
          value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
        })}</td>
        <td className="w-full text-right border-y border-black px-4 py-4 border-t-0  font-bold">{t('expensesAndAdjustments.propValue', {
          value:language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
        })}</td>
      </tr>
    ))}
  </tbody>
</table>
        </>
    )
}