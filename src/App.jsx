import { useTranslation } from "react-i18next"
import { Header } from "./components/Header"
import { useState } from "react"
import './App.css'

import data from "../src/database/data-set"
import { Summary } from "./components/Summary"
import { ReservationsByChannel } from "./components/ReservationByChannel"
import { CommissionBookings } from './components/CommissionBookings'
import { Fees } from "./components/Fees"
import { ExpensesAndAdjustments } from "./components/ExpensesAndAdjustments"
import { Totals } from "./components/Totals"
import moment from 'moment';
import 'moment/locale/pt-br';

function App() {


  
  const summary = [
    data[0].bookings.summary
  ]

  const canal_de_reservas = [
    data[0].bookings.summary.channel
  ]

  const canal_de_comissoes = data[0].bookings.bookings;

  const { t, i18n: { changeLanguage, language}, } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)


  function handleChangeLanguage(){
      const newLanguage = currentLanguage === 'en-US' ? 'pt-br' : 'en-US' 
      
      changeLanguage(newLanguage)
      setCurrentLanguage(newLanguage)

  }


  moment.locale(language); // Configura o locale para pt-br
  console.log('Locale atual:', moment.locale()); // Deve mostrar 'pt-br'
  let currency = ''

    if (language === 'en-US') {
        currency = 'USD'

    } else if (language === 'pt-br') {
        currency = 'BRL'
        
    }

  return (
    <>

      <div className="py-2 px-2">
        <button onClick={handleChangeLanguage} className="fixed bg-blue-500 text-white font-roboto font-medium py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            Tradução - {language}
        </button>
      </div>

      <Header t={t} language={language}/>
      <Summary t={t} language={language} currency={currency} summary={summary}/>
      <ReservationsByChannel t={t} language={language} currency={currency} canal_de_reservas={canal_de_reservas} summary={summary}/>
      <CommissionBookings t={t} language={language} currency={currency} canal_de_comissoes={canal_de_comissoes} summary={summary}/>
      <Fees t={t} language={language} currency={currency} summary={summary} />
      <ExpensesAndAdjustments t={t} currency={currency} language={language} summary={summary}/>
      <Totals t={t} language={language} currency={currency}  summary={summary}/>

    </>
  )
}

export default App
