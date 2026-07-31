import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/common/pfk-typography-standard.css";
import "./styles/common/content-density-standard.css";
import "./styles/pages/home-visual-refinement.css";
import "./styles/pages/home-experience-arc-final.css";

createRoot(document.getElementById("root")!).render(<App />);
