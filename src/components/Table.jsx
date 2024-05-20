import data from "../database/data-set"

export function Table(){

    const dados = [

        { categoria: 'Airbnb', valor: '3', subvalor: 'R$ 1.127,52' },
        { categoria: 'Booking.com', valor: '10', subvalor: 'R$ 4.033,78' },
    
      ];

    console.log(data);
    

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
        {dados.map((item) => (
          <tr className="w-full flex text-center" key={item.categoria}>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.categoria}</td>
            <td className="w-full  text-left border-y border-gray-200 px-4 py-4">{item.valor}</td>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
            <td className="w-full text-left border-y border-gray-200 px-4 py-4">{item.subvalor}</td>
          </tr>
        ))}
      </tbody>
    </table>

        </>

    )
}