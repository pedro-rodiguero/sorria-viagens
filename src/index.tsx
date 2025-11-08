import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// Import the global stylesheet. This is essential for Tailwind to work.
import "./tailwind.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
