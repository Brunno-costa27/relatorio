import { formatNumberByLanguage } from "../functions/functions.js"

export function Totals({ t, language, currency, summary}){

    return(
        <>

    <table className="w-full flex flex-col table-auto">
            <thead className="text-sm">
                <tr>
                <th className="text-2xl font-normal text-black py-4 ">{t('totais.title')}</th>
                </tr>
            </thead>
        <tbody className="text-xs">
            {summary.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black  px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalAdministratorInCommissions')}</div>
                <div className="text-black">{t('totais.totalAdministratorInCommissionsValue', {
                  value:  formatNumberByLanguage(item.comissions.adminValue, currency, language) 
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">{t('totais.administratorDeductions')}</div>
                <div className="text-black">{t('totais.administratorDeductionsValue', {
                  value:  formatNumberByLanguage(item.comissions.adminValue, currency, language) 
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalOwnershipInTransfers')}</div>
                <div className="text-black">{t('totais.totalOwnershipInTransfersValue', {
                  value: formatNumberByLanguage(item.comissions.ownerValue, currency, language) 
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.homeownerDeductions')}</div>
                <div className="text-black">{t('totais.homeownerDeductionsValue', {
                  value: formatNumberByLanguage(item.comissions.ownerValue, currency, language) 
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.ownerSubtotal')}</div>
                <div className="text-black">{t('totais.ownerSubtotalValue', {
                  value: formatNumberByLanguage(item.comissions.ownerValue, currency, language) 
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.administratorSubtotal')}</div>
                <div className="text-black">{t('totais.administratorSubtotalValue', {
                  value: formatNumberByLanguage(item.comissions.adminValue, currency, language) 
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