import logo from "../assets/image.png"
import data from "../database/data-set"
import moment from 'moment';

export function Header(){
    
    const header = [
        data[0].bookings.bookings[0].room[0].meta
    ];

    const method = data[0].bookings.bookings[0].roomType.meta.comissionFee
    
    
    header.forEach(element => console.log(element.name))
    
    const dateString = new Date();
    const formatDate = moment(dateString).format("DD/MM/YYYY, h:mm");



    

    return(
        <>
            
                    
                        <header  className="w-full flex flex-col p-10 gap-3">
                            
                            <div className="w-[70%] flex justify-between">
                                <p className="w-32 text-center text-sm">{formatDate}</p>
                                <p className="">Ayrton | finanças</p>
                            </div>

                            <div  className="w-full flex justify-between ">
                                <div className="flex flex-col gap-3">
                                    <img className="w-32 rounded-full" src={logo} alt="" />
                                </div>
                                {header.map((item) => (
                                <>
                                <div  className="flex flex-col justify-center gap-2 font-bold">
                                    <p>Renti Aqui</p>
                                    <p>Imóvel: {item.name}</p>
                                    <p>Período:30/03/2024 a 30/03/2024</p>
                                    <p>Método: {method.calcMode}</p>
                                </div>
                                </>
                                ))}
                            </div>
                        </header>

    </>
    )
}