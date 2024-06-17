import { formatNumberByLanguage } from "../functions/functions.js"
import QuickChart from "quickchart-js"



export function ReservationsByChannel({t, language, currency, canal_de_reservas, summary}){

      const exemplo = []
      canal_de_reservas.forEach((item => {
        var temp = Object.keys(item)
          temp.forEach(item => {

            exemplo.push(item)
          })
      }))

      const  chart = new QuickChart();

      chart.setWidth(400)
      chart.setHeight(200);
      chart.setVersion('2.9.4');

      

      chart.setConfig({
        type: 'doughnut',
        data: {
          // labels: Object.keys(canal_de_reservas[0]),
          datasets: [
            { 
              data: [
                canal_de_reservas[0].BookingCom.count, 
                canal_de_reservas[0].Airbnb.count,
                summary[0].statusCount.canceled
              ],
              backgroundColor: ['green', '#3b82f6', '#eee'],       
            }
          ],
        },
        options: {
          plugins: {
            doughnutlabel: {
              labels: [
                { 
                  text: summary[0].bookingCount, 
                  font: { size: 20 },
                  color: 'black'
                }, 
                { 
                  text: 'Total', 
                  font: { size: 10},
                  color: 'black',
                  
                },
            ],
            },
            datalabels: {
              color: function (context) {
                if (context.datasetIndex === 0) {
                  // // Texto branco para barras com fundo verde.
                  return context.dataset.backgroundColor[context.dataIndex] ===
                    'green' ? '#fff' : '#000'; 
                }
              },
              
            }
          },
        },
      });

      var graficOrigens = chart.getUrl() 


    return(

        <>
            <h1 className="text-2xl font-normal text-black py-2">{t('ReservationsByChannel.title')}</h1>

<table className="table-fixed  flex flex-col">
  <thead  className="flex text-center text-sm">
    <tr className="w-full flex justify-center items-center">
      <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('ReservationsByChannel.table.channel')}</th>
      <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd</th>
      <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd Canc.</th>
      <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">{t('ReservationsByChannel.table.salesValue')}</th>

    </tr>
  </thead>

  <tbody className="text-xs">
    {canal_de_reservas.map((item) => (
      <>
      <tr className="w-full flex text-center">
        <td className="w-full text-left  border-black px-4 py-4">BookingCom</td>
        <td className="w-full  text-left  border-black px-4 py-4">{item.BookingCom.count}</td>
        <td className="w-full text-left  border-black px-4 py-4">{item.BookingCom.cancelledCount}</td>
        <td className="w-full text-right  border-black px-4 py-4">{t('ReservationsByChannel.table.bookingCom', {
          value: formatNumberByLanguage(item.BookingCom.bookingValue, currency, language) 
        })}</td>
    </tr>

      <tr className="w-full flex text-center">
        <td className="w-full text-left border-y border-black px-4 py-4">Airbnb</td>
        <td className="w-full  text-left border-y border-black px-4 py-4">{item.Airbnb.count}</td>
        <td className="w-full text-left border-y border-black px-4 py-4">{item.Airbnb.cancelledCount}</td>
        <td className="w-full text-right border-y border-black px-4 py-4">{t('ReservationsByChannel.table.bookingCom', {
          value:  formatNumberByLanguage(item.Airbnb.bookingValue, currency, language) 
        })}</td>
      </tr>
      
      </>
    ))}
  </tbody>
</table>

{/* Gráfico de reservas de canal */}

    <div className="w-full flex justify-between py-5">
        <div className="w-1/3 flex flex-col justify-center items-center">
          {exemplo.map((item => 

            <div class="w-full flex justify-between items-center px-2 py-2 rounded-md text-black text-sm font-normal">
              <div>
                <span className={
                  // "mr-7 text-4xl"
                  item === "BookingCom" ? "text-2xl font-normal mr-3 "
                  : item === "Airbnb" ? "text-2xl mr-3 font-normal "
                  : item === "Cancelado" ? "text-2xl mr-3 font-normal "
                  : ""
                }>{item === "Cancelado" ? t('ReservationsByChannel.table.cancel') : item}
                </span>
              </div>
                
              <div>
                <svg className="w-7 h-7 rounded-full">
                    {
                    item  == "BookingCom" ? <rect x="0" y="0" width="100" height="100" fill="#15803d" />
                    : item == "Airbnb" ? <rect x="0" y="0" width="100" height="100" fill="#3b82f6" />
                    : item  == "Cancelado" ? <rect x="0" y="0" width="100" height="100" fill="#eee" />
                    : ""
                    }  
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full flex justify-end">
          <img className="w-1/2" src={graficOrigens} alt="" />
        </div>
    </div>
        </>
    )
}