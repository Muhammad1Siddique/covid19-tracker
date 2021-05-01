import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Pakistan',
  'China',
  'Turkey',
  'Iran',
  'Qater',
  'United Kingdom',
  'Russa',
  'Iraq',
  'Malasia',
  'Maldivies',
];

function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CountryPicker() {
  const classes = useStyles();
  const theme = useTheme();
  const [countryName, setCountryName] = React.useState([]);

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Countries List</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={countryName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, countryName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     
    </div>
  );
}
