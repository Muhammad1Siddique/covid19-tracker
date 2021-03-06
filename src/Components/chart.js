import React, { useEffect,useState } from 'react';
import {Bar} from 'react-chartjs-2';


export default function Mychart(){
  const [resCharts, setResCharts] = useState();
  
  useEffect(()=>{
    async function fetchGlobal(){
      const apiResult = await fetch("https://corona.lmao.ninja/v2/all");
      const apiResultData = await apiResult.json();
      setResCharts(apiResultData);
    }
    fetchGlobal();
  },[])
    return(
      <div>
        <Bar 
          data={{
            labels: ['Covid19 WOrld Global Status'],
            datasets:[{
              label: 'Global Cases',
              data: [resCharts && resCharts.cases],
              backgroundColor:[
                'gray',
              ],
              borderColor:[
                'black',
              ],
              borderWidth: 1,
            },
            {
              label: 'Active Cases',
              data: [resCharts && resCharts.active],
              backgroundColor:[
                'orange',
                ],
              borderColor:[
                'orange',
              ],
              borderWidth: 1,
            },
            {
              label: 'Recovered Cases',
              data: [resCharts && resCharts.recovered],
              backgroundColor:[
                'seagreen',
              ],
              borderColor:[
                'green',
              ],
              borderWidth: 1,
            },
            {
              label: 'Fatalities',
              data: [resCharts && resCharts.deaths],
              backgroundColor:[
                'red',
              ],
              borderColor:[
                'brown',
              ],
              borderWidth: 1,
            },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales:{
              yAxes:[
                {
                  ticks:{
                    beginAtZero:true
                  }
                }
              ]
            }
          }}
        />
      </div>
    )
  }