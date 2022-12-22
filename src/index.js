import ReactDOM from "react-dom/client";

// context
import { ModeProvider } from "./context/ModeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotificationProvider } from "./context/NotificationProvider";

// app
import App from "./App";

// styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LanguageProvider>
    <NotificationProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </NotificationProvider>
  </LanguageProvider>
);
