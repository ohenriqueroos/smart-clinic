import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";

import themeOptions from "./theme";
import router from "./router";
import store, { useAppSelector } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Theme></Theme>
    </Provider>
  );
}

function Theme() {
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = createTheme(themeOptions(mode));
  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
