import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';

const fontFamilySans = '"Source Sans Pro", "Helvetica", "Arial", sans-serif';

const navisTheme = createMuiTheme({
  direction: 'ltr',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: [360, 768, 992, 1200, 1440]
  },

  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[400],
      dark: lightBlue[500]
    },
    secondary: {
      light: orange[400],
      main: '#f06b01',
      dark: orange[600]
    },
    neutralColor: {
      light: blueGrey[600],
      main: blueGrey[700],
      dark: blueGrey[800]
    },
    error: {
      main: red.A400
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: fontFamilySans
      },
      display1: {
        fontFamily: fontFamilySans
      },
      display2: {
        fontFamily: fontFamilySans
      },
      display3: {
        fontFamily: fontFamilySans
      },
      display4: {
        fontFamily: fontFamilySans
      },
      title: {
        fontFamily: fontFamilySans,
        fontSize: '1.1rem',
        fontWeight: 600,
        color: blueGrey[700]
      },
      subheading: {
        fontFamily: fontFamilySans
      },
      body2: {
        fontFamily: fontFamilySans
      },
      body1: {
        fontFamily: fontFamilySans
      },
      caption: {
        fontFamily: fontFamilySans
      },
      button: {
        fontFamily: fontFamilySans
      },
      paragraph: {
        fontFamily: fontFamilySans
      },
      colorPrimary: {
        color: orange[500]
      },
      colorSecondary: {
        color: lightBlue[400]
      },
      colorError: {
        color: red.A400
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: 'white'
      },
      selected: {
        color: lightBlue[500]
      }
    },
    MuiSelect: {
      root: {
        fontFamily: fontFamilySans,
        fontWeight: 700,
        fontSize: 14,
        minWidth: 47
      }
    }
  }
});

export default navisTheme;
