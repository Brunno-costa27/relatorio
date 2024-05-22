import data from "../database/data-set"
import formatNumber from "../functions/functions.js"
import moment from 'moment';

export function Table(){

    const resumo = [
      data[0].bookings.summary
    ]

    const canal_de_reservas = [
      data[0].bookings.summary.channel
    ]

    const canal_de_comissoes = data[0].bookings.bookings;

    // calcular a largura da tela
    // const viewportWidth = window.innerWidth;
    // console.log(viewportWidth)

    const reservas_canal = [

        { categoria: 'Airbnb', valor: '3', subvalor: 'R$ 1.127,52' },
    
      ];

      
    
    

    return(

        <>
        <table className="w-full flex flex-col table-auto p-10 ">
            <thead>
                <tr>
                <th className="text-lg sm:text-left font-bold text-black py-4 sm:text-4xl">Resumo</th>
                </tr>
            </thead>
        <tbody className="text-sm sm:text-base">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Ocupação</div>
                <div className="text-black">{((item.bookingCount-item.cancelattionSummary.count)/item.bookingCount*100).toFixed(2)}%</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left  text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Total de Reservas</div>
                <div className="text-black">{item.bookingCount}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Estadia Média</div>
                <div className="text-black">{item.avgLengthOfStayPerBooking.toFixed(2)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left  text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Diária Média</div>
                <div className="text-black">R$ {formatNumber(item.avgBookingValuePerDay)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Reservas Canceladas</div>
                <div className="text-black">{item.cancelattionSummary.count}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left  text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Valor Total em Diárias</div>
                <div className="text-black">R$ {formatNumber(item.bookingValue)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y text-black border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Valor Total em Taxas</div>
                <div className="text-black">R$ {formatNumber(item.taxTotal)}</div>
                </div>
            </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>



    {/* Reservas por canal */}


    <h1 className="text-lg sm:text-left font-bold text-black py-0 p-10 sm:text-4xl">Reservas por canal</h1>

    <table className="table-fixed sm:w-full flex flex-col  sm:table-auto p-10 ">
      <thead  className="flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">Canal</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd Canc.</th>
          <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">Valor de Vendas.</th>

        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">
        {canal_de_reservas.map((item) => (
          <>
          <tr className="w-full flex text-center">
            <td className="w-full text-left  border-black px-4 py-4">BookingCom</td>
            <td className="w-full  text-left  border-black px-4 py-4">{item.BookingCom.count}</td>
            <td className="w-full text-left  border-black px-4 py-4">{item.BookingCom.cancelledCount}</td>
            <td className="w-full text-right  border-black px-4 py-4">R$ {formatNumber(item.BookingCom.bookingValue)}</td>
        </tr>

          <tr className="w-full flex text-center">
            <td className="w-full text-left border-y border-black px-4 py-4">Airbnb</td>
            <td className="w-full  text-left border-y border-black px-4 py-4">{item.Airbnb.count}</td>
            <td className="w-full text-left border-y border-black px-4 py-4">{item.Airbnb.cancelledCount}</td>
            <td className="w-full text-right border-y border-black px-4 py-4">R$ {formatNumber(item.Airbnb.bookingValue)}</td>
          </tr>
          
          </>
        ))}
      </tbody>
    </table>

    {/* Reservas por comissões */}

    <h1 className="text-lg sm:text-left font-bold text-black py-0 p-10 sm:text-4xl">Reservas por comissões</h1>

    <table className="w-full flex flex-col table-auto p-10 ">
        <thead  className="flex text-center">
          <tr className="w-full flex justify-center items-center">
            <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">Número</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Nome</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Canal</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">In</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Out</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Status</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Item</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Valor</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Calc.</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Comissão</th>
            <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Proprietário</th>


          </tr>
        </thead>
                {
                  
                  canal_de_comissoes.map((item) => (

                 
                    
                  <tbody className="text-sm sm:text-base">
                      <tr className="w-full flex text-center" key={item.id}>
                        <td className="w-[124px] text-left border-y border-black px-4 py-4">#{item.id}</td>
                        <td className="w-[124px] text-left border-y border-black px-4 py-4">{item.primaryGuest.name}</td>
                        <td className="w-[116px] text-left border-y border-black px-4 py-4">{item.origin}</td>
                        <td className="w-[118px] text-left border-y border-black px-4 py-4">{moment(item.checkIn).format("DD/MM/YYYY")}</td>
                        <td className="w-[112px] text-left border-y border-black px-4 py-4">{moment(item.checkOut).format("DD/MM/YYYY")}</td>
                        <td className="w-[124px] text-left border-y border-black px-4 py-4">
                          {
                            item.status === 'inConfirmation'
                            ? 'Em Confirmação.'
                            : item.status === 'cancelled'
                            ? 'Cancel.'
                            : item.status === "confirmed"
                            ? 'Confirmado.'
                            : item.status
                            }
                        </td>
                        <td className="w-[124px] text-left border-y border-black px-4 py-4">{item.bill[0].services[0].name}</td>
                        <td className="w-[124px] text-left border-y border-black px-4 py-4 ">R$ {formatNumber(item.values.comissions.rateValue)}</td>
                        <td className="w-[126px] text-left border-y border-black px-4 py-4 font-bold">20%</td>
                        <td className="w-[126px] text-left border-y border-black px-4 py-4">R$ {formatNumber(item.values.comissions.comissions.RATES)}</td>
                        <td className="w-[134px] text-left border-y border-black px-4 py-4">R$ {formatNumber(item.values.comissions.ownerValue)}</td>
                      </tr>
                          

                      <table className="flex flex-col justify-end items-end">
                      
                        <tbody className="text-sm sm:text-base sm:w-[46%]">
                             
                              <tr className="flex text-center">
                              <td className="w-full text-left border-0 border-black px-4 py-4">Limp.</td>
                                  
                                <td className="w-full text-left border-0 border-black px-4 py-4">R$ </td>
                              
                              <td className="w-full text-left border-0 border-black px-4 py-4">100%</td>
                              <td className="w-full text-left border-0 border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-0 border-black px-4 py-4">R$ 0,00</td>
                            </tr>

                            <tr className="flex text-center" >
                              <td className="w-full text-left border-y border-black px-4 py-4">Serv.</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4"></td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                            </tr>

                            <tr className=" flex text-center" >
                              <td className="w-full text-left border-y border-black px-4 py-4">Util.</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4"></td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                            </tr>

                            <tr className=" flex text-center" >
                              <td className="w-full text-left border-y border-black px-4 py-4">Outras</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4"></td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                              <td className="w-full text-left border-y border-black px-4 py-4">R$ 0,00</td>
                            </tr>
                            <tr className=" flex text-center" >
                              <td className="w-full text-left font-bold border-0 border-black px-4 py-4">Total</td>
                              <td className="w-full  text-left font-bold border-0 border-black px-4 py-4">R$ {formatNumber(item.values.rateValue)}</td>
                              <td className="w-full  text-left font-bold border-0 border-black px-4 py-4"></td>

                              <td className="w-full text-left font-bold border-0 border-black px-4 py-4">R$ {formatNumber(item.values.comissions.totalComission)}</td>
                              <td className="w-full  text-left font-bold border-0 border-black px-4 py-4">R$ {formatNumber(item.values.comissions.ownerValue)}</td>
                            </tr>
                        </tbody>
                      </table>

                      
                  </tbody>
             
                ))}


    </table>

    {/* total */}

                      <table className="flex flex-col px-10">
                            <tbody className="text-sm sm:text-base">
                            <tr className="w-full flex text-center" >
                              <td className="w-3/4 text-left font-bold border-b-0 border-y border-black px-4 py-4">Total</td>
                              <td className="w-[120px]  text-left font-bold border-b-0 border-y border-black px-4 py-4">R$ </td>
                              <td className="w-[120px]  text-left font-bold border-b-0 border-y border-black px-4 py-4">R$ {formatNumber(resumo[0].comissions.totalComission)}</td>
                              <td className="w-[120px] text-left font-bold border-b-0 border-y  border-black px-4 py-4">R$ {formatNumber(resumo[0].comissions.ownerValue)}</td>
                            </tr>
                            </tbody>
                      </table>

    {/* ______________________________________________________________________________________ */}



    {/* Taxas */}

    <h1 className="text-lg sm:text-left font-bold text-black py-5 p-10 sm:text-4xl">Taxas</h1>

    <table className="w-full flex flex-col justify-between  table-auto px-10">
            <thead className="">
                <tr className="flex justify-between px-4">
                <th className="flex text-left  text-black py-4 ">Taxa</th>
                <th className="flex text-left  text-black py-4 ">Valor Total</th>
                </tr>
            </thead>
        <tbody className="text-sm sm:text-base">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Taxas de Limpeza</div>
                <div className="text-black font-bold">R$ {formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black-800">Taxas de roupa de cama</div>
                <div className="text-black font-bold">R$ {formatNumber(resumo[0].taxBreakDown.LINEN_FEE)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Taxa de serviço</div>
                <div className="text-black font-bold">R$ {formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Taxas de roupa de Utility</div>
                <div className="text-black font-bold">R$ {formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Taxas Outras</div>
                <div className="text-black font-bold">R$ {formatNumber(resumo[0].taxBreakDown.OTHER_FEE)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Valor Total em Diárias</div>
                <div className="text-black font-bold">R$ --</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Valor Total em Taxas</div>
                <div className="text-black font-bold">R$ 627,00</div>
                </div>
            </td>
            </tr>

            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">Total</div>
                <div className="text-black font-bold">R$ 627,00</div>
                </div>
            </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>


    {/* Despesas e ajustes */}

    <h1 className="text-lg sm:text-left font-bold text-black p-10 sm:text-4xl">Despesas e ajustes</h1>

    <table className="w-full flex flex-col table-auto px-10">
      <thead  className="flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">Despesas</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Vencimento</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Valor Adm</th>
          <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">Valor Prop.</th>

        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">
        {reservas_canal.map((item) => (
          <tr className="w-full flex text-center" key={item.categoria}>
            <td className="w-full text-left border-y border-black px-4 py-4 font-bold">Total</td>
            <td className="w-full  text-left border-y border-black px-4 py-4 font-bold"></td>
            <td className="w-full text-left border-y border-black px-4 py-4 font-bold">{item.subvalor}</td>
            <td className="w-full text-right border-y border-black px-4 py-4 font-bold">{item.subvalor}</td>
          </tr>
        ))}
      </tbody>
    </table>


    {/* Totais */}

    <table className="w-full flex flex-col table-auto p-10">
            <thead>
                <tr>
                <th className="text-lg sm:text-left font-bold text-black py-4 sm:text-4xl">Totais</th>
                </tr>
            </thead>
        <tbody className="text-sm sm:text-base">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">Total de Administrador em comissões</div>
                <div className="text-black">R$ {formatNumber(item.comissions.adminValue)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">Deduções Administrador</div>
                <div className="text-black">R$ --</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">Total Proprietário em Repasses</div>
                <div className="text-black">R$ {formatNumber(item.comissions.ownerValue)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">Deduções Proprietário</div>
                <div className="text-black">R$ 285,86</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">Subtotal Proprietário</div>
                <div className="text-black">R$ {formatNumber(item.comissions.ownerValue)}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">Subtotal Administrador</div>
                <div className="text-black">R$ {formatNumber(item.comissions.adminValue)}</div>
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