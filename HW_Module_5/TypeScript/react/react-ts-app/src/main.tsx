import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {setUpStore} from "./redux/store/store";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import theme from "./Theme/createTheme";
import './index.css'

const store = setUpStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <App/>
      </StyledEngineProvider>
    </ThemeProvider>
  </Provider>
)
