
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
const bdoPrimary = red['500']; // #F44336
const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#445fa2',
      main: '#043673',
      dark: '#001147',
      contrastText: '#eeeeee',
    },
    secondary: {
      light: '#ffeb53',
      main: '#FDB913',
      dark: '#c58900',
      contrastText: '#eeeeee',
    },
    warning: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
      contrastText: '#eeeeee',
    },
  },
});

  export default customTheme;