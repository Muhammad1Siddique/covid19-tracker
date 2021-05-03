import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(13),
    },
  },
}));

const useTypo = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    fontWeight: 'bold',
  },
  h4: {
    fontWeight: 'bold',
    paddingTop: 50,
  },
});
export default function CountryData({val}) {
  const [countryCases, setCountryCases] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  
  
  useEffect( ()=> {
    async function fetchGlobalCases(){
      setDataLoading(true);
      const apiCountryRes = await fetch("https://disease.sh/v3/covid-19/countries");
      const CountryFromApi = await apiCountryRes.json();
      setCountryCases(CountryFromApi);
      setDataLoading(false);
    }
    fetchGlobalCases();
  },[])
  
  const classes = useStyles();
  const typoClasses = useTypo();
  const loading = "Loading";
  if(dataLoading){
    return(
      <div className={classes.root}>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'black'}}>
        {loading}
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Total Cases
      </Typography>
          
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'orange'}}>
        {loading}
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Active Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'seagreen'}}>
        {loading}
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Recovered Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'red'}}>
        {loading}
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Fatalities
      </Typography>
      </Paper>
    </div>
    )
  }
  

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'black'}}> 
       <NumberFormat value={countryCases && countryCases[val].cases} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Total Cases
      </Typography>
          
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'orange'}}>
        <NumberFormat value={countryCases && countryCases[val].active} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Active Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'seagreen'}}>
        <NumberFormat value={countryCases && countryCases[val].recovered} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Recovered Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'red'}}>
       <NumberFormat value={countryCases && countryCases[val].deaths} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Fatalities
      </Typography>
      </Paper>
    </div>
  );
}
