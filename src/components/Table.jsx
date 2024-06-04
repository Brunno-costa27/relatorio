import data from "../database/data-set"
import formatNumber from "../functions/functions.js"
import moment from 'moment';
import 'moment/min/locales'
import '../../src/index.css'
// moment.locale('US')

import QuickChart from "quickchart-js"
import { TableHeader } from "./TableHeader.jsx";



export function Table({t, language}){



    const resumo = [
      data[0].bookings.summary
    ]

    const canal_de_reservas = [
      data[0].bookings.summary.channel
    ]

    const canal_de_comissoes = data[0].bookings.bookings;

    const statusCounts = canal_de_comissoes.reduce((acc, booking) => {
      const status = booking.status;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});

    const formattedStatusCounts = Object.entries(statusCounts).map(([status, count]) => ({
      [status]: count,
    }));

    const reservas_canal = [

        { categoria: 'Airbnb', valor: '3', subvalor: "1.127.52" },
        
      ];
      
      canal_de_reservas[0].Cancelado = resumo[0].statusCount.canceled

      const  chart = new QuickChart();

      chart.setWidth(400)
      chart.setHeight(200);
      chart.setVersion('2.9.4');

      const exemplo = []
      canal_de_reservas.forEach((item => {
        var temp = Object.keys(item)
          temp.forEach(item => {

            exemplo.push(item)
          })
      }))

      chart.setConfig({
        type: 'doughnut',
        data: {
          // labels: Object.keys(canal_de_reservas[0]),
          datasets: [
            { 
              data: [
                canal_de_reservas[0].BookingCom.count, 
                canal_de_reservas[0].Airbnb.count,
                resumo[0].statusCount.canceled
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
                  text: resumo[0].bookingCount, 
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
                    'green'
                    ? '#fff'
                    : '#000';
                }
              },
            }
          },
        },
      });

      var graficOrigens = chart.getUrl() 

      // Essa parte não funciona
      // // Get the graficOrigens...
      // const async graficOrigens = await chart.toBinary();

      // // Or write it to a file
      // chart.toFile('chart.png');
    
    
      const chart1 = new QuickChart();

      chart1.setWidth(500)
      chart1.setHeight(300);
      chart1.setVersion('2.9.4');

      chart1.setConfig({
        type: 'doughnut',
        data: {
          datasets: [
            {
              data: [
                ((resumo[0].bookingCount-resumo[0].cancelattionSummary.count)/resumo[0].bookingCount*100).toFixed(0),
                100-((resumo[0].bookingCount-resumo[0].cancelattionSummary.count)/resumo[0].bookingCount*100).toFixed(0)
              ],
              backgroundColor: ['green', '#eee'],
              label: 'Dataset 1',
              borderWidth: 0,
            },
          ],
          labels: ['A', 'C'],
        },
        options: {
          circumference: Math.PI,
          rotation: Math.PI,
          cutoutPercentage: 75,
          layout: {
            padding: 60,
            
          },
          legend: {
            display: false,
          },
          plugins: {
            datalabels: {
              color: '#404040',
              anchor: 'end',
              align: 'end',
              formatter: (val) => val + '%',
              font: {
                size: 25,
                weight: 'bold',
              },
            },
            doughnutlabel: {
              labels: [
                {
                  text: '\nTaxa de',
                  font: {
                    size: 20,
                  },
                },
                {
                  text: '\nocupação',
                  color: '#000',
                  font: {
                    size: 25,
                    weight: 'bold',
                  },
                },
              ],
            },
          },
        },
      });


      const graficSummary = chart1.getUrl();

      // Essa parte não funciona
      // Get the image...
      // const image = await chart.toBinary();

      // Or write it to a file
      // chart.toFile('chart.png');

      console.log(formattedStatusCounts);
      const  chart2 = new QuickChart();

      chart2.setWidth(400)
      chart2.setHeight(200);
      chart2.setVersion('2.9.4');

      chart2.setConfig({
        type: 'doughnut',
        data: {
          datasets: [
            { 
              data: [
                formattedStatusCounts[2].confirmed,
                formattedStatusCounts[0].inConfirmation,
                formattedStatusCounts[1].cancelled,
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
                  text: resumo[0].bookingCount, 
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
                    'green'
                    ? '#fff'
                    : '#000';
                }
              },
            }
          },
        },
      });

      var graficOrigensCommission = chart2.getUrl() 


    return(

        <>
        <table className="w-full font-sans flex flex-col table-auto p-8 ">
            <thead>
                <tr>
                <th className="text-lg sm:text-left  font-normal text-black py-4 sm:text-4xl">{t('summary.summary')}</th>
                </tr>
            </thead>

            <tbody className="text-sm sm:text-base">
                {resumo.map((item) => (
                    <>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.occupation')}</div>
                    <div className="text-black">{((item.bookingCount-item.cancelattionSummary.count)/item.bookingCount*100).toFixed(2)}%</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalReservations')}</div>
                    <div className="text-black">{item.bookingCount}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.averageStay')}</div>
                    <div className="text-black">{item.avgLengthOfStayPerBooking.toFixed(2)}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.averageDailyRate')}</div>
                    <div className="text-black">{t('summary.averageDailyRateValue', {
                      value:  formatNumber(item.avgBookingValuePerDay)})}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.canceledReservations')}</div>
                    <div className="text-black">{item.cancelattionSummary.count}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalValueInDailyRates')}</div>
                    <div className="text-black">{t('summary.totalValueInDailyRatesValue', {
                      value:  formatNumber(item.bookingValue)})}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-4 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalValueInFees')}</div>
                    <div className="text-black">{t('summary.totalValueInFeesValue', {
                      value:  formatNumber(item.taxTotal)
                    })}</div>
                    </div>
                </td>
                </tr>
                </>
                ))}
            </tbody>
          </table>

          {/* GRÁFICO */}

          <div className="w-full flex justify-between p-8">
            <div className="w-1/3 flex flex-col justify-center items-center">
                  
            <div class="w-full flex items-center justify-between px-4 py-2 rounded-md text-black">
                <div>
                  <span class="text-lg font-bold mr-7 md:text-4xl md:font-normal">{t('summary.graphic.occupation')}</span>
                </div>
                <div>
                  <svg className="w-7 h-7 md:inline-block md:w-10 md:h-10  rounded-full">
                    <rect x="0" y="0" width="100" height="100" fill="#15803d" />
                  </svg>
                </div>
            </div>

            <div class="w-full flex items-center justify-between px-4 py-2 rounded-md text-black">
              <div>
                <span class="text-lg font-bold mr-7 md:text-4xl md:font-normal">{t('summary.graphic.canceled')}</span>
              </div>
              <div>
                <svg className="w-7 h-7 md:inline-block md:w-10 md:h-10 rounded-full">
                  <rect x="0" y="0" width="100" height="100" fill="#eee" />
                </svg>
              </div>
            </div>
            </div>
            <div className="w-full flex justify-end">
              <img className="w-1/2" src={graficSummary} alt="" />
            </div>
          </div>



    {/* Reservas por canal */}


    <h1 className="text-lg sm:text-left font-normal text-black py-0 p-8 sm:text-4xl">{t('ReservationsByChannel.title')}</h1>

    <table className="table-fixed sm:w-full flex flex-col  sm:table-auto p-8 ">
      <thead  className="flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('ReservationsByChannel.table.channel')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">Qtd Canc.</th>
          <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">{t('ReservationsByChannel.table.salesValue')}</th>

        </tr>
      </thead>

      <tbody className="text-sm sm:text-base">
        {canal_de_reservas.map((item) => (
          <>
          <tr className="w-full flex text-center">
            <td className="w-full text-left  border-black px-4 py-4">BookingCom</td>
            <td className="w-full  text-left  border-black px-4 py-4">{item.BookingCom.count}</td>
            <td className="w-full text-left  border-black px-4 py-4">{item.BookingCom.cancelledCount}</td>
            <td className="w-full text-right  border-black px-4 py-4">{t('ReservationsByChannel.table.bookingCom', {
              value: formatNumber(item.BookingCom.bookingValue)
            })}</td>
        </tr>

          <tr className="w-full flex text-center">
            <td className="w-full text-left border-y border-black px-4 py-4">Airbnb</td>
            <td className="w-full  text-left border-y border-black px-4 py-4">{item.Airbnb.count}</td>
            <td className="w-full text-left border-y border-black px-4 py-4">{item.Airbnb.cancelledCount}</td>
            <td className="w-full text-right border-y border-black px-4 py-4">{t('ReservationsByChannel.table.bookingCom', {
              value: formatNumber(item.Airbnb.bookingValue)
            })}</td>
          </tr>
          
          </>
        ))}
      </tbody>
    </table>

    {/* Gráfico de reservas de canal */}
        <div className="w-full flex justify-between p-8">
            <div className="w-1/3 flex flex-col justify-center items-center">
              {exemplo.map((item => 

                <div class="w-full flex justify-between items-center px-4 py-2 rounded-md text-black">
                  <div>
                    <span className={
                      // "mr-7 text-4xl"
                      item === "BookingCom" ? "text-lg font-bold mr-3 md:text-4xl md:font-normal"
                      : item === "Airbnb" ? "text-lg mr-3 font-bold md:text-4xl md:font-normal"
                      : item === "Cancelado" ? "text-lg mr-3 font-bold md:text-4xl md:font-normal"
                      : ""
                    }>{item === "Cancelado" ? t('ReservationsByChannel.table.cancel') : item}
                    </span>
                  </div>
                    
                  <div>
                    <svg className="w-7 h-7 md:inline-block md:w-10 md:h-10  rounded-full">
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


    {/* Reservas por comissões */}

    <h1 className="text-lg sm:text-left font-normal text-black py-10 px-10 sm:text-4xl">{t('commissionBookings.title')}</h1>

    <table className="w-full flex flex-col px-8 print:border-separate">
      <thead  className="print:table-header-group flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('commissionBookings.header.number')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.name')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.channel')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.in')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.oct')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.status')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.item')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.value')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.calc')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.commission')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('commissionBookings.header.owner')}</th>


        </tr>
      </thead>
        {/* <TableHeader /> */}

        { 
          canal_de_comissoes.map((item) => (
          <tbody className="text-sm sm:text-base">
            <tr className="w-full flex text-center " key={item.id}>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">#{item.id}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{item.primaryGuest.name}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{item.origin}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{language === 'en' ? moment(item.checkIn, "YYYY-MM-DD").format("l") : moment(item.checkIn).format("DD/MM/YYYY")}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{language === 'en' ? moment(item.checkOut, "YYYY-MM-DD").format("l") : moment(item.checkOut).format("DD/MM/YYYY")}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">
                {
                  language === 'en' ? item.status : item.status === "inConfirmation" ? "Em confirmação"
                  : language === 'en' ? item.status : item.status === "cancelled" ? "Cancelado"
                  : language === 'en' ? item.status : item.status === "confirmed" ? "Confirmado"
                  : item.status 
                  }
              </td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.bookings.daily')}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4 ">{t('commissionBookings.bookings.valueCommission', {
                value: formatNumber(item.values.comissions.rateValue)
              })}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4 font-bold">20%</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.bookings.commission', {
                value: formatNumber(item.values.comissions.comissions.RATES)
              })}</td>
              <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.bookings.owner', {
                value: formatNumber(item.values.comissions.ownerValue)
              })}</td>
            </tr>
                

            <table className="flex flex-col justify-end items-end">
              <tbody className="w-full text-sm sm:text-base sm:w-full">
                <tr className="w-full flex text-center">
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full text-left border-0 border-black border-t-0 px-4 py-4">Limp.</td>
                  <td className="w-full text-left border-0 border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.cleaning.value', {
                    value: formatNumber(item.values.taxBreakDown.CLEANING_FEE)
                  })}</td>
                  <td className="w-full text-left border-0 border-black border-t-0 px-4 py-4">100%</td>
                  <td className="w-full text-left border-0 border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.cleaning.commission', {
                    value: formatNumber(item.values.taxBreakDown.CLEANING_FEE)
                  })}</td>
                  <td className="w-full text-left border-0 border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.cleaning.prop')} 0,00</td>
                </tr>

                <tr className="flex text-center" >
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black  px-4 py-4">Serv.</td>
                  <td className="w-full text-left border-y border-black px-4 py-4">{t('commissionBookings.expenses.services.value', {
                    value: formatNumber(item.values.taxBreakDown.SERVICE_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black px-4 py-4">{t('commissionBookings.expenses.services.commission', {
                    value: formatNumber(item.values.taxBreakDown.SERVICE_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black px-4 py-4">{t('commissionBookings.expenses.services.prop')} 0,00</td>
                </tr>

                <tr className=" flex text-center" >
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">Util.</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.utility.value', {
                    value: formatNumber(item.values.comissions.comissions.UTILITY_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.utility.commission', {
                    value: formatNumber(item.values.comissions.comissions.UTILITY_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.utility.prop')} 0,00</td>
                </tr>

                <tr className=" flex text-center" >
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">Outras</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.others.value', {
                    value: formatNumber(item.values.comissions.comissions.OTHER_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.others.value', {
                    value: formatNumber(item.values.comissions.comissions.OTHER_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-4 py-4">{t('commissionBookings.expenses.others.prop')} 0,00</td>
                </tr>
                <tr className=" flex text-center" >
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full border-none text-left px-4 py-4"></td>
                  <td className="w-full text-left font-bold border-0 border-black px-4 py-4">Total</td>
                  <td className="w-full  text-left font-bold border-0 border-black px-4 py-4">{t('commissionBookings.total.valueSum', {
                    value: formatNumber(item.values.rateValue)
                  })}</td>
                  <td className="w-full  text-left font-bold border-0 border-black px-4 py-4"></td>
                  <td className="w-full text-left font-bold border-0 border-black px-4 py-4">{t('commissionBookings.total.commissionSum', {
                    value: formatNumber(item.values.comissions.totalComission)
                  })}</td>
                  <td className="w-full  text-left font-bold border-0 border-black px-4 py-4">{t('commissionBookings.total.ownerSum', {
                    value: formatNumber(item.values.comissions.ownerValue)
                  })}</td>
                </tr>
              </tbody>
            </table> 
          </tbody>
      
        ))}
    </table>

    {/* total */}

                      <table className="flex flex-col px-8">
                            <tbody className="text-sm sm:text-base">
                            <tr className="w-full flex text-center" >
                              <td className="w-full text-left font-bold border-b-0 border-y border-black px-4 py-4">Total</td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-4 py-4"></td>

                              <td className="w-full  text-left font-bold border-b-0 border-y border-black px-4 py-4"></td>
                              <td className="w-full  text-left font-bold border-b-0 border-y border-black px-4 py-4">{t('commissionBookings.totalCommission.commission', {
                                value: formatNumber(resumo[0].comissions.totalComission)
                              })}</td>
                              <td className="w-full text-left font-bold border-b-0 border-y  border-black px-4 py-4">{t('commissionBookings.totalCommission.owner', {
                                value: formatNumber(resumo[0].comissions.ownerValue)
                              })}</td>
                            </tr>
                            </tbody>
                      </table>

    {/* GRÁFICO */}

    <div className="w-full flex justify-between p-8">
            <div className="w-1/3 flex flex-col justify-center items-center">
              {formattedStatusCounts.map((item => 

                <div class="w-full flex justify-between items-center px-4 py-2 rounded-md text-black">
                  <div>
                    <span className={
                      Object.keys(item) == "inConfirmation" ? "text-xl font-bold lg:mr-3 lg:text-4xl lg:font-normal"
                      : Object.keys(item) == "confirmed" ? "text-xl font-bold lg:mr-16 lg:text-4xl lg:font-normal"
                      : Object.keys(item) == "cancelled" ? "text-xl font-bold lg:mr-24 lg:text-4xl lg:font-normal"
                      : ""
                    }>
                    {
                    language === 'en' ? Object.keys(item) : Object.keys(item) == "inConfirmation" ? "Em confimação"
                    : language === 'en' ?  Object.keys(item) : Object.keys(item) == "cancelled"  ? "Cancelado"
                    : language === 'en' ? Object.keys(item) : Object.keys(item) == "confirmed" ? "Confirmado"
                    : Object.keys(item)   
                    }
                    </span>
                  </div>
                  
                    <div>
                      <svg className="w-7 h-7 lg:inline-block lg:w-10 lg:h-10  rounded-full">
                      {
                      Object.keys(item) == "inConfirmation" ? <rect x="0" y="0" width="100" height="100" fill="#3b82f6" />
                      : Object.keys(item)== "cancelled" ? <rect x="0" y="0" width="100" height="100" fill="#eee" />
                      : Object.keys(item) == "confirmed" ? <rect x="0" y="0" width="100" height="100" fill="#15803d" />
                      : ""
                      }  
                      </svg>
                    </div>
                </div>
              ))}
            </div>
            
            <div className="w-full flex justify-end">
              <img className="w-1/2" src={graficOrigensCommission} alt="" />
            </div>
        </div>

    {/* Taxas */}

    <h1 className="text-lg sm:text-left font-normal text-black py-5 p-8 sm:text-4xl">{t('fees.title')}</h1>

    <table className="w-full flex flex-col justify-between  table-auto px-10">
            <thead className="">
                <tr className="flex justify-between px-4">
                <th className="flex text-left  text-black py-4 ">{t('fees.titleTable')}</th>
                <th className="flex text-left  text-black py-4 ">{t('fees.totalValue')}</th>
                </tr>
            </thead>
        <tbody className="text-sm sm:text-base">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.cleaningFees')}</div>
                <div className="text-black font-bold">{t('fees.cleaningFeesValue', {
                  value: formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black-800">{t('fees.bedLinenFees')}</div>
                <div className="text-black font-bold">{t('fees.bedLinenFeesValeu', {
                  value: formatNumber(resumo[0].taxBreakDown.LINEN_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.serviceCharge')}</div>
                <div className="text-black font-bold">{t('fees.serviceChargeValue', {
                  value: formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.utilityLinenFees')}</div>
                <div className="text-black font-bold">{t('fees.utilityLinenFeesValue', {
                  value: formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.otherFees')}</div>
                <div className="text-black font-bold">{t('fees.otherFeesValue', {
                  value: formatNumber(resumo[0].taxBreakDown.OTHER_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            
           

            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('fees.totalValue')}</div>
                <div className="text-black font-bold">{t('fees.totalValueValue', {
                  value: formatNumber(resumo[0].taxTotal)
                })}</div>
                </div>
            </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>


    {/* Despesas e ajustes */}

    <h1 className="text-lg sm:text-left font-normal text-black p-8 sm:text-4xl">{t('expensesAndAdjustments.title')}</h1>

    <table className="w-full flex flex-col table-auto px-10">
      <thead  className="flex text-center">
        <tr className="w-full flex justify-center items-center">
          <th className="w-full text-left font-bold text-black border-y border-black px-4 py-2">{t('expensesAndAdjustments.header.expenses')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.maturity')}</th>
          <th className="w-full text-left font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.admValue')}</th>
          <th className="w-full text-right font-bold text-black border-y border-black  px-4 py-2">{t('expensesAndAdjustments.header.propValue')}</th>

        </tr>
      </thead>
      <tbody className="text-sm sm:text-base">
        {resumo.map((item) => (
          <tr className="w-full flex text-center" key={item.categoria}>
            <td className="w-full text-left border-y border-black px-4 py-4  border-t-0 font-bold">{t('expensesAndAdjustments.total')}</td>
            <td className="w-full  text-left border-y border-black px-4 py-4 border-t-0  font-bold"></td>
            <td className="w-full text-left border-y border-black px-4 py-4  border-t-0 font-bold">{t('expensesAndAdjustments.admValue', {
              value: formatNumber(item.comissions.adminValue)
            })}</td>
            <td className="w-full text-right border-y border-black px-4 py-4 border-t-0  font-bold">{t('expensesAndAdjustments.propValue', {
              value: formatNumber(item.comissions.ownerValue)
            })}</td>
          </tr>
        ))}
      </tbody>
    </table>


    {/* Totais */}

    <table className="w-full flex flex-col table-auto p-8">
            <thead>
                <tr>
                <th className="text-lg sm:text-left font-normal text-black py-4 sm:text-4xl">{t('totais.title')}</th>
                </tr>
            </thead>
        <tbody className="text-sm sm:text-base">
            {resumo.map((item) => (
                <>
            <tr className="flex">
            <td className="w-full text-left border-y border-black  px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalAdministratorInCommissions')}</div>
                <div className="text-black">{t('totais.totalAdministratorInCommissionsValue', {
                  value: formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">{t('totais.administratorDeductions')}</div>
                <div className="text-black">{t('totais.administratorDeductionsValue', {
                  value: formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalOwnershipInTransfers')}</div>
                <div className="text-black">{t('totais.totalOwnershipInTransfersValue', {
                  value: formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.homeownerDeductions')}</div>
                <div className="text-black">{t('totais.homeownerDeductionsValue', {
                  value: formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.ownerSubtotal')}</div>
                <div className="text-black">{t('totais.ownerSubtotalValue', {
                  value: formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.administratorSubtotal')}</div>
                <div className="text-black">{t('totais.administratorSubtotalValue', {
                  value: formatNumber(item.comissions.adminValue)
                })}</div>
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