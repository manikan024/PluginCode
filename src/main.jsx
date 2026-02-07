import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h1>Hello React 🚀</h1>
    <p>React app is running successfully with Vite.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
