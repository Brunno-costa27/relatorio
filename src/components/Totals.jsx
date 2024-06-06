import moment from 'moment';
import { formatNumber, formatNumberUSD } from "../functions/functions.js"

export function Totals({ t, language, resumo}){

    return(
        <>
            {/* Totais */}

    <table className="w-full flex flex-col table-auto">
            <thead className="text-sm">
                <tr>
                <th className="text-2xl  font-normal text-black py-4 ">{t('totais.title')}</th>
                </tr>
            </thead>
        <tbody className="text-xs">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black  px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalAdministratorInCommissions')}</div>
                <div className="text-black">{t('totais.totalAdministratorInCommissionsValue', {
                  value: language =='en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">{t('totais.administratorDeductions')}</div>
                <div className="text-black">{t('totais.administratorDeductionsValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalOwnershipInTransfers')}</div>
                <div className="text-black">{t('totais.totalOwnershipInTransfersValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.homeownerDeductions')}</div>
                <div className="text-black">{t('totais.homeownerDeductionsValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.ownerSubtotal')}</div>
                <div className="text-black">{t('totais.ownerSubtotalValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.administratorSubtotal')}</div>
                <div className="text-black">{t('totais.administratorSubtotalValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
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