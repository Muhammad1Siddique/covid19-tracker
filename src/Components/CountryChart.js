import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2'


export default function CountryChart({val}) {

const [data,setdata] = useState();
useEffect(()=>{
    async function fetchData(){
        const apiresponse =await fetch('https://disease.sh/v3/covid-19/countries');
        const apidata =await apiresponse.json();
        setdata(apidata);
    }
    fetchData()

},[])
 

    return (
        <div>
        <Bar 
          data={{
            labels: ['Covid19 Country Status'],
            datasets:[{
              label: 'Total Cases',
              data: [data && data[val].cases],
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
              data: [data && data[val].active],
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
              data: [data && data[val].recovered],
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
              data: [data && data[val].deaths],
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
    );
}