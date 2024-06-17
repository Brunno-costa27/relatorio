import { useTranslation } from "react-i18next";
import logo from "../assets/image.png"
import data from "../database/data-set"
import moment from 'moment'
import 'moment/dist/locale/pt-br'

export function Header({t, language}){

    moment.locale(language)
    
    const header = [
        data[0].bookings.bookings[0].room[0].meta
    ];

    const method = data[0].bookings.bookings[0].roomType.meta.comissionFee
    const dateString = new Date();

    return(
        <>                       
            <header  className=" w-full flex flex-col gap-3 pb-5">

                <div  className="w-full flex justify-between">
                    <div className="flex-col gap-3">
                        <img className="w-14 rounded-full" src={logo} alt="" />
                    </div>
                    {header.map((item) => (
                    <>
                    <div  className="flex-col justify-center gap-2 font-bold text-xs">
                        <p>Renti Aqui</p>
                        <p>{t('header.property')}: {item.name}</p>
                        <p>{t('header.period')}: {moment("2024-03-30").format('l')} a {moment('2024-4-26').format('l')} </p>
                        <p>{t('header.method')}: {method.calcMode}</p>
                    </div>
                    </>
                    ))}
                </div>
                
            </header>
        </>
    )
}