import logo from "../assets/image.png"

export function Header(){

    return(
        <>
            
        <header className="w-full flex flex-col p-10 gap-3">
            
            <div className="w-[70%] flex justify-between">
                <p className="w-32 text-center">02/05/24, 08:18</p>
                <p className="">Ayrton | finanças</p>
            </div>

            <div className="w-full flex justify-between ">
                <div className="flex flex-col gap-3">
                    <img className="w-32 rounded-full" src={logo} alt="" />
                </div>
                <div className="flex flex-col justify-center gap-2 font-bold">
                    <p>Renti Aqui</p>
                    <p>Imóvel 67-hampton</p>
                    <p>Período:30/03/2024 a 30/03/2024</p>
                    <p>Método: ownerReportAdjustePayoDate</p>
                </div>
            </div>

        </header>
        </>
    )
}