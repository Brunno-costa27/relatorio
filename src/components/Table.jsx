import data from "../database/data-set"
import formatNumber from "../functions/functions.js"
import moment from 'moment';
import 'moment/min/locales'
import '../../src/index.css'
// moment.locale('US')

import QuickChart from "quickchart-js"
// import { TableHeader } from "./TableHeader.jsx";



export function Table({t, language}){


    // Função para truncar o nome do cliente
    const truncateName = (name, maxLength) => {
      if (name.length > maxLength) {
        return name.substring(0, maxLength) + '...';
      }
      return name;
    };

    function separateWords(input) {
      // Adicionar um espaço antes de cada letra maiúscula, exceto para a primeira letra
      let result = input.replace(/([A-Z])/g, ' $1');
    
      // Transformar a primeira letra em maiúscula
      result = result.charAt(0).toUpperCase() + result.slice(1);
    
      return result;
    }

    function formatNumberUSD(number) {
      const numberString = number.toString();
      console.log(numberString)
      return numberString.replace(',', '.')
    }
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
        <table className="w-full font-sans flex flex-col table-auto">
            <thead>
                <tr>
                <th className="text-2xl font-normal text-black py-2">{t('summary.summary')}</th>
                </tr>
            </thead>

            <tbody className="text-xs">
                {resumo.map((item) => (
                    <>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.occupation')}</div>
                    <div className="text-black">{((item.bookingCount-item.cancelattionSummary.count)/item.bookingCount*100).toFixed(2)}%</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalReservations')}</div>
                    <div className="text-black">{item.bookingCount}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.averageStay')}</div>
                    <div className="text-black">{item.avgLengthOfStayPerBooking.toFixed(2)}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.averageDailyRate')}</div>
                    <div className="text-black">{t('summary.averageDailyRateValue', {
                      value: language == 'en' ? formatNumberUSD(formatNumber(item.avgBookingValuePerDay)) : formatNumber(item.avgBookingValuePerDay)})}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.canceledReservations')}</div>
                    <div className="text-black">{item.cancelattionSummary.count}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left  text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalValueInDailyRates')}</div>
                    <div className="text-black">{t('summary.totalValueInDailyRatesValue', {
                      value: language == 'en' ? formatNumberUSD(formatNumber(item.bookingValue)) : formatNumber(item.bookingValue)})}</div>
                    </div>
                </td>
                </tr>
                <tr className="flex">
                <td className="w-full text-left border-y text-black border-black px-2 py-2">
                    <div className="flex justify-between">
                    <div className="text-black">{t('summary.totalValueInFees')}</div>
                    <div className="text-black">{t('summary.totalValueInFeesValue', {
                      value: language == 'en' ? formatNumberUSD(formatNumber(item.taxTotal)) : formatNumber(item.taxTotal)
                    })}</div>
                    </div>
                </td>
                </tr>
                </>
                ))}
            </tbody>
          </table>

          {/* GRÁFICO */}

          <div className="w-full flex justify-between">
            <div className="w-1/3 flex flex-col justify-center items-center">
                  
            <div class="w-full flex items-center justify-between px-2 py-2 rounded-md text-black">
                <div>
                  <span class="text-2xl font-normal mr-7 ">{t('summary.graphic.occupation')}</span>
                </div>
                <div>
                  <svg className="w-7 h-7 rounded-full">
                    <rect x="0" y="0" width="100" height="100" fill="#15803d" />
                  </svg>
                </div>
            </div>

            <div class="w-full flex items-center justify-between px-2 py-2 rounded-md text-black">
              <div>
                <span class="text-2xl font-normal mr-7">{t('summary.graphic.canceled')}</span>
              </div>
              <div>
                <svg className="w-7 h-7 rounded-full">
                  <rect x="0" y="0" width="90" height="90" fill="#eee" />
                </svg>
              </div>
            </div>
            </div>
            <div className="w-full flex justify-end">
              <img className="w-1/2" src={graficSummary} alt="" />
            </div>
          </div>



    {/* Reservas por canal */}


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
              value: language == 'en' ? formatNumberUSD(formatNumber(item.BookingCom.bookingValue)) : formatNumber(item.BookingCom.bookingValue)
            })}</td>
        </tr>

          <tr className="w-full flex text-center">
            <td className="w-full text-left border-y border-black px-4 py-4">Airbnb</td>
            <td className="w-full  text-left border-y border-black px-4 py-4">{item.Airbnb.count}</td>
            <td className="w-full text-left border-y border-black px-4 py-4">{item.Airbnb.cancelledCount}</td>
            <td className="w-full text-right border-y border-black px-4 py-4">{t('ReservationsByChannel.table.bookingCom', {
              value: language == 'en' ? formatNumberUSD(formatNumber(item.Airbnb.bookingValue)) : formatNumber(item.Airbnb.bookingValue)
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
            
            <div className="w-full flex justify-end py-2">
              <img className="w-1/2" src={graficOrigens} alt="" />
            </div>
        </div>


    {/* Reservas por comissões */}

    <h1 className="text-2xl font-normal text-black py-2">{t('commissionBookings.title')}</h1>

    <table className="w-full flex flex-col tabela-fixed">
      <thead  className="flex text-center text-sm">
        <tr className="w-full flex justify-center items-center">
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black px-1 py-2">{t('commissionBookings.header.number')}</th>
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.name')}</th>
          <th className="print:tracking-tighter print:truncate	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.channel')}</th>
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.in')}</th>
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.oct')}</th>
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.status')}</th>
          <th className="print:tracking-tighter 	w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.item')}</th>
          <th className="print:tracking-tighter  w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.value')}</th>
          <th className="print:tracking-tighter 	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.calc')}</th>
          <th className="print:tracking-tighter print:truncate	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.commission')}</th>
          <th className="print:tracking-tighter print:truncate	 w-full text-left font-bold text-black border-y  border-black  px-1 py-2">{t('commissionBookings.header.owner')}</th>
        </tr>
      </thead>
        {/* <TableHeader /> */}

        { 
          canal_de_comissoes.map((item) => (
          <tbody className="w-full flex flex-col justify-center text-center  text-xs print:overflow-auto">
            <tr className="w-full flex" key={item.id}>
              <td className="print:w-[80%] w-full text-xs text-left border-y  border-black border-t-0 px-1 py-2 text-ellipsis overflow-hidden">#{item.id}</td>
              <td className="print:w-[85%]  w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px]">{truncateName(item.primaryGuest.name, 20)}</td>
              <td className="print:w-4/5 w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter print:text-[10px] truncate">{item.origin}</td>
              <td className="print:w-[85%] w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px]">{language === 'en' ? moment(item.checkIn, "YYYY-MM-DD").format("l") : moment(item.checkIn).format("DD/MM/YYYY")}</td>
              <td className="print:w-[85%] w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px]">{language === 'en' ? moment(item.checkOut, "YYYY-MM-DD").format("l") : moment(item.checkOut).format("DD/MM/YYYY")}</td>
              <td className="print:w-[80%]  w-full text-left border-y  border-black border-t-0 px-1   py-2 print:tracking-tighter print:text-[10px] truncate">
                {
                  language === 'en' ? separateWords(item.status) : item.status === "inConfirmation" ? "Em confirmação"
                  : language === 'en' ? item.status : item.status === "cancelled" ? "Cancelado"
                  : language === 'en' ? item.status : item.status === "confirmed" ? "Confirmado"
                  : ""
                  }
              </td>
              <td className="  w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter print:w-[85%]">{t('commissionBookings.bookings.daily')}</td>
              <td className="print:w-[85%] w-full text-left border-y  border-black border-t-0 px-1 py-2 ">{t('commissionBookings.bookings.valueCommission', {
                value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.rateValue)) : formatNumber(item.values.comissions.rateValue)
              })}</td>
              <td className="print:w-[80%]  w-full text-left border-y  border-black border-t-0 px-1 py-2 font-bold">20%</td>
              <td className="print:w-[85%]  w-full text-left border-y  border-black border-t-0 px-1 py-2">{t('commissionBookings.bookings.commission', {
                value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.comissions.RATES)) : formatNumber(item.values.comissions.comissions.RATES)
              })}</td>
              <td className="print:w-[82%] w-full text-left border-y  border-black border-t-0 px-1 py-2">{t('commissionBookings.bookings.owner', {
                value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.ownerValue)) : formatNumber(item.values.comissions.ownerValue)
              })}</td>
            </tr>
                

            <table className="w-full flex flex-col justify-end items-end ">
              <tbody className="w-full text-xs border-b border-black">
                <tr className="w-full flex text-center">
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full   border-black text-left px-1 py-2"></td>
                  <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">Limp.</td>
                  <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.cleaning.value', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.taxBreakDown.CLEANING_FEE)) : formatNumber(item.values.taxBreakDown.CLEANING_FEE)
                  })}</td>
                  <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">100%</td>
                  <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.cleaning.commission', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.taxBreakDown.CLEANING_FEE)) : formatNumber(item.values.taxBreakDown.CLEANING_FEE)
                  })}</td>
                  <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.cleaning.prop')} {formatNumberUSD("0,00")}</td>
                </tr>

                <tr className="w-full flex text-center" >
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black  px-1 py-2">Serv.</td>
                  <td className="w-full text-left border-y border-black px-1 py-2">{t('commissionBookings.expenses.services.value', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.taxBreakDown.SERVICE_FEE)) : formatNumber(item.values.taxBreakDown.SERVICE_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black px-1 py-2">{t('commissionBookings.expenses.services.commission', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.taxBreakDown.SERVICE_FEE)) : formatNumber(item.values.taxBreakDown.SERVICE_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black px-1 py-2">{t('commissionBookings.expenses.services.prop')} {formatNumberUSD("0,00")}</td>
                </tr>

                <tr className="w-full flex text-center" >
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">Util.</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.utility.value', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.comissions.UTILITY_FEE)) : formatNumber(item.values.comissions.comissions.UTILITY_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.utility.commission', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.comissions.UTILITY_FEE)) : formatNumber(item.values.comissions.comissions.UTILITY_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.utility.prop')} {formatNumberUSD("0,00")}</td>
                </tr>

                <tr className="w-full flex text-center" >
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">Outras</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.others.value', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.comissions.OTHER_FEE)) : formatNumber(item.values.comissions.comissions.OTHER_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2"></td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.others.value', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.comissions.OTHER_FEE)) : formatNumber(item.values.comissions.comissions.OTHER_FEE)
                  })}</td>
                  <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.others.prop')} {formatNumberUSD("0,00")}</td>
                </tr>
                <tr className="w-full flex text-center" >
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full border-none text-left px-1 py-2"></td>
                  <td className="w-full text-left font-bold border-0 border-black px-1 py-2">Total</td>
                  <td className="w-full text-left font-bold border-0 border-black px-1 py-2">{t('commissionBookings.total.valueSum', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.rateValue)) :  formatNumber(item.values.rateValue)
                  })}</td>
                  <td className="w-full  text-left font-bold border-0 border-black px-1 py-2"></td>
                  <td className="w-full text-left font-bold border-0 border-black px-1 py-2">{t('commissionBookings.total.commissionSum', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.totalComission)) : formatNumber(item.values.comissions.totalComission)
                  })}</td>
                  <td className="w-full text-left font-bold border-0 border-black px-1 py-2">{t('commissionBookings.total.ownerSum', {
                    value: language == 'en' ? formatNumberUSD(formatNumber(item.values.comissions.ownerValue)) : formatNumber(item.values.comissions.ownerValue)
                  })}</td>
                </tr>
              </tbody>
            </table> 
          </tbody>
      
        ))}
    </table>

    {/* total */}

                      <table className="w-full flex flex-col">
                            <tbody className="w-full text-xs">
                            <tr className="w-full flex text-center" >
                              <td className="print:w-[80%] w-full text-left font-bold border-b-0 border-y border-black px-1 py-2">Total</td>
                              <td className="print:w-[85%] w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="print:w-4/5 w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="print:w-[85%] w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="print:w-[85%] w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="print:w-[80%] w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="w-full border-y border-b-0 border-black text-left px-1 py-2"></td>
                              <td className="print:w-[85%] w-full border-y border-b-0 border-black text-left px-1 py-2"></td>

                              <td className="print:w-[80%] w-full  text-left font-bold border-b-0 border-y border-black px-1 py-2"></td>
                              <td className="print:w-[85%] w-full  text-left font-bold border-b-0 border-y border-black px-1 py-2">{t('commissionBookings.totalCommission.commission', {
                                value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].comissions.totalComission)) : formatNumber(resumo[0].comissions.totalComission)
                              })}</td>
                              <td className="print:w-[82%] w-full text-left font-bold border-b-0 border-y  border-black px-1 py-2">{t('commissionBookings.totalCommission.owner', {
                                value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].comissions.ownerValue)) : formatNumber(resumo[0].comissions.ownerValue)
                              })}</td>
                            </tr>
                            </tbody>
                      </table>

    {/* GRÁFICO */}

    <div className="w-full flex justify-between py-5">
            <div className="w-1/3 flex flex-col justify-center items-center">
              {formattedStatusCounts.map((item => 

                <div class="w-full flex justify-between items-center px-4 py-2 rounded-md text-black">
                  <div>
                    <span className={
                      Object.keys(item) == "inConfirmation" ? "text-2xl font-normal mr-3"
                      : Object.keys(item) == "confirmed" ? "text-2xl font-normal mr-3"
                      : Object.keys(item) == "cancelled" ? "text-2xl font-normal mr-3"
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

    <h1 className="text-lg sm:text-left font-normal text-black py-5 sm:text-4xl">{t('fees.title')}</h1>

    <table className="w-full flex flex-col justify-between  table-auto">
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
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)) : formatNumber(resumo[0].taxBreakDown.CLEANING_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black-800">{t('fees.bedLinenFees')}</div>
                <div className="text-black font-bold">{t('fees.bedLinenFeesValeu', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.LINEN_FEE)) : formatNumber(resumo[0].taxBreakDown.LINEN_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.serviceCharge')}</div>
                <div className="text-black font-bold">{t('fees.serviceChargeValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)) : formatNumber(resumo[0].taxBreakDown.SERVICE_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.utilityLinenFees')}</div>
                <div className="text-black font-bold">{t('fees.utilityLinenFeesValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)) : formatNumber(resumo[0].taxBreakDown.UTILITY_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-gray-800">{t('fees.otherFees')}</div>
                <div className="text-black font-bold">{t('fees.otherFeesValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxBreakDown.OTHER_FEE)) : formatNumber(resumo[0].taxBreakDown.OTHER_FEE)
                })}</div>
                </div>
            </td>
            </tr>
            
           

            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('fees.totalValue')}</div>
                <div className="text-black font-bold">{t('fees.totalValueValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(resumo[0].taxTotal)) : formatNumber(resumo[0].taxTotal)
                })}</div>
                </div>
            </td>
            </tr>
            </>
            ))}
        </tbody>
    </table>


    {/* Despesas e ajustes */}

    <h1 className="text-lg sm:text-left font-normal text-black sm:text-4xl py-5">{t('expensesAndAdjustments.title')}</h1>

    <table className="w-full flex flex-col table-auto">
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
              value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
            })}</td>
            <td className="w-full text-right border-y border-black px-4 py-4 border-t-0  font-bold">{t('expensesAndAdjustments.propValue', {
              value:language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
            })}</td>
          </tr>
        ))}
      </tbody>
    </table>


    {/* Totais */}

    <table className="w-full flex flex-col table-auto">
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
                  value: language =='en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className="text-black">{t('totais.administratorDeductions')}</div>
                <div className="text-black">{t('totais.administratorDeductionsValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.totalOwnershipInTransfers')}</div>
                <div className="text-black">{t('totais.totalOwnershipInTransfersValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black">{t('totais.homeownerDeductions')}</div>
                <div className="text-black">{t('totais.homeownerDeductionsValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.ownerSubtotal')}</div>
                <div className="text-black">{t('totais.ownerSubtotalValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.ownerValue)) : formatNumber(item.comissions.ownerValue)
                })}</div>
                </div>
            </td>
            </tr>
            <tr className="flex">
            <td className="w-full text-left border-y border-black border-t-0 px-4 py-2">
                <div className="flex justify-between">
                <div className=" text-black font-bold">{t('totais.administratorSubtotal')}</div>
                <div className="text-black">{t('totais.administratorSubtotalValue', {
                  value: language == 'en' ? formatNumberUSD(formatNumber(item.comissions.adminValue)) : formatNumber(item.comissions.adminValue)
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