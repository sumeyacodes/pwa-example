import { useState } from "react";
import schoolOfCodeLogo from "/SOC-Logo.png";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={schoolOfCodeLogo} className="logo soc" alt="SOC Logo" />
      </div>
      <h1>School of Code</h1>
      <h2>Created from a Vite PWA template</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <footer>
        <a
          href="https://vite-pwa-org.netlify.app/guide/scaffolding.html"
          target="_blank"
        >
          <img src={appLogo} className="logo" alt="PWA Vite Logo" />
        </a>
        <small className="read-the-docs">
          Click on the Vite logo to learn more
        </small>
      </footer>
      <PWABadge />
    </>
  );
}

export default App;
