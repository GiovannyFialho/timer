import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <h1>opa</h1>
    </ThemeProvider>
  );
}
