import moment from 'moment';
import 'moment/dist/locale/pt-br';

import { separateWords, formatNumberByLanguage } from "../functions/functions"
import QuickChart from "quickchart-js"

export function CommissionBookings({ t, language, currency, canal_de_comissoes, summary }) {

  // await import(`moment/dist/locale/${language}`) 
  // import `moment/locale/${language}`
  moment.locale(language)

  console.log("setLanguge", language)
  const statusCounts = canal_de_comissoes.reduce((acc, booking) => {
    const status = booking.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
  const formattedStatusCounts = Object.entries(statusCounts).map(([status, count]) => ({
    [status]: count,
  }));


  const chart2 = new QuickChart();

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
              text: summary[0].bookingCount,
              font: { size: 20 },
              color: 'black'
            },
            {
              text: 'Total',
              font: { size: 10 },
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

  return (
    <>
      <h1 className="text-2xl font-normal text-black py-2">{t('commissionBookings.title')}</h1>

      <table className="w-full flex flex-col tabela-fixed">
        <thead className="flex text-center text-sm">
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

        {
          canal_de_comissoes.map((item) => (
            <tbody className="w-full flex flex-col justify-center text-center  text-xs print:overflow-auto">
              <tr className="w-full flex" key={item.id}>
                <td className="print:w-[80%] w-full text-xs text-left border-y  border-black border-t-0 px-1 py-2 text-ellipsis overflow-hidden">#{item.id}</td>
                <td className="print:w-[85%]  w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px] truncate">{item.primaryGuest.name}</td>
                <td className="print:w-4/5 w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter print:text-[10px] truncate">{item.origin}</td>
                <td className="print:w-[85%] w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px]">{moment(item.checkIn).format("l")}</td>
                <td className="print:w-[85%] w-full text-left border-y  border-black border-t-0 px-1 py-2 print:tracking-tighter	print:text-[10px]">{moment(item.checkOut).format("l")}</td>
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
                  value: formatNumberByLanguage(item.values.comissions.rateValue, currency, language) 
                })}</td>
                <td className="print:w-[80%]  w-full text-left border-y  border-black border-t-0 px-1 py-2 font-bold">20%</td>
                <td className="print:w-[85%]  w-full text-left border-y  border-black border-t-0 px-1 py-2">{t('commissionBookings.bookings.commission', {
                  value: formatNumberByLanguage(item.values.comissions.comissions.RATES, currency, language) 
                })}</td>
                <td className="print:w-[82%] w-full text-left border-y  border-black border-t-0 px-1 py-2">{t('commissionBookings.bookings.owner', {
                  value: formatNumberByLanguage(item.values.comissions.ownerValue, currency, language) 
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
                      value:  formatNumberByLanguage(item.values.taxBreakDown.CLEANING_FEE, currency, language) 
                    })}</td>
                    <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">100%</td>
                    <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.cleaning.commission', {
                      value:  formatNumberByLanguage(item.values.taxBreakDown.CLEANING_FEE, currency, language) 
                    })}</td>
                    <td className="w-full text-left border-0  border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.cleaning.prop')} {formatNumberByLanguage("0,00", currency, language)}</td>
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
                      value:  formatNumberByLanguage(item.values.taxBreakDown.SERVICE_FEE, currency, language) 
                    })}</td>
                    <td className="w-full text-left border-y border-black px-1 py-2"></td>
                    <td className="w-full text-left border-y border-black px-1 py-2">{t('commissionBookings.expenses.services.commission', {
                      value:  formatNumberByLanguage(item.values.taxBreakDown.SERVICE_FEE, currency, language)
                    })}</td>
                    <td className="w-full text-left border-y border-black px-1 py-2">{t('commissionBookings.expenses.services.prop')} {formatNumberByLanguage("0,00", currency, language)}</td>
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
                      value:  formatNumberByLanguage(item.values.comissions.comissions.UTILITY_FEE, currency, language) 
                    })}</td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2"></td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.utility.commission', {
                      value:  formatNumberByLanguage(item.values.comissions.comissions.UTILITY_FEE, currency, language) 
                    })}</td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.utility.prop')} {formatNumberByLanguage("0,00", currency, language)}</td>
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
                      value:  formatNumberByLanguage(item.values.comissions.comissions.OTHER_FEE, currency, language)
                    })}</td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2"></td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.others.value', {
                      value:  formatNumberByLanguage(item.values.comissions.comissions.OTHER_FEE, currency, language)
                    })}</td>
                    <td className="w-full text-left border-y border-black border-t-0 px-1 py-2">{t('commissionBookings.expenses.others.prop')} {formatNumberByLanguage("0,00", currency, language)}</td>
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
                      value:  formatNumberByLanguage(item.values.rateValue, currency, language) 
                    })}</td>
                    <td className="w-full  text-left font-bold border-0 border-black px-1 py-2"></td>
                    <td className="w-full text-left font-bold border-0 border-black px-1 py-2">{t('commissionBookings.total.commissionSum', {
                      value:  formatNumberByLanguage(item.values.comissions.totalComission, currency, language) 
                    })}</td>
                    <td className="w-full text-left font-bold border-0 border-black px-1 py-2">{t('commissionBookings.total.ownerSum', {
                      value:  formatNumberByLanguage(item.values.comissions.ownerValue, currency, language) 
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
              value:  formatNumberByLanguage(summary[0].comissions.totalComission, currency, language) 
            })}</td>
            <td className="print:w-[82%] w-full text-left font-bold border-b-0 border-y  border-black px-1 py-2">{t('commissionBookings.totalCommission.owner', {
              value:  formatNumberByLanguage(summary[0].comissions.ownerValue, currency, language) 
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
                      : language === 'en' ? Object.keys(item) : Object.keys(item) == "cancelled" ? "Cancelado"
                        : language === 'en' ? Object.keys(item) : Object.keys(item) == "confirmed" ? "Confirmado"
                          : Object.keys(item)
                  }
                </span>
              </div>

              <div>
                <svg className="w-7 h-7 lg:inline-block lg:w-10 lg:h-10  rounded-full">
                  {
                    Object.keys(item) == "inConfirmation" ? <rect x="0" y="0" width="100" height="100" fill="#3b82f6" />
                      : Object.keys(item) == "cancelled" ? <rect x="0" y="0" width="100" height="100" fill="#eee" />
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
    </>
  )
}