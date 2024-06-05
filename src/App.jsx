import { useTranslation } from "react-i18next"
import { Header } from "./components/Header"
import { Table } from "./components/Table"
import { useState } from "react"

function App() {
 

  const { t, i18n: { changeLanguage, language}, } = useTranslation()

    const [currentLanguage, setCurrentLanguage] = useState(language)


    function handleChangeLanguage(){
        const newLanguage = currentLanguage === 'en' ? 'fr' : 'en' 
        
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    console.log(language);

  return (
    <>

      <div className="py-2 px-2">
        <button onClick={handleChangeLanguage} className="fixed bg-blue-500 text-white font-roboto font-medium py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            Tradução - {language}
        </button>
      </div>

      <Header t={t} language={language}/>
      <Table t={t} language={language}/>

    </>
  )
}

export default App
