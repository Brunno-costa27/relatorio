import 'moment/min/locales'
import { useTranslation } from "react-i18next"
import { useState } from "react"

export function TableHeader() {


    const { t, i18n: { changeLanguage, language}, } = useTranslation()

    const [currentLanguage, setCurrentLanguage] = useState(language)


    function handleChangeLanguage(){
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en' 
        
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return (

        <thead  className="print:table-header flex text-center">
            <tr className="w-full flex justify-center items-center">
            <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('commissionBookings.header.number')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.name')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.channel')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.in')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.oct')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.status')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.item')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.value')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.calc')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.commission')}</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.owner')}</th>
            </tr>
      </thead>
    )
}