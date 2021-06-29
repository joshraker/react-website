import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

class ApplicationTheme {
  get error(): Theme {
    return createMuiTheme({ palette: { primary: red } });
  }

  getTheme(type: 'light' | 'dark'): Theme {
    return createMuiTheme({
      palette: {
        primary: { main: '#1c44b2' },
        secondary: blue,
        type: type
      }
    });
  }
}

const themes = new ApplicationTheme();
export default themes;
