import { useTranslation } from "react-i18next"
import { Header } from "./components/Header"
import { useState } from "react"
import data from "../src/database/data-set"
import { Summary } from "./components/Summary"
import { ReservationsByChannel } from "./components/ReservationByChannel"
import { CommissionBookings } from './components/CommissionBookings'
import { Fees } from "./components/Fees"
import { ExpensesAndAdjustments } from "./components/ExpensesAndAdjustments"
import { Totals } from "./components/Totals"


function App() {
  
  const resumo = [
    data[0].bookings.summary
  ]

  const canal_de_reservas = [
    data[0].bookings.summary.channel
  ]

  const canal_de_comissoes = data[0].bookings.bookings;

  const { t, i18n: { changeLanguage, language}, } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)


  function handleChangeLanguage(){
      const newLanguage = currentLanguage === 'en-us' ? 'pt-br' : 'en-us' 
      
      changeLanguage(newLanguage)
      setCurrentLanguage(newLanguage)
  }


  return (
    <>

      <div className="py-2 px-2">
        <button onClick={handleChangeLanguage} className="fixed bg-blue-500 text-white font-roboto font-medium py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            Tradução - {language}
        </button>
      </div>

      <Header t={t} language={language}/>
      <Summary t={t} language={language} resumo={resumo}/>
      <ReservationsByChannel t={t} language={language} canal_de_reservas={canal_de_reservas} resumo={resumo}/>
      <CommissionBookings t={t} language={language} canal_de_comissoes={canal_de_comissoes} resumo={resumo}/>
      <Fees t={t} language={language} resumo={resumo} />
      <ExpensesAndAdjustments t={t} language={language} resumo={resumo}/>
      <Totals t={t} language={language} resumo={resumo}/>

    </>
  )
}

export default App
