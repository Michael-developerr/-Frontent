import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import App from "app/App";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

import "app/styles/index.scss";
import { StoreProvider } from "app/providers/StoreProvider";
createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
