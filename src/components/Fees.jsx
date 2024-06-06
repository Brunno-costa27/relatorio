import { formatNumber } from "../functions/functions.js"

export function Fees({t, language, resumo}){


    function formatNumberUSD(number) {
        const numberString = number.toString();
        console.log(numberString)
        return numberString.replace(',', '.')
      }
    return(
        <>
            {/* Taxas */}

    <h1 className="text-2xl  font-normal text-black">{t('fees.title')}</h1>

<table className="w-full flex flex-col justify-between  table-auto">
        <thead className="text-sm">
            <tr className="flex justify-between px-4">
            <th className="flex text-left  text-black py-4 ">{t('fees.titleTable')}</th>
            <th className="flex text-left  text-black py-4 ">{t('fees.totalValue')}</th>
            </tr>
        </thead>
    <tbody className="text-xs">
        {resumo.map((item) => (
            <>
        <tr className="flex">
        <td className="w-full text-left border-y border-black px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.cleaningFees')}</div>
            <div className="text-black font-bold">{t('fees.cleaningFeesValue', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)) : formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className="text-black-800">{t('fees.bedLinenFees')}</div>
            <div className="text-black font-bold">{t('fees.bedLinenFeesValeu', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.LINEN_FEE)) : formatNumber(resumo[0].taxBreakDown.LINEN_FEE)
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.serviceCharge')}</div>
            <div className="text-black font-bold">{t('fees.serviceChargeValue', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)) : formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.utilityLinenFees')}</div>
            <div className="text-black font-bold">{t('fees.utilityLinenFeesValue', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)) : formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.otherFees')}</div>
            <div className="text-black font-bold">{t('fees.otherFeesValue', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.OTHER_FEE)) : formatNumber(resumo[0].taxBreakDown.OTHER_FEE)
            })}</div>
            </div>
        </td>
        </tr>
        
       

        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-black font-bold">{t('fees.totalValue')}</div>
            <div className="text-black font-bold">{t('fees.totalValueValue', {
              value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxTotal)) : formatNumber(resumo[0].taxTotal)
            })}</div>
            </div>
        </td>
        </tr>
        </>
        ))}
    </tbody>
</table>
        </>
    )
}