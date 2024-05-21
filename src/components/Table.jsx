import data from "../database/data-set"

export function Table(){

    const itensFiltrados = data[0].bookings.bookings;
    console.log(itensFiltrados)

    const reservas_canal = [

        { categoria: 'Airbnb', valor: '3', subvalor: 'R$ 1.127,52' },
    
      ];


      
      const screenWidth = window.innerWidth;
      const screenWidthDividedByTen = screenWidth / 10;
      console.log(screenWidthDividedByTen);
    

    return(

        <>
        <table className="w-full flex flex-col table-auto p-10 ">
            <thead>
                <tr>
                <th className="text-left font-bold text-black py-4 text-4xl">Resumo</th>
                </tr>
            </thead>
        <tbody>
            {data.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Ocupação</div>
                <div className="text-black">81.48%</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black-800">Total de Reservas</div>
                <div className="text-black">15</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Estadia Média</div>
                <div className="text-black">1.47</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Diária Média</div>
                <div className="text-black">R$ 285,86</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Reservas Canceladas</div>
                <div className="text-black">2</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Valor Total em Diárias</div>
                <div className="text-black">R$ --</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-gray-200 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">Valor Total em Taxas</div>
                <div className="text-black">R$ 627,00</div>
                </div>
            </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>



    {/* Reservas por canal */}


    <h1 className="text-left font-bold text-black py-0 p-10 text-4xl">Reservas por canal</h1>

    <table className="w-full flex flex-col table-auto p-10 ">
      <thead  className="flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-gray-200 px-4 py-2">Canal</th>
          <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Qtd</th>
          <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Qtd Canc.</th>
          <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Valor de Vendas.</th>

        </tr>
      </thead>
      <tbody className="">
        {reservas_canal.map((item) => (
          <tr className="w-full flex text-center" key={item.categoria}>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.categoria}</td>
            <td className="w-full  text-left border-y border-gray-200 px-4 py-4">{item.valor}</td>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Reservas por comissões */}

    <h1 className="text-left font-bold text-black py-0 p-10 text-4xl">Reservas por comissões</h1>

    <table className="w-full flex flex-col table-auto p-10 ">
        <thead  className="flex text-center">
          <tr className="w-full flex justify-center items-center">
            <th className="w-full text-left font-bold text-black border-y border-gray-200 px-4 py-2">Número</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Nome</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Canal</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Out</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Status</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Item</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Valor</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Cal.</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Comissão</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Proprietário</th>


          </tr>
        </thead>
      <tbody className="">
                {reservas_canal.map((item) => (
                  <tr className="w-full flex text-center" key={item.categoria}>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.categoria}</td>
                    <td className="w-full  text-left border-y border-gray-200 px-4 py-4">{item.valor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>

                  </tr>
                ))}

                <table className="flex flex-col justify-end items-end">
                 
                  <tbody className="w-2/4">
                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">100%</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className="w-full flex text-center" >
                        <td className="w-[127px] text-left font-bold border-y border-gray-200 px-4 py-4">Total</td>
                        <td className="w-[253px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 650,00</td>
                        <td className="w-[128px] text-left font-bold border-y border-gray-200 px-4 py-4">R$ 130,00</td>
                        <td className="w-[128px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 520,00</td>
                      </tr>
                  </tbody>
                </table>
      </tbody>
    </table>

    {/* ______________________________________________________________________________________ */}


    <table className="w-full flex flex-col table-auto p-10 ">
        <thead  className="flex text-center">
          <tr className="w-full flex justify-center items-center">
            <th className="w-full text-left font-bold text-black border-y border-gray-200 px-4 py-2">Número</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Nome</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Canal</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Out</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Status</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Item</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Valor</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Cal.</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Comissão</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Proprietário</th>


          </tr>
        </thead>
      <tbody className="">
                {reservas_canal.map((item) => (
                  <tr className="w-full flex text-center" key={item.categoria}>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.categoria}</td>
                    <td className="w-full  text-left border-y border-gray-200 px-4 py-4">{item.valor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>

                  </tr>
                ))}
                
                <table className="flex flex-col justify-end items-end">
                 
                  <tbody className="w-2/4">
                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">100%</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className="w-full flex text-center" >
                        <td className="w-[127px] text-left font-bold border-y border-gray-200 px-4 py-4">Total</td>
                        <td className="w-[253px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 650,00</td>
                        <td className="w-[128px] text-left font-bold border-y border-gray-200 px-4 py-4">R$ 130,00</td>
                        <td className="w-[128px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 520,00</td>
                      </tr>
                  </tbody>
                </table>
      </tbody>
    </table>


    {/* _______________________________________________________________________________ */}


    <table className="w-full flex flex-col table-auto p-10 ">
        <thead  className="flex text-center">
          <tr className="w-full flex justify-center items-center">
            <th className="w-full text-left font-bold text-black border-y border-gray-200 px-4 py-2">Número</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Nome</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Canal</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Out</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Status</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Item</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Valor</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Cal.</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Comissão</th>
            <th className="w-full text-left font-bold text-black border-y border-gray-200  px-4 py-2">Proprietário</th>


          </tr>
        </thead>
      <tbody className="">
                {reservas_canal.map((item) => (
                  <tr className="w-full flex text-center" key={item.categoria}>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.categoria}</td>
                    <td className="w-full  text-left border-y border-gray-200 px-4 py-4">{item.valor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
                    <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>

                  </tr>
                ))}
                
                <table className="flex flex-col justify-end items-end">
                 
                  <tbody className="w-2/4">
                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">100%</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className=" flex text-center" >
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">Limp.</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4"></td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                        <td className="w-full text-left border-y border-gray-200 px-4 py-4">R$ 0,00</td>
                      </tr>

                      <tr className="w-full flex text-center" >
                        <td className="w-[127px] text-left font-bold border-y border-gray-200 px-4 py-4">Total</td>
                        <td className="w-[253px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 650,00</td>
                        <td className="w-[128px] text-left font-bold border-y border-gray-200 px-4 py-4">R$ 130,00</td>
                        <td className="w-[128px]  text-left font-bold border-y border-gray-200 px-4 py-4">R$ 520,00</td>
                      </tr>
                  </tbody>
                </table>
      </tbody>
    </table>

        </>

    )
}