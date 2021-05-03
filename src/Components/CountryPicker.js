import React, { useState, useEffect } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';
import CountryChart from './CountryChart';
import CountryData from './CountryData';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 1170,
      margin: '0 auto',
      marginTop: 50,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function CountryPicker(){


    const [ccdata, setcdata] = useState([]);
    //    const [cload, csetload] = useState([false])
    useEffect(() => {
        async function fetchcdata() {
            //          csetload(true);
            const cresponse = await fetch('https://disease.sh/v3/covid-19/countries');
            const cdata = await cresponse.json();
        //    console.log(cdata);
            setcdata(cdata);
            //  csetload(false);
        } fetchcdata();
    }, [])

    const classes = useStyles();
    let cc;
    let [index, setIndex] = useState(0);

    return (
        <div lassName={classes.root}>
            <br></br>
            <NativeSelect id="select" onChange={(e) =>{ cc=e.target.value;
            index = ccdata.findIndex(x=>x.country===cc);
                setIndex(index);
            }}>
                {ccdata && ccdata.map(({ country }, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
            <br></br><br></br><br></br>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                    <CountryData val={index}/>
                </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                    <h2>Country Covid19 Status</h2>
                    <CountryChart val={index} />
                </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}
export default CountryPicker;