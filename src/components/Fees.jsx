import { formatNumber, formatNumberByLanguage } from "../functions/functions.js"

export function Fees({t, language,currency, summary}){


    return(
        <>
            {/* Taxas */}

    <h1 className="text-2xl  font-normal text-black p-y">{t('fees.title')}</h1>

<table className="w-full flex flex-col justify-between table-auto">
        <thead className="text-sm">
            <tr className="flex justify-between px-4">
            <th className="flex text-left  text-black py-4 ">{t('fees.titleTable')}</th>
            <th className="flex text-left  text-black py-4 ">{t('fees.totalValue')}</th>
            </tr>
        </thead>
    <tbody className="text-xs">
        {summary.map((item) => (
            <>
        <tr className="flex">
        <td className="w-full text-left border-y border-black px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.cleaningFees')}</div>
            <div className="text-black font-bold">{t('fees.cleaningFeesValue', {
              value: formatNumberByLanguage(summary[0].taxBreakDown.CLEANING_FEE, currency, language) 
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className="text-black-800">{t('fees.bedLinenFees')}</div>
            <div className="text-black font-bold">{t('fees.bedLinenFeesValeu', {
              value: formatNumberByLanguage(summary[0].taxBreakDown.LINEN_FEE, currency, language)  
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.serviceCharge')}</div>
            <div className="text-black font-bold">{t('fees.serviceChargeValue', {
              value:  formatNumberByLanguage(summary[0].taxBreakDown.SERVICE_FEE, currency, language) 
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.utilityLinenFees')}</div>
            <div className="text-black font-bold">{t('fees.utilityLinenFeesValue', {
              value:  formatNumberByLanguage(summary[0].taxBreakDown.UTILITY_FEE, currency, language) 
            })}</div>
            </div>
        </td>
        </tr>
        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-gray-800">{t('fees.otherFees')}</div>
            <div className="text-black font-bold">{t('fees.otherFeesValue', {
              value:  formatNumberByLanguage(summary[0].taxBreakDown.OTHER_FEE, currency, language) 
            })}</div>
            </div>
        </td>
        </tr>
        
       

        <tr className="flex">
        <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
            <div className="flex justify-between">
            <div className=" text-black font-bold">{t('fees.totalValue')}</div>
            <div className="text-black font-bold">{t('fees.totalValueValue', {
              value:  formatNumberByLanguage(summary[0].taxTotal, currency, language) 
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