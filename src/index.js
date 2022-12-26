import ReactDOM from "react-dom/client";

// context
import { ModeProvider } from "./context/ModeProvider";
import { SearchProvider } from "./context/SearchProvider";
import { HistoryProvider } from "./context/HistoryProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotificationProvider } from "./context/NotificationProvider";

// app
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageProvider>
    <ModeProvider>
      <NotificationProvider>
        <SearchProvider>
          <HistoryProvider>
            <App />
          </HistoryProvider>
        </SearchProvider>
      </NotificationProvider>
    </ModeProvider>
  </LanguageProvider>
);
