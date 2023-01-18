import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import router from "./router/router";
import theme from "./styling/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <React.StrictMode>

    <ThemeProvider theme = {theme}>

      <CssBaseline />

      <RouterProvider router = {router} />

    </ThemeProvider>

  </React.StrictMode>

);