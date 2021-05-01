import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'

export default function Mychart(){
    return(
      <div>
        <Line 
          data={{
            labels: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sep', 'oct','nov', 'dec'],
            datasets:[{
              label: 'Global Cases',
              data: [12, 23, 45,200, 489, 850, 1780, 2950, 5049, 8044, 14029, 23545 ],
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
              data: [12, 17, 28, 50, 100, 220, 505, 1050, 2100, 3292, 5234, 8567 ],
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
              data: [12, 17, 28, 150, 300, 520, 1205, 2250, 3500, 5292, 8234, 15567 ],
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
              data: [1, 7, 12, 23, 46, 120, 205, 350, 620, 1092, 1834, 2467 ],
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