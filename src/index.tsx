import "./styles.scss"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Import the global stylesheet. This is essential for Tailwind to work.

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
