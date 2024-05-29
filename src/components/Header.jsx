import { useTranslation } from "react-i18next";
import logo from "../assets/image.png"
import data from "../database/data-set"
import moment from 'moment';

export function Header({t, language}){
    
    const header = [
        data[0].bookings.bookings[0].room[0].meta
    ];

    const method = data[0].bookings.bookings[0].roomType.meta.comissionFee
    
    
    
    const dateString = new Date();
    const formatDate = moment(dateString).format("DD/MM/YYYY, h:mm");


    // const { t, i18n: { changeLanguage, language}, } = useTranslation()

    // const [currentLanguage, setCurrentLanguage] = useState(language)


    // function handleChangeLanguage(){
    //     const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        
    //     changeLanguage(newLanguage)
    //     setCurrentLanguage(newLanguage)
    // }
    

    

    return(
        <>
            
                    
                            
                        <header  className="font-sans w-full flex flex-col p-10 gap-3 ">
       
                            
                            
                            {/* <div className="w-full flex flex-col justify-center items-center sm:w-[70%] sm:flex-row sm:justify-between">
                                <p className="text-sm sm:w-32 text-center">{formatDate}</p>
                                <p className="text-sm">Ayrton | finanças</p>
                            </div> */}

                            <div  className="w-full flex justify-between">
                                <div className="hidden sm:flex flex-col gap-3">
                                    <img className="w-32 rounded-full" src={logo} alt="" />
                                </div>
                                {header.map((item) => (
                                <>
                                <div  className="text-sm sm:flex flex-col justify-center gap-2 font-bold sm:text-base">
                                    <p>Renti Aqui</p>
                                    <p>{t('header.property')}: {item.name}</p>
                                    <p>{t('header.period')}: 30/03/2024 a 30/03/2024</p>
                                    <p>{t('header.method')}: {method.calcMode}</p>
                                </div>
                                </>
                                ))}
                            </div>
                        </header>



    </>
    )
}