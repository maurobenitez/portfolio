import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import store from './app/store'
import { Provider } from 'react-redux'
import router from "./router";
import "./index.css";
import { createTheme } from '@mui/material/styles';

import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme ( {
  palette: {
    type: 'light',
    primary: {
      main: '#465837',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ccfbc6',
      paper: '#cbdeaf',
    },
    divider: 'rgba(71,98,57,0.12)',
  },
  typography: {
    fontSize: 10,
    h5: {
      fontFamily: 'Montserrat',
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);