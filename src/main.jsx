import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Signin } from "./pages/Signin";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Signin />
    </ThemeProvider>
  </StrictMode>
);
