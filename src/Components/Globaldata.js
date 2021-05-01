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
      height: theme.spacing(16),
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
export default function Globaldata() {
  const [globalCases, setGlobalCases] = useState();
  const [dataLoading, setDataLoading] = useState(false);

  useEffect( ()=> {
    async function fetchGlobalCases(){
      setDataLoading(true);
      const apiResponse = await fetch("https://corona.lmao.ninja/v2/all");
      const dataFromApi = await apiResponse.json();
      setGlobalCases(dataFromApi);
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
        Global Cases
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
       <NumberFormat value={globalCases && globalCases.cases} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Global Cases
      </Typography>
          
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'orange'}}>
        <NumberFormat value={globalCases && globalCases.active} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Active Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'seagreen'}}>
        <NumberFormat value={globalCases && globalCases.recovered} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Recovered Cases
      </Typography>
      </Paper>
      <Paper elevation={3}>
      <Typography className={typoClasses.root} variant="h4" gutterBottom style={{color:'red'}}>
       <NumberFormat value={globalCases && globalCases.deaths} displayType={'text'} thousandSeparator={true} />
      </Typography>
      <Typography className={typoClasses.root} variant="subtitle1" gutterBottom>
        Fatalities
      </Typography>
      </Paper>
    </div>
  );
}
