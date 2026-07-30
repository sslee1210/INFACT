import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/common/pfk-typography-standard.css";
import "./styles/common/content-density-standard.css";

createRoot(document.getElementById("root")!).render(<App />);
