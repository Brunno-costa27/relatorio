
import {  formatNumberByLanguage } from "../functions/functions.js"
import QuickChart from "quickchart-js"
import moment from 'moment'
import 'moment/dist/locale/pt-br'

export function Summary({t, language, currency, summary}){

  moment.locale(language)

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
              ((summary[0].bookingCount-summary[0].cancelattionSummary.count)/summary[0].bookingCount*100).toFixed(0),
              100-((summary[0].bookingCount-summary[0].cancelattionSummary.count)/summary[0].bookingCount*100).toFixed(0)
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



    return(

        <>
            <table className="w-full  flex flex-col table-auto">
                <thead>
                    <tr>
                    <th className="text-2xl font-normal text-black py-2">{t('summary.summary')}</th>
                    </tr>
                </thead>

                <tbody className="text-xs">
                    {summary.map((item) => (
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
                        value: formatNumberByLanguage(item.avgBookingValuePerDay, currency, language)})}</div>
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
                        value:  formatNumberByLanguage(item.bookingValue, currency, language) })}</div>
                        </div>
                    </td>
                    </tr>
                    <tr className="flex">
                    <td className="w-full text-left border-y text-black border-black px-2 py-2">
                        <div className="flex justify-between">
                        <div className="text-black">{t('summary.totalValueInFees')}</div>
                        <div className="text-black">{t('summary.totalValueInFeesValue', {
                        value: formatNumberByLanguage(item.taxTotal, currency, language) 
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
        </>
    )
}